<template>
  <article class="flex">
    <div class="w-40 h-40 flex-shrink-0 flex-grow-0 overflow-hidden rounded-lg bg-cover bg-center" :style="{backgroundImage: 'url(' + post.featuredImage + ')'}" />
    <div class="ml-8">
      <h2 class="mt-0 mb-0">
        <nuxt-link :to="'/blog/' + post.slug">
          {{ post.title }}
        </nuxt-link>
      </h2>
      <div class="mb-4">
        {{ postDate }}
      </div>
      <div class="post-description">
        {{ post.description }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: Object
  },

  computed: {
    postDate() {
      return new Date(this.post.date).toLocaleDateString();
    }
  }
};
</script>
