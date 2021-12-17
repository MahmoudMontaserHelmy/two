<template>
  <div class="d" id="d" :style="{ '--mainColor': color }">
    <!-- <button @click="Tagoole">dd</button> -->

    <div :class="toog" class="sied-one">
      <div class="body-Sied">
        <ul class="ul" sitch-colors>
          <li class="red" data-color="red" @click="AupdaetColor"></li>
          <li class="green" data-color="green" @click="AupdaetColor"></li>
          <li
            class="yellowgreen"
            data-color="yellowgreen "
            @click="AupdaetColor"
          ></li>
          <li
            class="orangered"
            data-color="orangered"
            @click="AupdaetColor"
          ></li>
        </ul>
      </div>
      <!-- model -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Sign in or Create
      </button>
      <!-- colaaps -->
      <p>
        <br /><br />
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Send Text
        </button>
      </p>
      <div class="collapse" id="collapseExample1">
        <div class="card card-body">
          <label for="">Inter yor Name</label>
          <input class="input" type="text" /><br />
          <label for="">Inter yor password</label>
          <input class="input" type="password" />
        </div>
        <!-- No Data -->

        <p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample3"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Send
          </button>
        </p>
        <div class="collapse" id="collapseExample3">
          <div class="card card-body">
            <p>There is no database at the moment</p>
          </div>
        </div>

        <!-- No Data -->
      </div>

      <!-- colaaps -->
      <!-- model -->
      <div class="A3" @click="Tagoole">
        <div @click="Tagoole2">
          <!-- <i :class="asden" class="fas fa-chevron-right"></i> -->
          <button class="A1" @click="$event.target.classList.toggle('A2')">
            >
          </button>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label for="">Inter yor Name</label>
            <input class="input" type="text" /><br />
            <label for="">Inter yor password</label>
            <input class="input" type="password" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      asden: "add-display-bloc",
      closeSied: "display-bloc",
      toog: "sied-one",
      selected: undefined,
      color: "red",
    };
  },

  methods: {
    Tagoole() {
      this.toog = this.toog === "sied-one" ? "add" : "sied-one";
    },
    Tagoole2() {
      this.asden =
        this.asden === "add-display-bloc"
          ? "fa-rotate-180"
          : "add-display-bloc";
    },
    AupdaetColor: function (event) {
      this.color = event.target.getAttribute("data-color");
    },
  },
};
</script>

<style lang="scss">
.ul {
  // display: flex;
  display: inline-block;
}
#d {
  color: var(--mainColor);
}
.body-Sied {
  position: relative;
}
@media (max-width: 400px) {
  .add {
    width: 50%;
  }
}
.sied-one {
  position: fixed;
  left: -200px;
  top: 0;
  background-color: #fff;
  width: 200px;
  z-index: 1000;
  min-height: 100vh;
  transition: 0.3s;
}
.add {
  // width: 200px;
  left: 0;
}
.fa-chevron-right {
  position: absolute;
  right: -15px;
  top: 50%;
  /* background-color: rgb(24, 126, 185); */
  cursor: pointer;
}
.A1 {
  position: absolute;
  right: -20px;
  top: 31%;
  border: 0;
  background-color: initial;
  font-size: 33px;
  font-style: normal;
  font-weight: 700;
  color: fuchsia;
  border-radius: 50%;
  margin: -15px;
}

.A2 {
  background-color: initial;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  -moz-transform: scale(-1, -10);
  -webkit-transform: scale(-1, -10);
  -o-transform: scale(-1, -12);
  -ms-transform: scale(-1, -1);
  transform: scale(-1, -1);
}
.A1:before {
  content: "";
  /* background-color: red; */
  width: 27px;
  height: 46px;
  position: absolute;
  right: -4px;
  z-index: 11;
  border-radius: 98%;
  border-style: solid;
  border-color: black;
  top: -4px;
}
.A2:before {
  content: "";
  /* background-color: red; */
  width: 18px;
  height: 26px;
  position: absolute;
  right: -4px;
  z-index: 11;
  border-radius: 95%;
  border-style: solid;
  border-color: black;
  top: -1px;
  left: -3px;
}
.A2:hover {
  background-color: black;
}
.A1:hover {
  background-color: black;
}

// color

.red {
  cursor: pointer;
  cursor: pointer;
  border-radius: 51%;
  border-style: solid;
  border-color: black;
  background-color: red;
  height: 42px;
  width: 51px;
}
.green {
  cursor: pointer;
  cursor: pointer;
  border-radius: 51%;
  border-style: solid;
  border-color: black;
  background-color: green;
  height: 42px;
  width: 51px;
}
.yellowgreen {
  cursor: pointer;
  cursor: pointer;
  border-radius: 51%;
  border-style: solid;
  border-color: black;
  background-color: yellowgreen;
  height: 42px;
  width: 51px;
}
.orangered {
  cursor: pointer;
  cursor: pointer;
  border-radius: 51%;
  border-style: solid;
  border-color: black;
  background-color: orangered;
  height: 42px;
  width: 51px;
}
// color
.input {
  margin: 10px;
}
</style>
