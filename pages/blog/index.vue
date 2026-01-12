<template>
  <section class="main-block post-list">
    <article v-for="post in blogPosts" :key="post.slug" class="post">
      <img :src="post.featuredImage">
      <h1>
        <nuxt-link :to="'/blog/' + post.slug">
          {{ post.title }}
        </nuxt-link>
      </h1>
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
export default {
  computed: {
    blogPosts () {
      return this.$store.state.content.blogPosts
    }
  }
}
</script>
