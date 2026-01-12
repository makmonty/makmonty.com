<template>
  <div>
    <header class="h-64 overflow-hidden bg-center bg-cover" :style="{backgroundImage: 'url(' + post.featuredImage + ')'}" />
    <article class="container mx-auto px-8 my-24">
      <h1 class="mb-0">
        {{ post.title }}
      </h1>
      <div class="mb-12 text-gray-600">
        {{ postDate }}
      </div>
      <!-- eslint-disable-next-line -->
      <div v-html="$md.render(post.body)" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) {
      return { post: payload };
    } else {
      return {
        post: await require(`@/assets/content/blog/${params.blog}.json`)
      };
    }
  },
  computed: {
    postDate() {
      return new Date(this.post.date).toLocaleDateString();
    }
  }
};
</script>
