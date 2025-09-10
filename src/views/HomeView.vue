<template>
  <main>
    <Carousel />
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Novos Produtos</h2>
          <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-500">Confira os últimos lançamentos da nossa coleção.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          <div v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'HomeView',
  components: {
    Carousel,
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        // Show a limited number of products on the home page
        this.products = data.slice(0, 6);
      });
  }
};
</script>