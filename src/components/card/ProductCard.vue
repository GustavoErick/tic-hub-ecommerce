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
    goToProductDetail(productId: number | undefined) {
      this.$router.push({ path: `/products/${productId}` })
    },
  },
})
</script>

<template>
  <Card>
    <template #title>
      <h1
        class="underline hover:decoration-green-500 cursor-pointer"
        @click="goToProductDetail(product?.id)"
      >
        {{ product?.name }}
      </h1>
    </template>
    <template #subtitle>{{ product?.category?.name }}</template>
    <template #footer>
      <section class="grid grid-cols-2 items-center">
        <p class="m-0">Preço: R$ {{ product?.price?.toFixed(2).replace('.', ',') }}</p>
        <Button class="shadow-lg" label="Adicionar ao carrinho" @click="addToCart" />
      </section>
    </template>
  </Card>
</template>
