<template>
  <nav class="flex container mx-auto items-center px-8">
    <div class="w-10 h-10 mr-4 relative">
      <FloatingThings />
    </div>
    <ul class="flex p-8 space-x-8">
      <li v-for="item in menu" :key="item.to">
        <Component
          :is="item.to ? 'NuxtLink' : 'a'"
          :to="item.to"
          :href="item.href"
          class="hover:border-b-4"
        >
          {{ item.name }}
        </Component>
      </li>
    </ul>
    <ColorModeToggle />
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
        // {
        //   name: 'Projects',
        //   to: '/projects'
        // },
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
