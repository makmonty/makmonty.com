<template>
  <div ref="canvasContainer" />
</template>
<script>
import * as THREE from 'three'

const vertices = [
  new THREE.Vector3(0.5, 0, 0),
  new THREE.Vector3(-0.5, 0, 0),
  new THREE.Vector3(0, 0.866025404, 0)
]
const triangleGeometry = new THREE.Geometry()
// triangleGeometry.vertices = vertices
vertices.forEach(vertex => triangleGeometry.vertices.push(vertex))
triangleGeometry.faces.push(new THREE.Face3(0, 1, 2))
triangleGeometry.faces.push(new THREE.Face3(0, 2, 1))
triangleGeometry.computeFaceNormals()

const icosahedronGeometry = new THREE.IcosahedronGeometry(0.5)

const material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF })
// const material = new THREE.MeshNormalMaterial()

let scene
let renderer
let camera
let time
let deltaTime
const objects = []

export default {

  mounted () {
    scene = new THREE.Scene()

    renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0xFFFFFF, 0)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const cameraAspect = window.innerWidth / window.innerHeight
    // camera = new THREE.PerspectiveCamera(75, cameraAspect, 0.1, 1000)
    const cameraWidth = 30
    camera = new THREE.OrthographicCamera(-cameraWidth / 2, cameraWidth / 2, cameraWidth / (cameraAspect * 2), -cameraWidth / (cameraAspect * 2), 0.1, 1000)
    camera.position.x = 10
    camera.position.y = 10
    camera.position.z = 10
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    scene.add(camera)

    const ambLight = new THREE.AmbientLight(0xFFFFFF, 0.7)
    scene.add(ambLight)

    const light1 = new THREE.DirectionalLight(0xFF0000, 0.3)
    light1.position.x = 5
    scene.add(light1)

    const light2 = new THREE.DirectionalLight(0x00FF00, 0.3)
    light2.position.y = 5
    scene.add(light2)

    const light3 = new THREE.DirectionalLight(0x0000FF, 0.3)
    light3.position.z = 5
    scene.add(light3)

    this.addObject()

    this.$refs.canvasContainer.appendChild(renderer.domElement)

    time = new Date().getTime() / 1000
    this.animate()
  },
  methods: {
    setupFrame () {
      const currTime = new Date().getTime() / 1000
      deltaTime = currTime - time
      time = currTime
    },

    animate () {
      requestAnimationFrame(() => { this.animate() })

      this.setupFrame()

      renderer.render(scene, camera)
    },

    addObject () {
      const mesh = new THREE.Mesh(icosahedronGeometry, material)
      mesh.matrixAutoUpdate = false

      objects.push(mesh)
      let rotation = 0
      let position = new THREE.Vector3(0, 0, 0)
      mesh.onBeforeRender = function (renderer, scene, camera, geometry, material, group) {
        const angle = 90 * Math.PI / 180
        rotation += angle * deltaTime
        const quaternion = new THREE.Quaternion()
        quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rotation)
        this.matrix.setRotationFromQuaternion(quaternion)

        position = new THREE.Vector3(position.x + deltaTime, position.y, position.z)
        this.matrix.setPosition(position)
      }
      scene.add(mesh)
    }
  }
}
</script>
