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
const geometry = new THREE.Geometry()
// geometry.vertices = vertices
vertices.forEach(vertex => geometry.vertices.push(vertex))
geometry.faces.push(new THREE.Face3(0, 1, 2))
geometry.faces.push(new THREE.Face3(0, 2, 1))
geometry.computeFaceNormals()

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

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    // camera.position.x = 5
    // camera.position.y = 5
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

      const angle = 135 * Math.PI / 180

      objects.forEach((object) => {
        object.rotateOnWorldAxis(new THREE.Vector3(0, 0, Math.sin(time)), angle * deltaTime)
        object.rotateOnWorldAxis(new THREE.Vector3(Math.cos(time), 0, 0), angle * deltaTime)
        // object.rotateOnAxis(new THREE.Vector3(0.2, 1, 0), angle * deltaTime)
        // object.rotateOnAxis(new THREE.Vector3(0, 0.2, 1), angle * deltaTime)
        // object.rotateOnAxis(new THREE.Vector3(1, 0, 0.2), angle * deltaTime)
      })

      renderer.render(scene, camera)
    },

    addObject () {
      const mesh = new THREE.Mesh(geometry, material)
      // Set center
      mesh.translateY(-0.288675135)
      mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(mesh.position.x, mesh.position.y, mesh.position.z))

      objects.push(mesh)
      scene.add(mesh)
    }
  }
}
</script>
