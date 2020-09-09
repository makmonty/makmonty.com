<template>
  <nav class="flex container mx-auto items-center">
    <div class="w-10 h-10 ml-8 mr-4 relative">
      <FloatingThings />
    </div>
    <ul class="flex p-8 space-x-8">
      <li v-for="item in menu" :key="item.to">
        <nuxt-link :to="item.to" class="hover:border-b-4">
          {{ item.name }}
        </nuxt-link>
      </li>
    <!-- //- li
    //-   a(href="portfolio.pug") Portfolio
    //- li
    //-   a(href="#contact") Contact
    //- li
    //-   a(href="http://blog.makmonty.com") Blog -->
    </ul>
  </nav>
</template>

<script>
import FloatingThings from '@/components/FloatingThings';

export default {
  components: {
    FloatingThings
  },
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
        }
      ]
    };
  }
};
</script>
