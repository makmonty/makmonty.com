<template>
  <section class="main-block game-list">
    <article v-for="game in games" :key="game.slug" class="game">
      <img :src="game.featuredImage">
      <h1>
        <nuxt-link :to="'/games/' + game.slug">
          {{ game.title }}
        </nuxt-link>
      </h1>
      <div class="game-date">
        {{ game.date }}
      </div>
      <div class="game-description">
        {{ game.description }}
      </div>
    </article>
  </section>
</template>

<script setup>
const games = await useGames();
</script>
