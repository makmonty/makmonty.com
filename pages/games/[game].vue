<template>
  <article class="container mx-auto px-8 my-24">
    <div v-if="game.featuredImage" class="text-center">
      <img class="inline-block rounded-lg w-64" :src="game.featuredImage">
    </div>
    <h1>{{ game.title }}</h1>
    <div class="flex space-x-10">
      <!-- eslint-disable-next-line -->
      <div v-html="$mdit.render(game.body)" class="flex-grow" />
      <aside class="flex-shrink-0 mt-16">
        <h4>Available for</h4>
        <ul class="flex">
          <li v-for="platform in game.platforms" :key="platform" class="text-2xl space-x-4">
            <i :class="'lab la-' + platform" :aria-label="platform" />
          </li>
        </ul>
        <div v-if="game.links && game.links.length" class="mt-10">
          <h4>Links</h4>
          <ul>
            <li v-for="link in game.links" :key="link.url">
              <a :href="link.url">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </article>
</template>

<script setup>
const route = useRoute();
const games = await useGames();
const game = games.value.find(g => g.slug === route.params.game);
</script>

<style scoped>
aside {
  width: 150px;
}
</style>
