<template>
  <div class="space-y-20">
    <section>
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill.name">
          <strong>{{ skill.name }}</strong>: {{ skill.description }}
        </li>
      </ul>
    </section>

    <section>
      <h2>Work Experience</h2>

      <div>
        <ul class="space-y-8">
          <li v-for="job in jobs" :key="job.company">
            <h4>
              <strong>{{ job.title }}</strong> at <a :href="job.url">{{ job.company }}</a>
              <br>{{ job.from }} - {{ job.to ? job.to : 'Current job' }}
            </h4>
            <p v-for="(paragraph, index) in job.description" :key="index" v-html="paragraph" />
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Education</h2>

      <div>
        <ul>
          <li v-for="study in studies" :key="study.title">
            <h4><strong>{{ study.title }}</strong> at <a :href="study.url">{{ study.institute }}</a></h4>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'Frontend',
          description: 'AngularJS, Angular 2+, VueJS, NuxtJS, TailwindCSS, SASS, Bootstrap, Backbone'
        },
        {
          name: 'Backend',
          description: 'NestJS, ExpressJS, NodeJS, PHP, MongoDB, MySQL'
        },
        {
          name: 'Video games',
          description: 'Unity3D, WebGL, ThreeJS'
        }
      ],
      jobs: [
        {
          title: 'Software Engineer',
          company: 'Pod Group',
          url: 'https://www.podgroup.com/',
          from: '2019 September',
          to: 'Current job',
          description: [
            'Full stack design and implementation of new features in several projects.<br/>Involved in the implementation of agile methodologies to improve the quality and efficiency of the development.',
            'Core technologies: Angular 2+, Typescript, NodeJS, ExpressJS, Restify.'
          ]
        },
        {
          title: 'Frontend Lead',
          company: 'Easy Payment Gateway',
          url: 'https://www.easypaymentgateway.com',
          from: '2018 July',
          to: '2019 July',
          description: [
            'Lead a back office app development in an agile team.',
            'Core technologies: Angular 2+, Typescript, Material Design.'
          ]
        },
        {
          title: 'Frontend Developer',
          company: 'Realcom Code',
          url: 'https://www.realcomcode.com/',
          from: '2015 January',
          to: '2018 July',
          description: [
            'Development of a few frontend applications, all related to home and car insurance in Canada.',
            'Core technologies: AngularJS, Angular 2+, Webpack, ES6, Backbone, Coffeescript, Bootstrap, LESS, SASS.'
          ]
        },
        {
          title: 'Game Designer and Developer',
          company: 'Corta Studios and Arcadict',
          url: 'http://cortastudios.com/',
          from: '2013 August',
          to: '2015 January',
          description: [
            'Design and development of video games with Unity3D, and soundtrack composition and arrangement.',
            'Core technologies: Unity3D.'
          ]
        },
        {
          title: 'Cofounder and Software Engineer',
          company: 'Kometasoft',
          url: 'https://kometasoft.com/',
          from: '2012 September',
          to: '2013 August',
          description: [
            'Software consulting, engineering and development. Mainly web sites, mobile apps and e-commerce shops.',
            'Core technologies: PHP, MySQL, Android SDK, Javascript, jQuery, Magento.'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'Football Radar',
          url: 'https://www.footballradar.com/',
          from: '2010 September',
          to: '2012 September',
          description: [
            'Full stack development in an agile, dynamic team. Web applications and services oriented to develop football statistics and models.',
            'Core technologies: PHP, Ruby, HTML, CSS, Javascript.'
          ]
        }
      ],
      studies: [
        {
          title: 'Computer and Software Engineering',
          institute: 'Universidad de Sevilla',
          url: 'http://www.us.es/'
        }
      ]
    };
  }
};
</script>
