<template lang="pug">

article
  section.intro-personal.inverted
    .main-block
      .avatar
        img(src="../assets/images/yo-24x24.png")
      .me
        h1.intro I'm Ángel Brasero
        p.summary I'm a software engineer. Passionate about technology and software development.
          | <br />I spend most of my time coding.
        .call-to-action
          nuxt-link.button(to="/cv") Check my CV
  section.i-do.main-block
    h2 In summary, I do...
    .disciplines
      .frontend-development.discipline
        i.fas.fa-window-restore
        h3 Frontend
        p Angular, AngularJS, VueJS...
      .backend-development.discipline
        i.fas.fa-server
        h3 Backend
        p NodeJS, PHP, MySQL, MongoDB...
      .game-design.discipline
        i.fas.fa-gamepad
        h3 Games
        p Unity3D, WebGL,<br/>Game Design...
      .soundtrack-composition.discipline
        i.fas.fa-compact-disc
        h3 Soundtracks
        p A, A#, B, C, C#...

</template>
