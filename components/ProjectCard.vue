<template>
  <div class="w-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 duration-1000">
    <div class="card-image bg-gray-300 bg-center bg-no-repeat w-full h-64">
      <img class="h-full" :src="project.featuredImage" :alt="project.featuredImage ? project.name + ' Featured Image' : ''">
    </div>
    <div class="p-4">
      <h6 class="text-lg text-dark dark:text-light duration-1000">
        {{ project.title }}
      </h6>
      <p />
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
