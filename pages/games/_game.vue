<template>
  <article class="main-block">
    <h1>{{ game.title }}</h1>
    <div class="game-date">
      {{ game.date }}
    </div>
    <!-- eslint-disable-next-line -->
    <div v-html="$md.render(game.body)" />
  </article>
</template>

<script>
export default {
  async asyncData ({ params, payload }) {
    if (payload) {
      return { game: payload }
    } else {
      return {
        game: await require(`@/assets/content/games/${params.game}.json`)
      }
    }
  }
}
</script>
