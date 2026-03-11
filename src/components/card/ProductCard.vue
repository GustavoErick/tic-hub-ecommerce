<script lang="ts">
import { Product } from '@/model/product.model'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    product: {
      type: Product,
    },
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product, 1)
    },
  },
})
</script>

<template>
  <h1>{{ product?.name }}</h1>
  <h3>{{ product?.category?.name }}</h3>
  <p>Preço: R${{ product?.price.toFixed(2).replace('.', ',') }}</p>
  <button @click="addToCart">Adicionar ao carrinho</button>
</template>
