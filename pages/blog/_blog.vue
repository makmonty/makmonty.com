<template>
  <article class="main-block">
    <h2>{{ blogPost.title }}</h2>
    <div v-html="$md.render(blogPost.body)" />
  </article>
</template>

<script>
export default {
  async asyncData ({ params, payload }) {
    if (payload) { return { blogPost: payload } } else {
      return {
        blogPost: await require(`@/assets/content/blog/${params.blog}.json`)
      }
    }
  }
}
</script>
