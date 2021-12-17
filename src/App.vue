<template>
  <div id="app" :style="{ '--mainColor': color }">
    <a href="#" class="more">
      <button @click="upTop" class="s1 s3">V</button></a
    >
    <!-- <my-component v-on:scroll="scrollFunction">
    ...

</my-component> -->
    <div class="nav"></div>
    <!-- <a href="#" class="more">More</a> -->
    <HederMe />
    <backgroundss />

    <router-view />

    <Sied />
  </div>
</template>

<script>
// import AppHeader from "@/components/global/AppHeader.vue";
import HederMe from "@/components/Hedar-Me.vue";
import Sied from "@/components/sied.vue";
import backgroundss from "@/components/background.vue";
import Vue from "vue";
Vue.directive(
  (window.onscroll = function () {
    if (window.scrollY >= 500) {
      document.querySelector(".s3").classList.add("s2");
    } else {
      document.querySelector(".s3").classList.remove("s2");
    }
  })
);
export default {
  data: function () {
    return {
      color: "#b71540",
      visible: false,
      //  scroalll:'S1',
    };
  },
  name: "App",
  components: {
    // AppHeader,
    HederMe,
    backgroundss,
    Sied,
    // ScrollTopComponent
  },
  methods: {
    upTop: function () {
      window.scrollTo({
        top: 670,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.s1 {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  display: none;
}
.s2 {
  display: block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  // background-color: red;
  // border-width: 2px;
  // border-style: solid;
  width: 25px;
  height: 34px;
  background-color: initial;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  transform: scale(-1, -1);
  z-index: 1000;
}
.s2::after {
  content: "";
  /* background-color: red; */
  width: 27px;
  height: 37px;
  position: absolute;
  right: -1px;
  z-index: 101;
  border-radius: 56%;
  border-style: solid;
  /* border-color: black; */
  top: -4px;
  color: fuchsia;
}
.s3 {
}
#app {
  color: var(--mainColor);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.1s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}
.more {
  background-color: var(--main-color);
  /* color: white; */
  padding: 15px 20px;
  display: block;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 30px auto;
  text-decoration: none;
  text-transform: uppercase;
  position: fixed;
  bottom: 0;
  z-index: 500;
}
.btn {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.55);
  padding-top: 27px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
}
</style>
