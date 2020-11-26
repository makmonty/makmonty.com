<template>
  <div class="font-sans relative text-dark bg-light dark:bg-dark dark:text-light duration-1000">
    <header class="w-full relative z-20">
      <AppNav />
    </header>

    <div class="relative z-10">
      <nuxt />
    </div>

    <footer>
      <div class="container mx-auto p-8">
        <p>Find me at...</p>
        <div class="space-x-8 mt-8">
          <a
            v-for="link in socialLinks"
            :key="link.title"
            :href="link.href"
            :title="link.title"
          >
            <client-only>
              <unicon :name="link.icon" width="32" height="32" />
            </client-only>
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
export default {
  data() {
    return {
      socialLinks: [
        {
          href: 'http://github.com/makmonty',
          title: 'Github',
          icon: 'github'
        },
        {
          href: 'https://www.linkedin.com/in/angelbraseromoreno/',
          title: 'Linkedin',
          icon: 'linkedin'
        },
        {
          href: 'https://soundcloud.com/angel-brasero-moreno',
          title: 'Soundcloud',
          icon: 'soundcloud'
        },
        {
          href: 'http://twitter.com/makmonty',
          title: 'Twitter',
          icon: 'twitter'
        },
        {
          href: 'https://www.instagram.com/makmonty_/',
          title: 'Instagram',
          icon: 'instagram'
        }
      ]
    };
  }
};
</script>
