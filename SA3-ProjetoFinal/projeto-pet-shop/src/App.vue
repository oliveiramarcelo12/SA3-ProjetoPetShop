<template>
  <div id="app">
    <Header />
    <Carousel />
    <ProductContent />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import ProductContent from "@/components/ProductContent.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Carousel,
    ProductContent,
    Footer,
  },
};
</script>
