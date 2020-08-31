<template>
  <article class="main-block">
    <h1>{{ post.title }}</h1>
    <div class="post-date">
      {{ post.date }}
    </div>
    <!-- eslint-disable-next-line -->
    <div v-html="$md.render(post.body)" />
  </article>
</template>

<script>
export default {
  async asyncData ({ params, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      return {
        post: await require(`@/assets/content/blog/${params.blog}.json`)
      }
    }
  }
}
</script>
