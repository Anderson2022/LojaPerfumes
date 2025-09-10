<template>
  <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="group relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 block">
    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-center object-cover">
    </div>
    <div class="p-4 text-center">
      <h3 class="text-sm text-gray-500">
        {{ product.brand || 'Marca Famosa' }}
      </h3>
      <p class="mt-1 text-lg font-medium text-gray-900">
        {{ product.name }}
      </p>
      <p class="mt-1 text-md font-semibold text-gray-700">R$ {{ product.price }}</p>
      <button class="mt-4 w-full bg-brand-gold text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold">
        Comprar
      </button>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>