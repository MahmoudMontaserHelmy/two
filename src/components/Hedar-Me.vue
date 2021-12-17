<template>
  <!-- nav -->

  <div id="nav" class="container-Heder">
    <div class="Hedr">
      <div class="brand">
        <a href="/">Mahmoud</a>
      </div>
      <div class="icon-div">
        <span class="icon" @click="Tagoole">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <ul :class="toog">
        <li class="">
          <router-link to="/" exact>
            <a
              class="nav-Color"
              aria-current="page"
              href="#"
              @click="(selected = 1), upTop()"
              :class="{ highlight: selected == 1 }"
            >
              Home</a
            >
          </router-link>
        </li>
        <li class="">
          <router-link to="/about">
            <a
              class="nav-Color"
              aria-current="page"
              href="#"
              @click="(selected = 2), upTop()"
              :class="{ highlight: selected == 2 }"
              >About
            </a>
          </router-link>
        </li>

        <li class="">
          <router-link to="/shwo">
            <a
              class="nav-Color"
              aria-current="page"
              href="#"
              @click="(selected = 4), upTop()"
              :class="{ highlight: selected == 4 }"
              >shwo
            </a>
          </router-link>
        </li>
        <li class=""></li>
      </ul>
      <div :class="openSerch">
        <input class="inpou-sach" type="text" placeholder="serch" />
      </div>
      <div class="butom-al">
        <button class="b-serch" @click="TagooleSerch">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <!-- <i class="fas fa-bars fa-lg toggle-menu"></i> -->
    </div>
    <div class="asd66">
      <div class="font"></div>
    </div>
    <!-- <div class="he"></div> -->
  </div>
  <!-- nav -->
</template>

<script>
export default {
  data: function () {
    return {
      isDropped: false,
      toog: "ul-heder",
      openSerch: "sied",
      selected: undefined,
    };
  },
  methods: {
    Tagoole() {
      this.toog = this.toog === "ul-heder " ? "ToogleIcon " : "ul-heder ";
    },
    TagooleSerch() {
      // this.openSerch =
      this.openSerch =
        this.openSerch === "inpou-sach-open" ? "sied" : "inpou-sach-open";
    },
    dropIt() {
      this.isDropped = !this.isDropped;
    },
    upTop: function () {
      window.scrollTo({
        top: 770,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
#nav {
  li {
    list-style: none;
    text-decoration: none;
  }
  a {
    list-style: none;
    text-decoration: none;
  }
}
.fa-search {
  z-index: -5;
}
.he {
  height: 100vh;
}
.inpou-sach {
  text-align: center;
}
.b-serch {
  border: 0;
  margin: 4px;
}
.Hedr {
  display: flex;
  margin-top: 27px;
}
.navbar-brand {
  color: rgb(206, 41, 110);

  transition: all 2s;
}
.container-Heder {
  width: 80%;
  margin: auto;
  transition: all 2s;
}

.ul-heder {
  height: 24px;
  flex: 2;
  display: flex;
  justify-content: center;
  transition: all 1.5s;

  li {
    text-decoration: none;
    list-style: none;
    // margin-top:10px ;
    a {
      color: black;
      margin: 9px;
      list-style: none;
      text-decoration: none;
    }
  }
}
.brand {
  display: flex;
  margin-top: 9px;
  padding: 0;
  margin: 0;
  transition: all 1.5s;
}

@media (max-width: 600px) {
  .sied {
    background-color: inherit;
  }

  .inpou-sach {
    background-color: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 1s;
  }
}
@media (max-width: 242px) {
  .b-serch {
    margin-left: 19px;
  }
}

@media (max-width: 800px) {
  .butom-al {
    position: absolute;
    left: 0;
    right: 0;
    top: 53px;
  }

  .sied {
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: -25px;
    width: -webkit-fill-available;
    text-align: center;
    transition: 0.5s;
  }

  .inpou-sach-open {
    top: 0;
    margin: auto;
  }

  .font {
    width: 100%;
  }
  .asd66 {
    width: auto;
    display: block;
  }
  .Hedr {
    transition: all 1.5s;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    margin-top: 9px;

    justify-content: space-between;
  }

  .ul-heder {
    //  display: none;
    margin-top: -146px;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 100%;
    margin-left: 100%;
    // background-color: red;
    opacity: 0.5;
    transition: all 1.5s;
  }
  li {
    // display: none;
    margin: 5px;
    padding: 5px;
  }

  .icon {
    width: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}

// icon

.icon span {
  background-color: #333;
  margin-bottom: 5px;
  height: 2px;
}
.icon span:first-child {
  background-color: rgb(9, 9, 80);
  width: 100%;
}
.icon span:nth-child(2) {
  width: 60%;
  transition: 0.3s;
  background-color: rgb(7, 7, 78);
}
.icon span:last-child {
  background-color: rgb(0, 0, 87);
  width: 100%;
}
.icon:hover :nth-child(2) {
  width: 100%;
  transition: 0.3s;
  background-color: rgb(0, 0, 172);
}
.ToogleIcon {
  // transition: 0.3s;
  display: flex;

  flex-direction: column;

  margin-top: 70px;
  right: 0;
  left: 0;
  list-style: none;
  text-decoration: none;

  opacity: 1;
  transition: all 1.5s;

  margin-right: 32%;
}
.icon-div {
  position: absolute;
  width: 76%;

  display: flex;
  justify-content: end;
  margin-top: 12px;
}

// icon
.highlight {
  color: black;
  border-style: solid;
  border-width: 6px;
  border-color: black;

  transition-duration: 0.3s, 0.3s;
  height: 10px;
}
#a:hover {
  color: red;
}
// color a
.nav-Color {
  color: rgb(0, 0, 0);
}
.font {
  width: 50%;
  height: 1px;
  background-color: rebeccapurple;

  margin-top: 20px;
  transition: all 0.5s;
}
.asd66 {
  background-color: red;

  width: 100%;
}
</style>
