<template>
  <div class="asd">
    <titssrr />
    <div></div>

    <div class="container">
      <!-- collapse -->
      <p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Create New Card
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <form action="">
            <input
              type="text "
              class="m-1"
              placeholder="inpot yor link imag"
              v-model="tasktext"
            />
            <input
              type="text"
              class="m-1"
              placeholder="inpot yor pargrahp"
              v-model="two"
            />
            <input
              type="text"
              class="m-1"
              placeholder="inpot yor button Name"
              v-model="tree"
            /><br />
            <div class="bout">
              <button
                class="btn btn-dark asden"
                @click.prevent="addTask"
                :disabled="!tasktext"
              >
                add task
              </button>
              <button
                class="btn btn-outline-danger text-right asden"
                @click.prevent="deletall"
                v-if="tasks.length > 1"
              >
                delete all
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- collapse -->
      <div class="row">
        <div
          class="card"
          style="width: 18rem"
          v-for="(task, index) in tasks"
          :key="index"
        >
          <img :src="task.words" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ task.two }}</h5>
            <p class="card-text">{{ tasks.titel_text }}</p>
            <a href="#" class="btn btn-primary">{{ task.tree }}</a>
            <button class="btn btn-danger m-1 p-1" @click="deleteTask(index)">
              delete
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- cardeBisec -->
        <div v-bold class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="../assets/imags/mahmoud1.jpg"
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
            src="../assets/imags/mahmoud2.jpg"
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
            src="../assets/imags/mahmoud3.jpg"
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
            src="../assets/imags/mahmoud4.jpg"
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
        <!-- cardeBisec -->
      </div>
    </div>
  </div>
</template>
<script>
// import { component } from 'vue/types/umd';
import titssrr from "@/components/tistingFortaskes.vue";
export default {
  name: "shwo-asd",
  components: {
    titssrr,
  },
  data() {
    return {
      tasks: [],
      tasktext: "",
      two: "",
      tree: "",
    };
  },
  methods: {
    addTask: function () {
      this.tasks.push({
        words: this.tasktext,
        two: this.two,
        tree: this.tree,
        done: false,
      });
      this.tasktext = "";
      this.two = "";
      this.tree = "";
      localStorage.setItem("asd", JSON.stringify(this.tasks));
      console.log(this.tasks);
      console.log(this.tasks.length);
    },
    reddata: function () {
      //  this.tasks = JSON.parse(localStorage.getItem("asd"));
      let data = window.localStorage.getItem("asd");
      if (data) {
        this.tasks = JSON.parse(data);
      }
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
    deletall: function () {
      this.tasks = [];
      this.tasktext = "";
    },
  },
  mounted() {
    this.reddata();
  },
};
</script>
<style lang="scss" scoped>
.asd {
  width: 100%;

  color: black;
}
input {
  margin: 13px;
  height: 38px;
}
@media (max-width: 1062px) {
  form {
    display: contents;
    text-align: center;
    align-items: center;
    .asden {
      width: 146px;
    }
  }
}
.asden {
  margin: 5px;
}
.bout {
  justify-content: space-between;
  display: flex;
}
</style>
