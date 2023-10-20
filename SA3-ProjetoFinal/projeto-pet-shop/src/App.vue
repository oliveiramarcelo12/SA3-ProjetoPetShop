<template>
<<<<<<< HEAD
  <div>
    <header>
      <!-- Componente HeaderBar.vue -->
      <HeaderBar />
    </header>

    <main>
      <!-- Componente RouterView que renderiza o conteúdo da página atual -->
      <router-view />

      <!-- Use o componente HomePage como sua página inicial -->
      <HomePage />

      <!-- Adicione os outros componentes aqui -->
      <ContactForm />
      <ProductDetail />
      <ProductList />
      <ShoppingCart />
    </main>
=======
  <div id="app">
    <router-view></router-view>
>>>>>>> dcc9e7432da33da5916d6253be41a1eabcceb70b
  </div>
</template>

<script>
<<<<<<< HEAD
import HeaderBar from './components/HeaderBar.vue';
import ContactForm from './components/ContactForm.vue';
import ProductDetail from './components/ProductDetail.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import HomePage from './components/HomePage.vue'; // Importe o componente HomePage.vue

export default {
  name: 'App',
  components: {
    HeaderBar,
    ContactForm,
    ProductDetail,
    ProductList,
    ShoppingCart,
    HomePage, // Adicione o componente HomePage ao objeto components
  },
  // Resto da definição do componente
}
</script>
=======
export default {
  name: "App",
};
</script>
// No terminal, navegue até a raiz do seu projeto Vue.js execute o seguinte comando: vue serve
>>>>>>> dcc9e7432da33da5916d6253be41a1eabcceb70b
