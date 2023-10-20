import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css"; // Importe o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.js"; // Importe o JavaScript do Bootstrap

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home }, // Rota para a página inicial
    { path: "/pagina1", component: Pagina1 }, // Rota para a primeira página
    { path: "/pagina2", component: Pagina2 }, // Rota para a segunda página
  ],
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
