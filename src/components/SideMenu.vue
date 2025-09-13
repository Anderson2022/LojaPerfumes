<template>
  <div :class="{
      'translate-x-0': isOpen || isPinned,
      '-translate-x-full': !isOpen && !isPinned,
      'w-20': isPinned && !isOpen, /* Smaller width when pinned and closed */
      'w-86': !isPinned || isOpen /* Normal width when not pinned or open */
    }"
    class="shadow-neumorphic-sm fixed inset-y-0 left-0 z-30 h-full flex flex-col bg-white overflow-y-auto transition duration-300 ease-in-out transform lg:translate-x-0 lg:static lg:inset-0">

    <!-- Header do Menu -->
    <div class="menu-header flex items-center justify-between mb-6 p-4 rounded-lg shadow-neumorphic-sm">
      <div class="logo" :class="{'hidden': isPinned && !isOpen}">
        <!-- Logo placeholder -->
        <img src="@/assets/logo.png" alt="Logo" class="h-8">
      </div>
      <div class="search-bar flex-1 mx-4" :class="{'hidden': isPinned && !isOpen}">
        <div class="relative">
          <input type="text" placeholder="Pesquisar..."
            class="w-full p-3 pl-10 rounded-full bg-gray-100 shadow-neumorphic-inset focus:outline-none focus:ring-2 focus:ring-purple-300">
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none"
            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
      <div class="user-icons flex space-x-4" :class="{'hidden': isPinned && !isOpen}">
        <div
          class="icon-circle w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-neumorphic-sm">
          <svg class="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </div>
        <div
          class="icon-circle w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-neumorphic-sm">
          <svg class="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </div>
        <div
          class="icon-circle w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-neumorphic-sm">
          <svg class="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </div>
      </div>
      <button @click="togglePin" class="icon-circle w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-neumorphic-sm ml-auto">
        <svg class="h-5 w-5 text-gray-700" :class="{'text-purple-500': isPinned}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.724v6.552a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      </button>
    </div>
    <div class="p-4 space-y-4">
      <button class="btn-neumorphic w-full flex items-center justify-center">
        <svg class="h-5 w-5 text-gray-700 mr-2" :class="{'mr-0': isPinned && !isOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10h.01"></path></svg>
        <span :class="{'hidden': isPinned && !isOpen}">Cadastrar Produto</span>
      </button>
      <button class="btn-neumorphic w-full flex items-center justify-center">
        <svg class="h-5 w-5 text-gray-700 mr-2" :class="{'mr-0': isPinned && !isOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        <span :class="{'hidden': isPinned && !isOpen}">Cadastrar Modelos</span>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPinned: false,
    };
  },
  methods: {
    togglePin() {
      this.isPinned = !this.isPinned;
    },
  },
};
</script>

<style scoped>
.btn-neumorphic {
  @apply px-4 py-2 rounded-lg bg-gray-100 shadow-neumorphic-sm text-gray-700 transition-all;
}
.btn-neumorphic:hover {
  box-shadow: inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff; /* shadow-neumorphic-inset */
}

/* Neumorphism styles */
.shadow-neumorphic-lg {
  box-shadow: 10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff;
}
.shadow-neumorphic-sm {
  box-shadow: 5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff;
}
.shadow-neumorphic-inset {
  box-shadow: inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff;
}
</style>
