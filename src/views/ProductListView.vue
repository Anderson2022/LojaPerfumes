<template>
  <main class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header and View Switcher -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div class="text-center sm:text-left mb-4 sm:mb-0">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ pageTitle }}</h2>
          <p class="mt-2 max-w-2xl text-lg text-gray-500">{{ pageSubtitle }}</p>
        </div>
        <!-- View Switcher -->
        <div class="flex items-center space-x-2">
          <button @click="setViewMode('grid')" :class="['p-2 rounded-md', viewMode === 'grid' ? 'bg-brand-gold text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300']" aria-label="Grid View">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          </button>
          <button @click="setViewMode('list')" :class="['p-2 rounded-md', viewMode === 'list' ? 'bg-brand-gold text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300']" aria-label="List View">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      <!-- Product List / Grid -->
      <div :class="productListClasses">
        <div v-for="product in products" :key="product.id" class="flex justify-center">
          <component :is="currentViewComponent" :product="product" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import ProductListItem from '../components/ProductListItem.vue';

export default {
  name: 'ProductListView',
  components: {
    ProductCard,
    ProductListItem,
  },
  data() {
    return {
      products: [],
      pageTitle: 'Nossos Produtos',
      pageSubtitle: 'Confira os últimos lançamentos da nossa coleção.',
      viewMode: 'grid', // 'grid' or 'list'
    };
  },
  computed: {
    currentViewComponent() {
      return this.viewMode === 'grid' ? 'ProductCard' : 'ProductListItem';
    },
    productListClasses() {
      if (this.viewMode === 'grid') {
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10';
      }
      return 'flex flex-col space-y-6';
    }
  },
  created() {
    this.fetchProducts();
    this.updatePageInfo();
  },
  watch: {
    '$route': 'updatePageInfo'
  },
  methods: {
    fetchProducts() {
      fetch('/data/products.json')
        .then(response => response.json())
        .then(data => {
          // TODO: Filter products based on the current route/category
          this.products = data;
        });
    },
    updatePageInfo() {
      const routeName = this.$route.name;
      this.pageTitle = routeName;
      this.pageSubtitle = `Os melhores produtos da categoria ${routeName}.`;
    },
    setViewMode(mode) {
      this.viewMode = mode;
    }
  }
};
</script>