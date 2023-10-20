<template>
  <div id="app">
    <Header />
    <Carousel />
    < ProductList />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import  ProductList from "@/components/ ProductList.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Carousel,
     ProductList,
    Footer,
  },
};
</script>
