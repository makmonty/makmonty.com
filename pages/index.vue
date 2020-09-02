<template>
  <article class="flex flex-col space-y-12 py-12">
    <section class="container mx-auto px-8 flex">
      <img src="../assets/images/yo-24x24.png" class="w-24 h-24 object-contain rendering-crisp-edges">
      <div class="ml-6">
        <h1 class="text-4xl font-bold">
          I'm Ángel Brasero
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
    </section>
    <section class="container mx-auto px-6">
      <h2 class="text-2xl">
        In summary, I do...
      </h2>
      <div class="flex text-center justify-around mt-12">
        <div v-for="discipline in disciplines" :key="discipline.name">
          <i :class="discipline.icon" class="text-2xl text-primary" />
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
  data () {
    return {
      disciplines: [
        {
          name: 'Frontend',
          icon: 'fas fa-window-restore',
          description: 'Angular, AngularJS, VueJS...'
        },
        {
          name: 'Backend',
          icon: 'fas fa-server',
          description: 'NodeJS, PHP, MySQL, MongoDB...'
        },
        {
          name: 'Games',
          icon: 'fas fa-gamepad',
          description: 'Unity3D, WebGL, Game Design...'
        },
        {
          name: 'Soundtracks',
          icon: 'fas fa-compact-disc',
          description: 'A, A#, B, C, C#...'
        }
      ]
    }
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
