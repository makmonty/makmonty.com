<template>
  <article>
    <section class="container mx-auto p-6">
      <div class="avatar">
        <img src="../assets/images/yo-24x24.png">
      </div>
      <div class="me">
        <h1 class="intro">
          I'm Ángel Brasero
        </h1>
        <p class="summary">
          I'm a software engineer. Passionate about technology and software development.<br>
          I spend most of my time coding.
        </p>
        <div class="call-to-action">
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
    <section class="container mx-auto p-6">
      <h2>In summary, I do...</h2>
      <div class="disciplines">
        <div class="frontend-development discipline">
          <i class="fas fa-window-restore" />
          <h3>Frontend</h3>
          <p>Angular, AngularJS, VueJS...</p>
        </div>
        <div class="backend-development discipline">
          <i class="fas fa-server" />
          <h3>Backend</h3>
          <p>NodeJS, PHP, MySQL, MongoDB...</p>
        </div>
        <div class="game-design discipline">
          <i class="fas fa-gamepad" />
          <h3>Games</h3>
          <p>Unity3D, WebGL,<br>Game Design...</p>
        </div>
        <div class="soundtrack-composition discipline">
          <i class="fas fa-compact-disc" />
          <h3>Soundtracks</h3>
          <p>A, A#, B, C, C#...</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
