<template>
  <article class="flex flex-col pb-24">
    <section class="container mx-auto px-8 sm:-mt-24 sm:h-screen flex sm:items-center">
      <div class="flex flex-col lg:flex-row items-center text-xl lg:space-x-6 space-y-6 lg:space-y-0">
        <img
          :src="avatar.src"
          class="w-64 h-64 object-cover rounded-full"
          :class="avatar.className"
          alt="My beautiful face"
        >
        <div class="flex flex-col justify-center space-y-6">
          <h1 class="text-4xl mb-0 leading-none">
            I'm <span class="text-primary">Ángel Brasero</span>
          </h1>
          <p class="summary">
            I'm a software engineer. Passionate about technology and software development.<br>
            I spend most of my time coding.
          </p>
          <div class="mt-4">
            <nuxt-link
              v-slot="{ navigate }"
              to="/cv"
            >
              <BaseButton @click="navigate">
                Check my CV
              </BaseButton>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto mt-10 sm:-mt-12 px-8">
      <h2 class="mt-0 mb-12">
        In summary, I do...
      </h2>
      <div class="flex text-center justify-around flex-col lg:flex-row space-y-6 lg:space-y-0">
        <div v-for="discipline in disciplines" :key="discipline.name">
          <client-only>
            <i class="text-4xl text-primary" :class="discipline.icon" />
          </client-only>
          <h3 class="text-2xl my-1">
            {{ discipline.name }}
          </h3>
          <p>{{ discipline.description }}</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    const avatares = {
      pod: {
        src: '/images/angel-pod-512x512.jpg',
        className: ''
      },
      pixel: {
        src: '/images/yo-24x24.png',
        className: 'rendering-crisp-edges p-4 border-primary'
      }
    };

    return {
      avatar: avatares.pod,
      disciplines: [
        {
          name: 'Frontend',
          icon: 'las la-desktop',
          description: 'Vue, Angular, React, Ember...'
        },
        {
          name: 'Backend',
          icon: 'las la-server',
          description: 'NodeJS, PHP, MySQL, MongoDB...'
        },
        {
          name: 'Games',
          icon: 'las la-gamepad',
          description: 'Unity3D, WebGL, Game Design...'
        },
        {
          name: 'Soundtracks',
          icon: 'las la-music',
          description: 'A, A#, B, C, C#...'
        }
      ]
    };
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true }]
    };
  }
};
</script>
