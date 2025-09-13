<template>
  <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="group relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
    <!-- Image container -->
    <div class="w-full md:w-5/12 aspect-w-1 aspect-h-1 md:aspect-none bg-gray-200 overflow-hidden">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-center object-cover">
    </div>
    <!-- Details container -->
    <div class="p-4 flex flex-col flex-grow text-center md:text-left md:w-7/12">
      <!-- Text content -->
      <div class="flex-grow">
        <h3 class="text-sm text-gray-500">
          {{ product.brand || 'Marca Famosa' }}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{ product.name }}
        </p>
        <p class="mt-1 text-md font-semibold text-gray-700">R$ {{ product.price }}</p>
      </div>
      <!-- Action buttons -->
      <div class="mt-4 flex items-center space-x-3">
        <!-- Add to Cart Button (Icon Only) -->
        <button @click.prevent="buyNow" class="flex-grow bg-brand-gold text-white p-2 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.823M7.5 14.25 5.106 5.165A1.125 1.125 0 0 1 6.21 4H18m-9 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Zm-3 0a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
          </svg>
        </button>
        <!-- Quick Add/Buy Button (Icon Only) -->
        <button @click.prevent="addToCart" class="flex-shrink-0 text-brand-gold hover:text-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  </router-link>
</template>

<script>
import { emitter } from '../event-bus.js';

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      emitter.emit('add-to-cart', this.product);
    },
    buyNow() {
      emitter.emit('buy-now', this.product);
    }
  }
};
</script>