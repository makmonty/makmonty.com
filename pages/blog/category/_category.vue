<template>
  <section class="container mx-auto px-8 my-24">
    <h1>{{ category.name }}</h1>
    <article v-for="post in byCategory(category.slug)" :key="post.slug" class="post">
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
import { mapGetters } from 'vuex';

export default {
  async asyncData({ params, payload }) {
    if (payload) {
      return { post: payload };
    } else {
      return {
        category: await require(`@/assets/content/categories/${params.category}.json`)
      };
    }
  },
  computed: {
    ...mapGetters('blog', ['byCategory'])
  }
};
</script>
