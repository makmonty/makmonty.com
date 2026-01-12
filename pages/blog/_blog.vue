<template>
  <article class="main-block">
    <h1>{{ blogPost.title }}</h1>
    <div class="post-date">
      {{ post.date }}
    </div>
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
