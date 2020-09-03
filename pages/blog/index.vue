<template>
  <section class="container mx-auto px-8 my-24">
    <article v-for="post in items" :key="post.slug" class="post">
      <img :src="post.featuredImage">
      <h2>
        <nuxt-link :to="'/blog/' + post.slug">
          {{ post.title }}
        </nuxt-link>
      </h2>
      <div class="post-date">
        {{ post.date }}
      </div>
      <div class="post-description">
        {{ post.description }}
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('blog', ['items'])
  }
}
</script>
