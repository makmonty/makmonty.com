<template>
  <div class="container mx-auto px-8 my-24 flex flex-wrap justify-center space-x-12">
    <ProjectCard
      v-for="game in items"
      :key="game.slug"
      class="my-2"
      :project="game"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('games', ['items'])
  },
};
</script>
