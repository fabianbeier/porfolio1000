<template>
  <div v-if="show">
    <div class="p-10 flex h-screen flex-col justify-between z-10">
      <div class="top-row flex justify-between">
        <h1>Fabian Beier<br>Design & Development</h1>
      </div>
      <div class="flex gap-2 w-3/12 text-3xl leading-7">
        <nuxt-content :document="link" class="" />
      </div>
      <div class="lower-row flex justify-between">
        <div class="w-5/12 text-3xl leading-none">
         
            <transition-group
              appear
              name="list"
              tag="ul"
            >
              <li v-for="(site, index) in sites" :key="site.slug" class="group m-0 p-0" :style="{ '--i': index }">
                <a
                  :href="site.link"
                  target="blank"
                  @mouseover="updateLink(site)"
                  >{{ site.title
                  }}<span
                    class="
                      uppercase
                      tracking-widest
                      transition-all
                      w-0
                      overflow-hidden
                      opacity-0
                      inline-block
                      text-base
                      align-top
                      group-hover:w-10 group-hover:opacity-100
                      ml-2
                    "
                    >open</span
                  ><span
                    class="
                      uppercase
                      tracking-widest
                      opacity-30
                      text-base
                      align-top
                      m-2
                    "
                    >{{ site.task }}</span
                  ></a
                >
              </li>
            </transition-group>
     
        </div>
        <div class="w-5/12 flex flex-col justify-between h-100">
          <div class="flex grid-cols-2 gap-2">
            <p class="">
              Lorem ipsum dolor sweweit amet, consectfgetur adipisicing elit.
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
          <div class="opacity-30">Impressum, Datenschutz</div>
        </div>
      </div>
    </div>
    <!-- <div class="w-full fixed h-full top-0 left-0 -z-10 opacity-40">
      <div id="container">
        <canvas id="canvas3d"></canvas>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content }) {
    const sites = await $content("sites").fetch();
    return {
      sites,
    };
  },
  data() {
    return {
      link: null,
      show: false,
    };
  },
  methods: {
    updateLink(url: any) {
      this.link = url;
      
    },
  },
  transition: {
    afterEnter(el) {
      console.log("afterLeave", el);
    },
  },
  mounted() {
    this.show = true;
  },
});
</script>

<style>

h1 {
  @apply leading-none tracking-wider;
}
h2 {
  @apply text-xl;
}
body {
  @apply bg-red-800  text-red-300 font-grotesk text-base leading-none tracking-wider;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-active {
  opacity: 0;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
  transition-delay: calc( 0.05s *  var(--i));
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  
}


</style>