<template>
  <div class="container mx-auto px-8 my-24 flex flex-wrap justify-center space-x-10">
    <ProjectCard
      v-for="project in projects"
      :key="project.key"
      class="my-2"
      :project="project"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          key: 'hand-smash',
          name: 'Hand Smash',
          promoImage: require('~/assets/images/handsmash-promo.jpg'),
          platforms: [
            'android'
          ]
        },
        {
          key: 'maxxima',
          name: 'Maxxima',
          promoImage: require('~/assets/images/maxxima-promo.jpg'),
          platforms: [
            'windows'
          ]
        },
        {
          key: '3d-bird',
          name: '3D Bird',
          promoImage: require('~/assets/images/3dbird-promo.jpg'),
          platforms: [
            'android'
          ]
        }
      ]
    };
  }
};
</script>
