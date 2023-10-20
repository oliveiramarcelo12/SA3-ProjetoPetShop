<template>
  <div id="app">
    <Home />
     <Racao />
     <Acessorios />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import Racao from "@/components/Racao.vue";
import Acessorios from "@/components/Acessorios.vue";
export default {
  components: {
    Home,
     Racao,
    Acessorios,
   
  },
};
</script>
