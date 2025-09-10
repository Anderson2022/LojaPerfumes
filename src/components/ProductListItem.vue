<template>
  <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden w-full block">
    <div class="flex-shrink-0 w-48">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-center object-cover">
    </div>
    <div class="flex-1 p-4 sm:p-6">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm font-medium text-gray-500">
            {{ product.brand }}
          </p>
          <h3 class="mt-1 text-xl font-semibold text-gray-900">
            {{ product.name }}
          </h3>
          <p class="mt-2 text-sm text-gray-600 max-w-xl">{{ product.description }}</p>
        </div>
        <div class="text-right ml-4 flex-shrink-0">
          <p class="text-xl font-bold text-gray-900">R$ {{ product.price }}</p>
        </div>
      </div>
      <div class="mt-4 flex justify-end">
        <button class="bg-brand-gold text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold">
          Comprar
        </button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>
