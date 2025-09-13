<template>
  <div id="app" class="flex bg-white text-gray-800 antialiased">
    <template v-if="$route.path !== '/admin'">
      <SideMenu :is-open="isSideMenuOpen" />
    </template>

    <div class="flex-1 flex flex-col" :class="{'lg:ml-64': isSideMenuOpen}" v-if="$route.path !== '/admin'">
      <Header @toggle-cart="toggleCart" @toggle-side-menu="toggleSideMenu" />
      <main class="flex-1">
        <router-view />
      </main>
      <Footer />
    </div>

    <template v-else>
      <router-view />
    </template>

    <CartModal :is-open="isCartOpen" :cart="cart" @close="closeCart" @remove-item="removeItem" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CartModal from './components/CartModal.vue';
import SideMenu from './components/SideMenu.vue'; // Added import for SideMenu
import { emitter } from './event-bus.js';
import { getCartItems, addOrUpdateCartItem, removeCartItem } from './services/cartDb'; // Import DB functions

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CartModal,
    SideMenu, // Added SideMenu to components

  },
  data() {
    return {
      isCartOpen: false,
      cart: [],
      isSideMenuOpen: false, // Add state for side menu
    };
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    closeCart() {
      this.isCartOpen = false;
    },
    toggleSideMenu() { // Method to toggle side menu
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
    async addToCart(product) { // Made async
      await addOrUpdateCartItem(product); // Interact with DB
      this.cart = getCartItems(); // Refresh cart from DB
    },
    buyNow(product) {
      this.addToCart(product);
      this.isCartOpen = true;
    },
    async removeItem(itemId) { // Made async
      await removeCartItem(itemId); // Interact with DB
      this.cart = getCartItems(); // Refresh cart from DB
    },
  },
  async created() { // Made async
    this.cart = getCartItems(); // Load initial cart from DB
    emitter.on('add-to-cart', this.addToCart);
    emitter.on('buy-now', this.buyNow);
  },
  beforeUnmount() {
    emitter.off('add-to-cart', this.addToCart);
    emitter.off('buy-now', this.buyNow);
  },
};
</script>