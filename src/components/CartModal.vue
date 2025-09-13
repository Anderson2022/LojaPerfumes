<template>
  <div v-if="isOpen" class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="$emit('close')"></div>

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div 
            class="pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700"
            :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
          >
            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carrinho de Compras</h2>
                  <div class="ml-3 flex h-7 items-center">
                    <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="$emit('close')">
                      <span class="sr-only">Close panel</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="mt-8">
                  <div class="flow-root">
                    <ul v-if="cart.length > 0" role="list" class="-my-6 divide-y divide-gray-200">
                      <li v-for="item in cart" :key="item.id" class="flex py-6">
                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img :src="item.image" :alt="item.name" class="h-full w-full object-cover object-center">
                        </div>
                        <div class="ml-4 flex flex-1 flex-col">
                          <div>
                            <div class="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a :href="`/products/${item.id}`">{{ item.name }}</a>
                              </h3>
                              <p class="ml-4">R${{ item.price }}</p>
                            </div>
                            <p class="mt-1 text-sm text-gray-500">{{ item.brand }}</p>
                          </div>
                          <div class="flex flex-1 items-end justify-between text-sm">
                            <p class="text-gray-500">Qtd {{ item.quantity }}</p>
                            <div class="flex">
                              <button @click="$emit('remove-item', item.id)" type="button" class="font-medium text-brand-gold hover:text-opacity-80">Remover</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <p v-else class="text-center text-gray-500">Seu carrinho está vazio.</p>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>R${{ subtotal }}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Frete e taxas calculados no checkout.</p>
                <div class="mt-6">
                  <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-brand-gold px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-90">Checkout</a>
                </div>
                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    ou
                    <button type="button" class="font-medium text-brand-gold hover:text-opacity-80" @click="$emit('close')">
                      Continuar Comprando
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    }
  },
  computed: {
    subtotal() {
      return this.cart.reduce((total, item) => {
        // Note: item.price is a string like "40,00". It needs to be converted to a number.
        const price = parseFloat(item.price.replace(',', '.'));
        return total + (price * item.quantity);
      }, 0).toFixed(2).replace('.', ',');
    }
  }
};
</script>