<template>
  <div class="font-sans relative">
    <header class="w-full relative z-20">
      <AppNav />
    </header>

    <div class="relative z-10">
      <transition name="route">
        <nuxt />
      </transition>
    </div>

    <footer>
      <div class="container mx-auto p-8">
        <p>Find me at...</p>
        <div class="space-x-4">
          <a
            v-for="link in socialLinks"
            :key="link.title"
            :href="link.href"
            :title="link.title"
            class="text-xl"
          >
            <i :class="link.icon" />
          </a>
        </div>
      </div>
    </footer>

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-36413273-2', 'auto');
      ga('send', 'pageview');
    </script>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
  components: {
    AppNav,
  },
  data() {
    return {
      socialLinks: [
        {
          href: 'http://github.com/makmonty',
          title: 'Github',
          icon: 'fab fa-github-alt'
        },
        {
          href: 'https://www.linkedin.com/in/angelbraseromoreno/',
          title: 'Linkedin',
          icon: 'fab fa-linkedin-in'
        },
        {
          href: 'https://soundcloud.com/angel-brasero-moreno',
          title: 'Soundcloud',
          icon: 'fab fa-soundcloud'
        },
        {
          href: 'http://twitter.com/makmonty',
          title: 'Twitter',
          icon: 'fab fa-twitter'
        },
        {
          href: 'https://www.instagram.com/makmonty_/',
          title: 'Instagram',
          icon: 'fab fa-instagram'
        }
      ]
    };
  }
};
</script>
