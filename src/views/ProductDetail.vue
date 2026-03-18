<script lang="ts">
import ProductCard from '@/components/card/ProductCard.vue'
import { Category } from '@/model/category.model'
import { Product } from '@/model/product.model'

export default {
  data() {
    return {
      productId: this.$route.params.id,
      product: {} as Product | undefined,
    }
  },
  methods: {
    getProduct() {
      this.product = [
        new Product(1, 'Essencial Sentir', 100, new Category(1, 'Perfumaria')),
        new Product(2, 'Monitor 144hz', 900, new Category(2, 'Tecnologia')),
        new Product(3, 'Calça Cargo', 80, new Category(3, 'Vestuário')),
        new Product(4, 'Camisa Oversized', 99, new Category(3, 'Vestuário')),
        new Product(5, 'Iphone 16e', 3199, new Category(4, 'Smartphones')),
        new Product(6, 'Relógio Casio F91-WB', 149, new Category(5, 'Relojoaria')),
        new Product(7, 'O Almanaque de Naval', 29, new Category(6, 'Livraria')),
        new Product(8, 'Fichário A5', 70, new Category(7, 'Papelaria')),
        new Product(9, 'Caneta MUJI 05', 19, new Category(7, 'Papelaria')),
      ].find((p) => p.id === Number(this.productId))
    },
  },
  mounted() {
    this.getProduct()
  },
  components: { ProductCard },
}
</script>

<template>
  <div v-if="product">
    <ProductCard :product="product" />
  </div>
  <div v-else>
    <Card class="p-2 m-4">
      <template #title>Produto não encontrado!</template>
      <template #subtitle>Procure outras opções.</template>
    </Card>
  </div>
</template>
