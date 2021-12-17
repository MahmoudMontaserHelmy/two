<template>
  <div class="hed">
    <div class="sticy1">
      <div class="stict2">
        <div class="containerr-Heder">
          <ul v-bold2 class="as">
            <li @click="scroll4">features</li>
            <li @click="scrlopart2">Gallery</li>
            <li @click="scrlopart3">Skiles</li>
            <li @click="scrlopart4">Cade</li>
            <li @click="scrlopart5">End</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- part1 -->
    <!-- <a href="#"  class="more"> <button @click="upTop" class="s1 s3">V</button></a> -->
    <div id="depa" class="deparet4">
      <div class="container">
        <div class="titel">
          <p>creative amazing features</p>
        </div>
        <div id="home" class="home">
          <div v-bold class="box">
            <i class="fas fa-palette fa-4x"> </i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
          <div v-bold class="box">
            <i class="fab fa-android fa-4x"> </i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
          <div v-bold class="box">
            <i class="fas fa-cog fa-4x"> </i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
          <div v-bold class="box">
            <i class="fas fa-pencil-ruler fa-4x"> </i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
          <div v-bold class="box">
            <i class="fas fa-mug-hot fa-4x"> </i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
          <div v-bold class="box">
            <i class="fas fa-trophy fa-4x"></i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
          <div v-bold class="box">
            <i class="far fa-envelope fa-4x"></i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
          <div v-bold class="box">
            <i class="far fa-folder fa-4x"></i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
          <div v-bold class="box">
            <i class="fas fa-search fa-4x"></i>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              quis et similique quasi, tempora?
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- part1 -->

    <!-- part2 -->
    <div id="part2" class="part2">
      <div class="container">
        <div v-bold class="selse">
          <h1>Gallery</h1>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/imags/mahmoud3.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/imags/temblet2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/imags/home103.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <!-- tusting -->

        <!-- tusting -->
      </div>
    </div>
    <!-- part2 -->

    <!-- part3 -->
    <div id="part3" class="part3">
      <div class="container">
        <h1>Skiles</h1>
        <div class="B1">
          <div class="Titel">
            <h3>Html</h3>
            <p>80%</p>
          </div>
          <div class="W1">
            <div v-bold3 class="w2"></div>
          </div>
        </div>
        <div class="B1">
          <div class="Titel">
            <h3>Css</h3>
            <p>85%</p>
          </div>
          <div class="W1">
            <div v-bold6 class="w2"></div>
          </div>
        </div>
        <div class="B1">
          <div class="Titel">
            <h3>js</h3>
            <p>75%</p>
          </div>
          <div class="W1">
            <div v-bold7 class="w2"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- part3 -->

    <!-- part4 -->
    <div id="part4" class="containerss container row">
      <div class="titel">Card</div>
      <div v-bold class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="../assets/imags/803.jpeg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div v-bold class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="../assets/imags/802.jpeg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div v-bold class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="../assets/imags/802.jpeg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div v-bold class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="../assets/imags/803.jpeg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <!-- part4 -->

    <!-- part5 -->
    <div id="part5" class="home12">
      <div class="container">
        <div class="titel">
          <h3>latest news</h3>
          <div class="lant"></div>
        </div>

        <div class="home-heding">
          <div class="dokan">
            <h2 class="titelss">do<span>k</span>an</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur Porro, atque saepe. Fuga
              mollitia ut illo fugit repellat eveniet? Ut, maxime.
            </p>

            <p class="asd5"><span>email@</span> :mahmoud.com</p>
            <p><span>phone</span>:01064280870</p>
            <p><span>address</span> :egypt</p>
            <div class="icons">
              <i class="fab fa-youtube"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>

          <div class="inputs">
            <div class="bakt">
              <input type="text" required="" placeholder="yuor name" />
              <input type="text" required="" placeholder="yuor email" />
            </div>
            <div class="bakt">
              <input type="text" required="" placeholder="subject" />
              <input type="text" required="" placeholder="url" />
            </div>
            <div class="bakt">
              <input
                class="end"
                type="text"
                required=""
                placeholder="your mess"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- part5 -->

    <!-- part6 -->
    <div class="end-under">
      <div class="eng">
        <h2>Designed by</h2>
        <p>p/mahmoud montaser helmy</p>
      </div>
    </div>
    <!-- part6 -->
  </div>
</template>

<script>
import Vue from "vue";
export default {
  methods: {
    scroll4() {
      const asd = document.getElementById("depa");
      asd.scrollIntoView({ behavior: "smooth" });
    },
    scrlopart2() {
      const asd = document.getElementById("part2");
      asd.scrollIntoView({ behavior: "smooth" });
    },
    scrlopart3() {
      const asd = document.getElementById("part3");
      asd.scrollIntoView({ behavior: "smooth" });
    },
    scrlopart4() {
      const asd = document.getElementById("part4");
      asd.scrollIntoView({ behavior: "smooth" });
    },
    scrlopart5() {
      const asd = document.getElementById("part5");
      asd.scrollIntoView({ behavior: "smooth" });
    },
  },
};
// tisting

const animatedScrollObserver22 = new IntersectionObserver(
  (entries, animatedScrollObserver22) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("Heder-Un1");
        animatedScrollObserver22.unobserve(entry.target);
      }
    });
  }
);
Vue.directive("bold2", {
  bind: function (el) {
    el.classList.add("Heder-Un2");
    animatedScrollObserver22.observe(el);
  },
});
// tisting

// part3

const animatedScrollObserver2 = new IntersectionObserver(
  (entries, animatedScrollObserver2) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("Heder-Un1");
        animatedScrollObserver2.unobserve(entry.target);
      }
    });
  }
);
Vue.directive("bold3", {
  bind: function (el) {
    el.classList.add("Heder-Un2");
    animatedScrollObserver2.observe(el);
  },
});
const animatedScrollObserver5 = new IntersectionObserver(
  (entries, animatedScrollObserver5) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("add1");
        animatedScrollObserver5.unobserve(entry.target);
      }
    });
  }
);
Vue.directive("bold6", {
  bind: function (el) {
    el.classList.add("add2");
    animatedScrollObserver5.observe(el);
  },
});
const animatedScrollObserver6 = new IntersectionObserver(
  (entries, animatedScrollObserver6) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("add3");
        animatedScrollObserver6.unobserve(entry.target);
      }
    });
  }
);
Vue.directive("bold7", {
  bind: function (el) {
    el.classList.add("add4");
    animatedScrollObserver6.observe(el);
  },
});
// part3
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
}
.containerr-Heder {
  background-color: black;
  position: relative;
}
ul {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 90%;
  margin: auto;
  li {
    margin: 5px;
    cursor: pointer;
    a {
      color: white;
    }
  }
}

@media (min-height: 640px) {
}
.sticy1 {
  z-index: 10;
  position: sticky;
  top: 0;
}
// par1

/* deparet4 */

.deparet4 .container .titel {
  padding-bottom: 20px;
  font-size: 25px;
  justify-content: center;
  display: grid;
}
.deparet4 .container .under {
  width: 122px;
  height: -6px;
  /* block-size: 35px; */
  border-color: black;
  border-style: solid;
  font-size: 16px;
  border-width: 1px;
  text-align: center;
}
.deparet4 .container {
  position: relative;
}
.deparet4 .container .home {
  padding-top: 40px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-row-gap: 15px;
}
.deparet4 .container .home .box {
  width: 250px;
  height: 140px;
  text-align: inherit;
  margin: auto;
}
.deparet4 .container .home .box p {
  padding-top: 10px;
  line-height: 1.8;
}
@media (max-width: 506px) {
  .deparet4 .container .home {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .deparet4 .container .home .box {
    width: auto;
    display: contents;
  }
}
@media (max-width: 260px) {

  .deparet4 .container .home .box {
    font-size: 10px;
  }
}

/* deparet4 */
// par1

// par2

.Titel {
  display: flex;
  justify-content: space-between;
}
.W1 {
  width: auto;
  height: 20px;
  background-color: #c1c1c1;
}
.w2 {
  height: 100%;
  width: 20%;
  background-color: #03a9f4;
}
.selse {
  padding-bottom: 100px;
  padding-top: 100px;
}
.carousel-item {
  width: 100%;
  height: 400px;
}
img {
  width: 100%;
  height: 100%;
}
.visually-hidden {
  color: red;
}
button {
  background-color: #2c262691;
  color: black;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}

// par2

// par3

.Titel {
  display: flex;
  justify-content: space-between;
}
.W1 {
  width: auto;
  height: 20px;
  background-color: #c1c1c1;
}
.w2 {
  height: 100%;
  width: 0;
  background-color: #03a9f4;
}
.selse {
  padding-bottom: 100px;
  padding-top: 100px;
}
.carousel-item {
  width: 100%;
  height: 400px;
}
img {
  width: 100%;
  height: 100%;
}
.visually-hidden {
  color: red;
}
button {
  background-color: #2c262691;
  color: black;
}

.Heder-Un1 {
  width: 80%;
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}
.Heder-Un2 {
  opacity: 1;
  transform: translateY(0px);
}
.addition {
  width: 70%;
  width: 50%;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.2s ease-out;
}
.add3 {
  width: 75%;
}

.add1 {
  width: 85%;
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}
.add2 {
  opacity: 1;
  transform: translateY(0px);
}

.add3 {
  width: 75%;
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}
.add4 {
  opacity: 1;
  transform: translateY(0px);
}

// par3

// par4
.containerss {
  padding-bottom: 100px;
  padding-top: 100px;
}
.titel {
  padding: 13px;

  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding-top: 8px;
}
.card {
  margin: auto;
}
// par4

// par5

/* home12-end */
.home12 {
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url(../assets/imags/1202.jpg);
  background-size: cover;
}
.home12 .container {
  position: relative;
  text-align: center;
}
.home12 .container .titel h3 {
  font-style: italic;
  font-size: xx-large;
  color: white;
}
.home12 .container .titel .lant {
  width: 132px;
  height: 8px;
  background-color: rgb(7 248 175);
  margin-top: 20px;
  display: inline-block;
}
.home12 .container .home-heding {
  position: relative;
  display: flex;
}
.home12 .container .home-heding .dokan {
  width: 50%;
  height: 400px;
  text-align: start;
  line-height: 1.9;
  padding-top: 124px;
  display: inline-table;
  color: white;
}
.home12 .container .home-heding .dokan .titelss {
  font-size: 40px;
}
.home12 .container .home-heding .dokan .asd5 {
  padding-top: 28px;
}
.home12 .container .home-heding .dokan .icons {
  padding-top: 28px;
}
.home12 .container .home-heding .dokan span {
  color: rgb(7 248 175);
}
.home12 .container .home-heding .inputs {
  padding-top: 99px;
}
.home12 .container .home-heding .inputs .bakt {
  padding-top: 45px;
}
.home12 .container .home-heding .inputs .bakt input {
  margin: 5px;
  height: 36px;
  border-width: 2px;
  background-color: inherit;
  border-style: solid;
  border-color: white;
}
.home12 .container .home-heding .inputs .bakt .end {
  width: 96%;
  height: 80px;
}

@media (max-width: 1066px) {
  .home12 .container .home-heding .inputs .bakt input {
    margin-top: 20px;
  }
}
@media (max-width: 577px) {
  .home12 .container .home-heding {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}

/* home12-end */
// par5

// par6

/* home13 */
.end-under {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: rgb(7 248 175);
  text-align: center;
  font-size: 25px;
}
.end-under .eng {
  font-weight: bold;
}
/* home13 */

// par6
</style>
