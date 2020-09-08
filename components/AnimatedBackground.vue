<template>
  <div ref="canvasContainer" class="w-full h-full" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import * as THREE from 'three';
import { ThreeBehavior, ThreeBehaviorObject } from '@/three-engine/three-engine';
import { Camera, OrthographicCamera, Renderer, Scene, WebGLRenderer } from 'three';

class FloatingThing extends ThreeBehavior {
  angle = 90 * Math.PI / 180
  floatRotation = 0
  floatPosition = new THREE.Vector3(
    Math.random() * this.renderer.domElement.offsetWidth - this.renderer.domElement.offsetWidth / 2,
    this.renderer.domElement.offsetHeight / 2,
    0
  )

  start() {
    this.object3d.matrixAutoUpdate = false;
  }

  update() {
    this.floatRotation += this.angle * deltaTime;
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.floatRotation);
    this.matrix.makeRotationFromQuaternion(quaternion);

    this.floatPosition = new THREE.Vector3(this.floatPosition.x, this.floatPosition.y - deltaTime, this.floatPosition.z);
    this.matrix.setPosition(this.floatPosition);
  }
}

const cameraWidth = 30;

// const vertices = [
//   new THREE.Vector3(0.5, 0, 0),
//   new THREE.Vector3(-0.5, 0, 0),
//   new THREE.Vector3(0, 0.866025404, 0)
// ]
// const triangleGeometry = new THREE.Geometry()
// // triangleGeometry.vertices = vertices
// vertices.forEach(vertex => triangleGeometry.vertices.push(vertex))
// triangleGeometry.faces.push(new THREE.Face3(0, 1, 2))
// triangleGeometry.faces.push(new THREE.Face3(0, 2, 1))
// triangleGeometry.computeFaceNormals()

const icosahedronGeometry = new THREE.IcosahedronGeometry(0.5);

const material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
// const material = new THREE.MeshNormalMaterial()

let scene: Scene;
let renderer: WebGLRenderer;
let camera: OrthographicCamera;
let time: number;
let deltaTime: number;
const objects: ThreeBehaviorObject[] = [];

@Component({})
export default class AnimatedBackground extends Vue {
  get canvas() {
    return <HTMLElement> this.$refs.canvasContainer;
  }

  mounted() {
    window.addEventListener('resize', () => {
      this.setCanvasSize();
      this.setCameraSize();
    });

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0xFFFFFF, 0);
    this.setCanvasSize();

    // camera = new THREE.PerspectiveCamera(75, cameraAspect, 0.1, 1000)
    camera = new THREE.OrthographicCamera(1, 1, 1, 1, 0.1, 1000);
    this.setCameraSize();
    camera.position.x = 5;
    camera.position.y = 5;
    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    const ambLight = new THREE.AmbientLight(0xFFFFFF, 0.7);
    scene.add(ambLight);

    const light1 = new THREE.DirectionalLight(0xFF0000, 0.3);
    light1.position.x = 5;
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x00FF00, 0.3);
    light2.position.y = 5;
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0x0000FF, 0.3);
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

  setupFrame() {
    const currTime = new Date().getTime() / 1000;
    deltaTime = currTime - time;
    time = currTime;
  }

  animate() {
    requestAnimationFrame(() => { this.animate(); });

    this.setupFrame();

    objects.forEach(obj => obj.runBehaviorsUpdate());

    renderer.render(scene, camera);
  }

  spawnObject() {
    const mesh = new THREE.Mesh(icosahedronGeometry, material);
    const behaviorObject = new ThreeBehaviorObject(mesh, renderer, camera);
    const behavior = behaviorObject.addBehavior(FloatingThing);

    objects.push(behaviorObject);

    scene.add(mesh);

    behavior.start();
  }
}
</script>
