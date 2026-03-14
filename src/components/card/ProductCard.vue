<script lang="ts">
import { Product } from '@/model/product.model'
import { defineComponent, type PropType } from 'vue'
export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
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
  <Card>
    <template #title>{{ product?.name }}</template>
    <template #subtitle>{{ product?.category?.name }}</template>
    <template #footer>
      <section class="grid grid-cols-2 items-center">
        <p class="m-0">Preço: R$ {{ product?.price.toFixed(2).replace('.', ',') }}</p>
        <Button class="shadow-lg" label="Adicionar ao carrinho" @click="addToCart" />
      </section>
    </template>
  </Card>
</template>
