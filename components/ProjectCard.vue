<template>
  <div class="w-64 rounded-lg overflow-hidden bg-primary text-light">
    <div class="card-image bg-gray-300 bg-center bg-no-repeat w-full h-64">
      <img :src="project.promoImage" :alt="project.promoImage ? project.name + ' Promo Image' : ''">
    </div>
    <div class="p-4">
      <h6 class="text-lg">
        {{ project.name }}
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style lang="scss" scoped>
.card-image {
  background-image: url('~assets/images/gamepad.png');
  background-size: 20%;
  // image-rendering: crisp-edges;
}
</style>
