<template>
  <article class="container mx-auto px-8 my-24">
    <div v-if="game.featuredImage" class="text-center">
      <img class="inline-block rounded-lg w-64" :src="game.featuredImage">
    </div>
    <h1>{{ game.title }}</h1>
    <!-- eslint-disable-next-line -->
    <div v-html="$md.render(game.body)" />
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) {
      return { game: payload };
    } else {
      return {
        game: await require(`@/assets/content/games/${params.game}.json`)
      };
    }
  }
};
</script>
