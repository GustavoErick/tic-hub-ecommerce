<script lang="ts">
import { Category } from '@/model/category.model'
import ProductCard from '@/components/card/ProductCard.vue'
import { Cart } from '@/model/cart.model'
import { Product } from '@/model/product.model'
export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(1, 'Essencial Sentir', 100, new Category(1, 'Perfumaria')),
        new Product(2, 'Monitor 144hz', 900, new Category(2, 'Tecnologia')),
        new Product(3, 'Calça Cargo', 80, new Category(3, 'Vestuário')),
        new Product(4, 'Camisa Oversized', 99, new Category(3, 'Vestuário')),
        new Product(5, 'Iphone 16e', 3199, new Category(4, 'Smartphones')),
        new Product(6, 'Relógio Casio F91-WB', 149, new Category(5, 'Relojoaria')),
        new Product(7, 'O Almanaque de Naval', 29, new Category(6, 'Livraria')),
        new Product(8, 'Fichário A5', 70, new Category(7, 'Papelaria')),
        new Product(9, 'Caneta MUJI 05', 19, new Category(7, 'Papelaria')),
      ],
    }
  },
  methods: {
    addItemToCart(product: Product, quantity: number) {
      this.cart.addItem(product, quantity)
    },
  },
  components: { ProductCard },
}
</script>

<template>
  <section class="grid-col-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <h1 class="text-3xl font-semibold col-span-full">Produtos</h1>
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" @add-to-cart="addItemToCart" />
    </div>
  </section>
</template>
