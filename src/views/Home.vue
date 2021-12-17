<template>
  <div class="home">
    <a href="#" class="more"> </a>
    <button @click="upTop" class="s1 s3">V</button>
    <div class="sticy1">
      <div class="stict2">
        <HederUnder />
      </div>
    </div>
  </div>
</template>
<script>
import HederUnder from "@/components/HederUnder.vue";
// import Vue from "vue";
export default {
  name: "Home",
  components: {
    HederUnder,
  },
  data: function () {
    return {
      soly: "s1",
    };
  },

  methods: {
    upTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.Up {
  display: block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: aquamarine;
}
.s1 {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  display: none;
  z-index: 55;
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
  z-index: 55;
}
.s2::after {
  content: "";
  /* background-color: red; */
  width: 27px;
  height: 37px;
  position: absolute;
  right: -1px;
  z-index: 11;
  border-radius: 56%;
  border-style: solid;
  /* border-color: black; */
  top: -4px;
  color: fuchsia;
  z-index: 55;
}
.before-enter {
  opacity: 0;
  transform: translateY(1000px);
  transition: all 2s ease-out;
  background-color: aqua;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}

.Heder-Un1 {
  position: fixed;
  top: 0;
}
.Heder-Un2 {
  position: fixed;
  top: 0;
}

.sticy1 {
  z-index: 10;
  position: sticky;
  top: 0;
}
.more {
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
  left: 0;
}
</style>
