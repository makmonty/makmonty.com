<template>
  <article class="container mx-auto px-8 my-24 flex flex-col items-center lg:flex-row flex-wrap justify-center space-y-8 lg:space-y-0 lg:space-x-12">
    <nuxt-link
      v-for="game in items"
      :key="game.slug"
      :to="'/games/' + game.slug"
    >
      <ProjectCard
        class="my-2"
        :project="game"
      />
    </nuxt-link>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('games', ['items'])
  },
};
</script>
