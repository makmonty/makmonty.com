<template>
  <section class="main-block">
    <article v-for="post in blogPosts" :key="post.slug">
      <h2>{{ post.title }}</h2>
      <div>
        {{ post.description }}
      </div>
    </article>
  </section>
</template>

<script>
export default {
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  }
}
</script>
