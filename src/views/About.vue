<template>
  <div class="about">
    <div class="container">
      <h3>Enter yor task</h3>
      <form action="" class="">
        <input
          class="data-v-d69d26f2"
          type="text"
          placeholder="Enter Your Text"
          v-model="name"
        /><br />
        <input
          type="passwored"
          placeholder="Enter your Text"
          v-model="passwored"
        /><br />
        <button class="btn btn-primary" @click.prevent="ADDTaseks()">
          Add
        </button>
        <button class="btn btn-primary" @click.prevent="Re()">ReData</button>
      </form>
      <div class="list">
        <div class="item-list" v-for="(skele, index) in skeles" :key="index">
          <div>{{ skele.oneName }}</div>
          <div>{{ skele.TwoPass }}</div>
        </div>
      </div>
    </div>
    <div class="movie__actions-text">TisTing</div>

    <div class="sied1">
      <div class="sied">
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="sied45 col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div
                class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
              >
                <a
                  href="/"
                  class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul
                  class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li class="nav-item">
                    <a href="#" class="nav-link align-middle px-0">
                      <i class="fs-4 bi-house"></i>
                      <span class="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submenu1"
                      data-bs-toggle="collapse"
                      class="nav-link px-0 align-middle"
                    >
                      <i class="fs-4 bi-speedometer2"></i>
                      <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                    </a>
                    <ul
                      class="collapse show nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li class="w-100">
                        <a href="#" class="nav-link px-0">
                          <span class="d-none d-sm-inline">Item</span> 1
                        </a>
                      </li>
                      <li>
                        <a href="#" class="nav-link px-0">
                          <span class="d-none d-sm-inline">Item</span> 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0 align-middle">
                      <i class="fs-4 bi-table"></i>
                      <span class="ms-1 d-none d-sm-inline">Orders</span></a
                    >
                  </li>
                  <li>
                    <a
                      href="#submenu2"
                      data-bs-toggle="collapse"
                      class="nav-link px-0 align-middle"
                    >
                      <i class="fs-4 bi-bootstrap"></i>
                      <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a
                    >
                    <ul
                      class="collapse nav flex-column ms-1"
                      id="submenu2"
                      data-bs-parent="#menu"
                    >
                      <li class="w-100">
                        <a href="#" class="nav-link px-0">
                          <span class="d-none d-sm-inline">Item</span> 1</a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link px-0">
                          <span class="d-none d-sm-inline">Item</span> 2</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      class="nav-link px-0 align-middle"
                    >
                      <i class="fs-4 bi-grid"></i>
                      <span class="ms-1 d-none d-sm-inline">Products</span>
                    </a>
                    <ul
                      class="collapse nav flex-column ms-1"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li class="w-100">
                        <a href="#" class="nav-link px-0">
                          <span class="d-none d-sm-inline">Product</span> 1</a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link px-0">
                          <span class="d-none d-sm-inline">Product</span> 2</a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link px-0">
                          <span class="d-none d-sm-inline">Product</span> 3</a
                        >
                      </li>
                      <li>
                        <a href="#" class="nav-link px-0">
                          <span class="d-none d-sm-inline">Product</span> 4</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0 align-middle">
                      <i class="fs-4 bi-people"></i>
                      <span class="ms-1 d-none d-sm-inline">Customers</span>
                    </a>
                  </li>
                </ul>
                <hr />
                <div v-bold class="dropdown pb-4">
                  <a
                    href="#"
                    class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/imags/mahmoud3.jpg"
                      alt="hugenerd"
                      width="30"
                      height="30"
                      class="rounded-circle"
                    />
                    <span class="d-none d-sm-inline mx-1">loser</span>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-dark text-small shadow"
                  >
                    <li>
                      <a class="dropdown-item" href="#">New project...</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col py-3">
              <div class="row">
                <div class="container">
                  <div class="home-hiding">
                    <div class="debart2">
                      <div v-bold class="cared1">
                        <img src="../assets/imags/home607.jpg" alt="" />
                        <h3>chekin</h3>
                        <p>
                          Lorem ipsum dolor, ratione. Lorem ipsum dolor,
                          ratione. Lorem ipsum dolor, ratione.
                        </p>
                        <button class="sd">Done</button>
                      </div>
                      <div v-bold class="cared1">
                        <img v-bold src="../assets/imags/home704.jpg" alt="" />
                        <h3>chekin</h3>
                        <p>
                          Lorem ipsum dolor, ratione. Lorem ipsum dolor,
                          ratione. Lorem ipsum dolor, ratione.
                        </p>
                        <button class="sd">Done</button>
                      </div>
                      <div v-bold class="cared1">
                        <img src="../assets/imags/home704.jpg" alt="" />
                        <h3>chekin</h3>
                        <p>
                          Lorem ipsum dolor, ratione. Lorem ipsum dolor,
                          ratione. Lorem ipsum dolor, ratione.
                        </p>
                        <button class="sd">Done</button>
                      </div>
                      <div v-bold class="cared1">
                        <img src="../assets/imags/home704.jpg" alt="" />
                        <h3>chekin</h3>
                        <p>
                          Lorem ipsum dolor, ratione. Lorem ipsum dolor,
                          ratione. Lorem ipsum dolor, ratione.
                        </p>
                        <button class="sd">Done</button>
                      </div>
                      <div v-bold2 class="cared1">
                        <img src="../assets/imags/home705.jpg" alt="" />
                        <h3>chekin</h3>
                        <p>
                          Lorem ipsum dolor, ratione. Lorem ipsum dolor,
                          ratione. Lorem ipsum dolor, ratione.
                        </p>
                        <button>Done</button>
                      </div>
                      <div v-bold class="cared1">
                        <img src="../assets/imags/mahmoud1.jpg" alt="" />
                        <h3>chekin</h3>
                        <p>
                          Lorem ipsum dolor, ratione. Lorem ipsum dolor,
                          ratione. Lorem ipsum dolor, ratione.
                        </p>
                        <button>Done</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      name: "",
      passwored: "",
      skeles: [],
      toog: "sied",
    };
  },
  methods: {
    ADDTaseks: function () {
      this.skeles.push({
        oneName: this.name,
        TwoPass: this.passwored,
        done: false,
      });

      localStorage.setItem("asd", JSON.stringify(this.skeles));
      this.name = "";
      this.passwored = "";
      console.log(this.skeles);
    },
    Re: function () {
      let data = window.localStorage.getItem("asd");
      if (data) {
        this.skeles = JSON.parse(data);
      }
    },
  },

  name: "about",
};
</script>
<style lang="scss" scoped>
.about {
  height: 100vh;
}
.sied1 {
  width: 100%;
  background-color: white;
}
.sied {
  //  left: 0;
  position: relative;
  top: 0;
}
.asd {
  // background-color: aqua;
  // color: red;
  font-size: 20px;
  display: block;
}
form {
  background-color: #899fe1;

  .sied {
    width: 200px;
    height: 500px;
    background-color: cadetblue;
  }
  .unsied {
    width: 0;
    opacity: 2;
  }

  input {
    transform-origin: 0 0;
    transform: translateX(0%);
    opacity: 1;
    width: 90%;
    margin: 10px;
  }

  button {
    margin: 10px;
  }
}

// <home8

.container {
  position: relative;
  padding-top: 50px;
}

.container .home-hiding .debart2 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(141px, 1fr));
  gap: 105px;
  text-align: center;
  position: relative;
}

.tietil {
  padding: 10px;
  text-align: center;
}
.container .home-hiding .debart2 .cared1 {
  padding-bottom: 10px;
  align-items: center;
  border-style: solid;
  border-width: 1px;
}
.container .home-hiding .debart2 .cared1 img {
  width: 100%;
}
.container .home-hiding .debart2 .cared1 button {
  width: 111px;
  height: 27px;
}
.container .home-hiding .debart2 .cared1 .sd {
  background-color: orange;
}
@media (max-width: 610px) {
  .home8 .container .home-hiding .debart2 {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
    gap: 21px;
  }
}
/* home8 */
@media (max-width: 577px) {
  .sied45 {
    display: none;
  }
}
</style>
