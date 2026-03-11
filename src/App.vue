<script lang="ts">
import { Category } from './model/category.model'
import ProductCard from './components/card/ProductCard.vue'
import { Cart } from './model/cart.model'
import { Product } from './model/product.model'

export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(1, 'Essencial Sentir', 100, new Category(1, 'Perfumaria')),
        new Product(2, 'Monitor 144hz', 900, new Category(2, 'Tecnologia')),
        new Product(3, 'Calça Cargo', 80, new Category(3, 'Vestuário')),
      ],
    }
  },
  methods: {
    addItemToCart(product: Product, quantity: number) {
      this.cart.addItem(product, quantity)
    },

    removeAllItemsFromCart() {
      this.cart.removeAllItems()
    },
    removeItemFromCart(product: Product) {
      this.cart.removeItem(product)
    },
    removeOneItemFromCart(product: Product) {
      this.cart.removeOneItem(product)
    },
  },
  components: {
    ProductCard,
  },
}
</script>

<template>
  <div v-for="product in products" :key="product.id">
    <ProductCard :product="product" @add-to-cart="addItemToCart" />
  </div>
  <div>
    <h1>Carrinho</h1>
    <p>Produtos:</p>
    <ul v-for="cartItem in cart.cartItems" :key="cartItem.product.id">
      <li>{{ cartItem }}</li>
      <button @click="removeOneItemFromCart(cartItem.product)">Remover 1 produto</button>
      <button @click="removeItemFromCart(cartItem.product)">Remover produto</button>
    </ul>
    <p>Quantidade total de produtos: {{ cart.getTotalItems() }}</p>
    <p>Preço total R${{ cart.getFinalPrice().toFixed(2).replace('.', ',') }}</p>
    <button @click="removeAllItemsFromCart">Remover todos os itens</button>
  </div>
</template>
