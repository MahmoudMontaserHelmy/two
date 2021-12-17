<template>
  <div class="our-help form">
    <!-- <addProduct /> -->
    <form action="">
      <input type="text" v-model="text" />
      <button class="bnt" @click.prevent="addTaskes()">Add</button>
    </form>
    <div class="list" v-for="(skile, index) in skiles" :key="index">
      <div class="skl">{{ skile.oneText }}</div>
    </div>
    <button @click="Tagoole">stineg</button>
    <div :class="toog"></div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      pageName: "Help",
      text: "",
      skiles: [],
      toog: "unsied",
    };
  },
  methods: {
    Tagoole() {
      this.toog = this.toog === "sied" ? "unsied" : "sied";
    },
  },
};
</script>

<style lang="scss" scoped>
.highlight {
  background: yellow;
}
.sied {
  width: 200px;
  height: 500px;
  background-color: cadetblue;
}
.unsied {
  width: 0;
  opacity: 2;
}
</style>
