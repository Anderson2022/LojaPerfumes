<template>
  <header class="bg-white shadow-sm">
    <!-- Top Bar -->
    <div class="bg-gray-900 text-white text-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        <div>
          <span>Bem-vindo à nossa loja de perfumes!</span>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-brand-gold transition-colors">Entrar</a>
          <span class="text-gray-500">|</span>
          <a href="#" class="hover:text-brand-gold transition-colors">Criar conta</a>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link :to="{ name: 'Home' }">
            <span class="sr-only">Loja de Perfumes</span>
            <img class="h-8 w-auto sm:h-10" src="@/assets/logo.png" alt="Loja de Perfumes">
          </router-link>
        </div>

        <!-- Navigation -->
        

        <!-- Search and Cart -->
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
          <!-- Search -->
          <div class="relative">
            <input type="text" placeholder="Buscar..." class="bg-gray-100 border-transparent focus:ring-2 focus:ring-brand-gold focus:border-transparent rounded-full py-2 px-4 text-sm">
          </div>
          <!-- Cart -->
          <div class="ml-4 flow-root lg:ml-6">
            <button @click="$emit('toggle-cart')" class="group -m-2 p-2 flex items-center">
              <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
              <span class="sr-only">items in cart, view bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>