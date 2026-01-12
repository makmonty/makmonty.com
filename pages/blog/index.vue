<template>
  <section class="main-block game-list">
    <article v-for="post in posts" :key="post.slug" class="post">
      <img :src="post.featuredImage">
      <h1>
        <nuxt-link :to="'/blog/' + post.slug">
          {{ post.title }}
        </nuxt-link>
      </h1>
      <div class="post-date">
        {{ post.date }}
      </div>
    </article>
  </section>
</template>

<script setup>
const posts = await useBlogPosts();
</script>
