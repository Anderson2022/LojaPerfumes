<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="product" class="flex flex-col lg:flex-row gap-8">
      <!-- Product Image -->
      <div class="lg:w-1/2">
        <img :src="product.image" :alt="product.name" class="w-full h-auto object-cover rounded-lg shadow-md">
      </div>

      <!-- Product Details -->
      <div class="lg:w-1/2">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-2">{{ product.name }}</h1>
        <p class="text-lg text-gray-600 mb-4">{{ product.brand }}</p>
        <p class="text-3xl font-bold text-gray-900 mb-6">R$ {{ product.price }}</p>

        <p class="text-gray-700 mb-6">{{ product.description }}</p>

        <!-- Quantity Selector -->
        <div class="flex items-center mb-6">
          <label for="quantity" class="mr-4 text-gray-700">Quantidade:</label>
          <input type="number" id="quantity" v-model.number="quantity" min="1" class="w-20 p-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold">
        </div>

        <!-- Add to Cart Button -->
        <button class="w-full bg-brand-gold text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
    <div v-else class="text-center py-12">
      <p class="text-xl text-gray-600">Produto não encontrado.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailView',
  data() {
    return {
      product: null,
      quantity: 1,
    };
  },
  created() {
    this.fetchProduct();
  },
  watch: {
    '$route.params.id': 'fetchProduct',
  },
  methods: {
    fetchProduct() {
      const productId = parseInt(this.$route.params.id);
      fetch('/data/products.json')
        .then(response => response.json())
        .then(data => {
          this.product = data.find(p => p.id === productId);
        });
    },
  },
};
</script>
