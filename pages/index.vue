<template>
  <div>
    <div class="p-10 flex h-screen flex-col justify-between z-10">
      <div class="top-row flex justify-between">
        <h1>Fabian Beier<br />Design & Development</h1>
        <div
          class="
            circle
            w-24
            h-24
            border-2 border-indigo-200
            rounded-full
            flex
            justify-center
            items-center
          "
        >
          <p class="mb-1">Contact</p>
        </div>
      </div>
      <div class="flex gap-2 w-3/12">
        <nuxt-content :document="link" class=""/>
      </div>
      <div class="lower-row flex justify-between">
        <div class="w-5/12 text-3xl leading-none">
          <ul>
            <li v-for="site in sites" :key="site.slug" class="group m-0 p-0 ">
              <a :href="site.link" target="blank" @mouseover="updateLink(site)">{{ site.title }}<span class=" uppercase tracking-widest transition-all w-0 overflow-hidden opacity-0 inline-block text-base align-top group-hover:w-10  group-hover:opacity-100 ml-2">open</span><span class=" uppercase tracking-widest opacity-30 text-base align-top m-2">{{site.task}}</span></a>
            </li>
          </ul>
        </div>
        <div class="w-5/12 flex flex-col justify-between h-100">
          <div class="flex grid-cols-2 gap-2">
            <p class="">
              Lorem ipsum dolor sit amet, consectfgetur adipisicing elit.
              Recusandae fugiat facere, sint aut officia accusantium, voluptatum
              magnam mollitia perferendis consequatur dolore nam distinctio ea
              ab voluptas? Voluptate natus adipisci eveniet.
            </p>
            <p class="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae fugiat facere, sint aut officia accusantium, voluptatum
              magnam mollitia perferendis consequatur dolore nam distinctio ea
              ab voluptas? Voluptate natus adipisci eveniet.
            </p>
          </div>
          <div class=" opacity-30">Impressum, Datenschutz</div>
        </div>
      </div>
    </div>
    <div class="w-full fixed h-full top-0 left-0 -z-10 opacity-80">
      <div id="container">
        <canvas id="canvas3d"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const sites = await $content('sites').fetch()
    return {
      sites,
    }
  },
  data() {
    return {
      link: null
    }
  },
  methods: {
    updateLink(url: any) {
      this.link = url;
      console.log(url)
    }
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@500&display=swap');

h1 {
  @apply text-lg leading-none tracking-wider;
}
h2 {
  @apply text-xl;
}
body {
  @apply bg-black  text-indigo-200 font-grotesk text-base leading-none tracking-wider;
}
</style>