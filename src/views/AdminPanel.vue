<template>
  <div class="flex h-screen">
    <div class="w-1/4">
      <SideMenu />
    </div>
    <div class="flex-1 p-6">
      <h1 class="text-3xl font-bold mb-6">Painel de Administração</h1>
      <p class="text-gray-700">Bem-vindo ao painel de administração. Aqui você pode gerenciar configurações e cadastros.</p>
      <!-- Conteúdo administrativo adicional pode ser adicionado aqui -->
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';

export default {
  name: 'AdminPanel',
  components: {
    SideMenu,
  },
};
</script>

<style scoped>
/* Estilos específicos para o AdminPanel */
</style>