<template>
  <div ref="canvasContainer" class="w-full h-full" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import {
  OrthographicCamera,
  Scene,
  WebGLRenderer,
  Quaternion,
  Vector3,
  IcosahedronGeometry,
  MeshLambertMaterial,
  AmbientLight,
  DirectionalLight,
  Mesh
} from 'three';
import { ThreeBehavior, ThreeBehaviorObject } from '../three-engine/three-engine';

class FloatingThing extends ThreeBehavior {
  angle = (90 * Math.PI) / 180;
  floatRotation = 0;

  start() {
    this.object3d.matrixAutoUpdate = false;
  }

  update() {
    this.floatRotation += this.angle * deltaTime;
    const quaternion = new Quaternion();
    quaternion.setFromAxisAngle(new Vector3(0, 1, 0), this.floatRotation);
    this.object3d.matrix.makeRotationFromQuaternion(quaternion);
  }
}

function lerp(from: number, to: number, t: number) {
  return from * (1 - t) + to * t;
}

const cameraWidth = 30;

const icosahedronGeometry = new IcosahedronGeometry(14);

const material = new MeshLambertMaterial({ color: 0xFFFFFF });

let scene: Scene;
let renderer: WebGLRenderer;
let camera: OrthographicCamera;
let time: number;
let deltaTime: number;
const objects: ThreeBehaviorObject[] = [];

let cameraTilt = 30;
let cameraTiltTo = cameraTilt;
const cameraJaw = 45;
const cameraDistance = 50;

@Component({})
export default class FloatingThingsComponent extends Vue {
  get canvas() {
    return <HTMLElement> this.$refs.canvasContainer;
  }

  mounted() {
    window.addEventListener('resize', () => {
      this.setCanvasSize();
      this.setCameraSize();
    });

    window.addEventListener('mousemove', (event) => {
      cameraTiltTo = 90 * (window.innerHeight - event.clientY) / window.innerHeight;
    });

    scene = new Scene();

    renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0xFFFFFF, 0);
    this.setCanvasSize();

    camera = new OrthographicCamera(1, 1, 1, 1, 0.1, 1000);
    this.setCameraSize();
    this.setCameraPosition();
    scene.add(camera);

    const ambLight = new AmbientLight(0xFFFFFF, 0.5);
    scene.add(ambLight);

    const light1 = new DirectionalLight(0xFF0000, 0.5);
    light1.position.x = 5;
    scene.add(light1);

    const light2 = new DirectionalLight(0x00FF00, 0.5);
    light2.position.y = 5;
    scene.add(light2);

    const light3 = new DirectionalLight(0x0000FF, 0.5);
    light3.position.z = 5;
    scene.add(light3);

    this.spawnObject();

    this.canvas.appendChild(renderer.domElement);

    time = new Date().getTime() / 1000;
    this.animate();
  }

  setCanvasSize() {
    renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
  }

  setCameraSize() {
    const cameraAspect = this.canvas.offsetWidth / this.canvas.offsetHeight;
    camera.left = -cameraWidth / 2;
    camera.right = cameraWidth / 2;
    camera.top = cameraWidth / (cameraAspect * 2);
    camera.bottom = -cameraWidth / (cameraAspect * 2);
    camera.updateProjectionMatrix();
  }

  setCameraPosition() {
    cameraTilt = lerp(cameraTilt, cameraTiltTo, 0.1);
    const tiltRad = cameraTilt * Math.PI / 180;
    const jawRad = cameraJaw * Math.PI / 180;
    camera.position.x = Math.cos(jawRad) * Math.cos(tiltRad) * cameraDistance;
    camera.position.y = Math.sin(tiltRad) * cameraDistance;
    camera.position.z = Math.sin(jawRad) * Math.cos(tiltRad) * cameraDistance;

    camera.lookAt(new Vector3(0, 0, 0));
  }

  setupFrame() {
    const currTime = new Date().getTime() / 1000;
    deltaTime = currTime - time;
    time = currTime;
  }

  animate() {
    requestAnimationFrame(() => { this.animate(); });

    this.setupFrame();

    objects.forEach(obj => obj.runBehaviorsUpdate());

    this.setCameraPosition();

    renderer.render(scene, camera);
  }

  spawnObject() {
    const mesh = new Mesh(icosahedronGeometry, material);
    const behaviorObject = new ThreeBehaviorObject(mesh, renderer, camera);
    const behavior = behaviorObject.addBehavior(FloatingThing);

    objects.push(behaviorObject);

    scene.add(mesh);

    behavior.start();
  }
}
</script>
