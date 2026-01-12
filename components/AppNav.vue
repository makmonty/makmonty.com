<template>
  <nav class="flex p-8 container mx-auto">
    <ul class="flex space-x-8">
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
export default {
  data () {
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
    }
  }
}
</script>
