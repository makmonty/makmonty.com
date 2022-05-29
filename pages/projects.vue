<template>
  <article class="container mx-auto px-8 my-24 ">
    <section>
      <h2>Web experiments</h2>
      <NuxtLink
        v-for="item in webExperiments"
        :key="item.slug"
        :to="'/' + item.slug"
      >
        <ProjectCard
          class="my-2"
          :project="item"
        />
      </NuxtLink>
    </section>

    <section>
      <h2>Games</h2>
      <div class="flex flex-col items-center lg:flex-row flex-wrap justify-center space-y-8 lg:space-y-0 lg:space-x-12">
        <NuxtLink
          v-for="item in games"
          :key="item.slug"
          :to="'/games/' + item.slug"
        >
          <ProjectCard
            class="my-2"
            :project="item"
          />
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup>
const webExperiments = [
  {
    title: 'Maze',
    slug: 'maze',
    featuredImage: '/cms/img/3dbird-promo.jpg',
  }
];
const games = await useGames();
</script>
