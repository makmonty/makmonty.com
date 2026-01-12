<template lang="pug">

div
  header
    nav.main-nav
      ul
        li
          nuxt-link(to="/") Home
        li
          nuxt-link(to="cv") CV
        //- li
        //-   a(href="portfolio.pug") Portfolio
        //- li
        //-   a(href="#contact") Contact
        //- li
        //-   a(href="http://blog.makmonty.com") Blog
  .main-container
    nuxt

  footer
    .main-block
      p Find me at...
      .social-icons
        a(href="http://github.com/makmonty", title="Github")
          i.fab.fa-github-alt
        a(href="https://www.linkedin.com/in/angelbraseromoreno/", title="Linkedin")
          i.fab.fa-linkedin-in
        a(href="https://soundcloud.com/angel-brasero-moreno", title="Soundcloud")
          i.fab.fa-soundcloud
        a(href="http://twitter.com/makmonty", title="Twitter")
          i.fab.fa-twitter
        a(href="https://www.instagram.com/makmonty_/", title="Instagram")
          i.fab.fa-instagram

  script.
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-36413273-2', 'auto');
    ga('send', 'pageview');

</template>

<style lang="scss">
@import '../styles/style.scss';
</style>
