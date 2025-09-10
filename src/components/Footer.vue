<template>
  <footer class="bg-white">
    <!-- Newsletter Section -->
    <div class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">Assine nossa Newsletter</h2>
        <p class="mt-4 text-lg text-gray-600">Fique por dentro das nossas novidades e promoções exclusivas.</p>
        <form class="mt-8 sm:flex sm:justify-center">
          <div class="min-w-0 flex-1">
            <label for="email-address" class="sr-only">Email</label>
            <input id="email-address" type="email" autocomplete="email" required class="block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-brand-gold focus:border-brand-gold" placeholder="Digite seu e-mail">
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <button type="submit" class="block w-full py-3 px-5 rounded-md shadow bg-brand-gold text-white font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold">
              Inscrever-se
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Main Footer -->
    <div class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="space-y-4">
            <h3 class="text-sm font-semibold tracking-wider uppercase">Institucional</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Sobre Nós</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Termos e Condições</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-semibold tracking-wider uppercase">Atendimento</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Contato</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Devoluções</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Mapa do Site</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-semibold tracking-wider uppercase">Minha Conta</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Minha Conta</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Histórico de Pedidos</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Favoritos</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-semibold tracking-wider uppercase">Fale Conosco</h3>
            <p class="text-base text-gray-300">
              Rua Exemplo, 123<br>
              Cidade, Estado, CEP 12345-678<br>
              (11) 99999-9999
            </p>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-base text-gray-400 md:order-1">&copy; 2.025 Loja de Perfumes. Todos os direitos reservados.</p>
          <!-- Payment Icons Placeholder -->
          <div class="mt-4 md:mt-0 md:order-2">
            <p class="text-sm text-gray-400">Pagamento Seguro</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>