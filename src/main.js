import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";
import "jquery";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js';

// import Scrollanimation from './directive/scrollanimation.js';


// Vue.directive('scrollanimation', Scrollanimation);
Vue.config.productionTip = false;


// Vue.directive("bold", {
//   bind: function(el) {
//     el.style.color = "red";
//   }
// });


const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
      entries.forEach((entry) => {
          if(entry.isIntersecting) {
              entry.target.classList.add('enter');
              animatedScrollObserver.unobserve(entry.target);
          }
      });
  }
);

export default {
  bind(el) {
      el.classList.add('before-enter');
      animatedScrollObserver.observe(el);
   
  }
}

Vue.directive("bold", {
  bind: function(el) {
    el.classList.add('before-enter');
    animatedScrollObserver.observe(el);
  },

  
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

