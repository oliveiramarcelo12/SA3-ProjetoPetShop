import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css"; // Importe o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.js"; // Importe o JavaScript do Bootstrap

import Home from "@/components/Home.vue";
import Racao from "@/components/Racao.vue";
import Acessorios from "@/components/Acessorios.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home }, // Rota para a página inicial
      { path: "/racao", component: Racao }, // Adicione a rota para a página "racao"
     { path: "/acessorios", component: Acessorios }, // Adicione a rota para a página "acessorios"
  ],
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
