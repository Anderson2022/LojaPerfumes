<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Cadastro de Produto</h1>
    <form @submit.prevent="saveProduct" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nome do Produto:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name" type="text" v-model="product.name" required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
          Preço:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price" type="number" step="0.01" v-model="product.price" required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
          URL da Imagem:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="image" type="text" v-model="product.image"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="brand">
          Marca:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="brand" type="text" v-model="product.brand"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-brand-gold hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Salvar Produto
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductFormView',
  data() {
    return {
      product: {
        name: '',
        price: 0,
        image: '',
        brand: '',
      },
    };
  },
  methods: {
    saveProduct() {
      // Lógica para salvar o produto (será implementada depois)
      console.log('Produto a ser salvo:', this.product);
      alert('Produto salvo (simulado)!');
      // Resetar formulário
      this.product = {
        name: '',
        price: 0,
        image: '',
        brand: '',
      };
    },
  },
};
</script>
