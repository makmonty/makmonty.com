<template>
  <div>
    <header>
      <AppNav />
    </header>
    <div class="main-container">
      <nuxt />
    </div>

    <footer class="border-t border-primary">
      <div class="container mx-auto p-6">
        <p>Find me at...</p>
        <div class="social-icons">
          <a href="http://github.com/makmonty" title="Github">
            <i class="fab fa-github-alt" />
          </a>
          <a href="https://www.linkedin.com/in/angelbraseromoreno/" title="Linkedin">
            <i class="fab fa-linkedin-in" />
          </a>
          <a href="https://soundcloud.com/angel-brasero-moreno" title="Soundcloud">
            <i class="fab fa-soundcloud" />
          </a>
          <a href="http://twitter.com/makmonty" title="Twitter">
            <i class="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/makmonty_/" title="Instagram">
            <i class="fab fa-instagram" />
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
import AppNav from '@/components/AppNav.vue'

export default {
  components: {
    AppNav
  }
}
</script>
