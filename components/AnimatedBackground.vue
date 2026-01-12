<template>
  <div ref="canvasContainer" />
</template>
<script>
import * as THREE from 'three'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 })

let scene
let renderer
let camera
let light

export default {

  data () {
    return {
      scene: null,
      renderer: null,
      camera: null,
      objects: [],
      light: null
    }
  },

  mounted () {
    scene = new THREE.Scene()
    renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0xFFFFFF, 0)
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    renderer.setSize(window.innerWidth, window.innerHeight)
    light = new THREE.DirectionalLight(0xFFFFFF, 0.5)
    light.position.z = 5
    scene.add(camera)
    scene.add(light)
    this.$refs.canvasContainer.appendChild(renderer.domElement)
    camera.position.x = 5
    camera.position.y = 5
    camera.position.z = 5
    this.addObject()
    this.animate()
  },
  methods: {
    animate () {
      requestAnimationFrame(() => { this.animate() })
      renderer.render(scene, camera)
    },

    addObject () {
      const cube = new THREE.Mesh(boxGeometry, material)
      scene.add(cube)
    }
  }
}
</script>
