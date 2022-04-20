<template>
  <div>
    <header class="w-full relative z-20">
      <AppNav />
    </header>

    <div class="relative z-10">
      <slot />
    </div>

    <footer>
      <div class="container mx-auto p-8">
        <p>Find me at...</p>
        <div class="space-x-8 mt-8 text-3xl">
          <a
            v-for="link in socialLinks"
            :key="link.title"
            :href="link.href"
            :title="link.title"
          >
            <client-only>
              <i :class="['lab', 'la-' + link.icon]" />
              <!-- <unicon :name="link.icon" width="32" height="32" /> -->
            </client-only>
          </a>
        </div>
      </div>
    </footer>

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
  },
  head() {
    return {
      bodyAttrs: {
        class: 'font-sans relative text-dark bg-light dark:bg-dark dark:text-light duration-1000'
      }
    };
  }
};
</script>
