<template>
  <section class="container mx-auto px-8 my-24">
    <BlogPostCard
      v-for="post in publishedItems"
      :key="post.slug"
      :post="post"
    />

    <article v-if="!publishedItems.length">
      <p class="text-2xl text-center">
        There are no blog posts yet. Check back later!
      </p>
    </article>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('blog', ['publishedItems'])
  }
};
</script>
