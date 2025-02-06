<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: String,
  }
}>();
const { error } = toRefs(props);
</script>

<template>
  <NuxtLayout name="default">
    <article class="container mx-auto px-8 my-24 text-center">
      <h1 v-if="error.statusCode === '404'">
        Page not found
      </h1>
      <h1 v-else>
        An error occurred
      </h1>
      <div>
        <img src="/cms/img/dennisnedry.gif" alt="Ah ah ah! You didn't say the magic word!" class="mx-auto mb-12 border border-black" />
      </div>
      <nuxt-link to="/">
        Go back to the home page
      </nuxt-link>
    </article>
  </NuxtLayout>
</template>
