<template>
  <article class="flex flex-col space-y-24 pb-24">
    <section class="container mx-auto px-8 h-screen flex justify-center items-center">
      <div class="flex text-xl">
        <img src="../assets/images/yo-24x24.png" class="w-64 h-64 p-4 object-contain rendering-crisp-edges border rounded-full border-primary">
        <div class="ml-6 flex flex-col justify-center">
          <h1 class="text-4xl">
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
