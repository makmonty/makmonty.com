<template>
  <nav class="flex container mx-auto items-center px-8">
    <ul class="flex p-8 space-x-8 justify-center w-full">
      <li v-for="item in menu" :key="item.to">
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          class="hover:border-b-4"
        >
          {{ item.name }}
        </NuxtLink>
        <a
          v-else
          :href="item.href"
          class="hover:border-b-4"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'CV',
          to: '/cv'
        },
        {
          name: 'Projects',
          to: '/projects'
        },
        // {
        //   name: 'Portfolio',
        //   to: '/portfolio'
        // },
        // {
        //   name: 'Contact',
        //   to: '/contact'
        // },
        // {
        //   name: 'Blog',
        //   href: 'http://blog.makmonty.com'
        // }
      ]
    };
  }
};
</script>
