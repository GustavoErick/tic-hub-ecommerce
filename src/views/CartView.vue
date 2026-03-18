<script lang="ts">
import { Category } from '@/model/category.model'
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
      ],
    }
  },
  methods: {
    updateQuantity(product: Product, newVal: number, oldVal: number) {
      if (newVal > oldVal) {
        this.addItemToCart(product, 1)
      } else if (newVal < oldVal) {
        this.removeOneItemFromCart(product)
      }
    },
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
    requireConfirmation() {
      this.$confirm.require({
        group: 'headless',
        header: 'Tem certeza que deseja remover todos os itens do carrinho?',
        message: 'Confirme para remover.',
        accept: () => {
          this.removeAllItemsFromCart()
          this.$toast.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Todos os produtos foram removidos do carrinho',
            life: 3000,
          })
        },
        reject: () => {},
      })
    },
  },
  mounted() {
    let aux = 1
    this.products.forEach((item) => {
      this.addItemToCart(item, aux++)
    })
  },
}
</script>

<template>
  <div>
    <DataView :value="cart.cartItems">
      <template #header>
        <h1 class="text-3xl font-semibold mb-4">Carrinho</h1>
        <div v-if="cart.cartItems.length > 0">
          <div class="grid grid-cols-1 justify-self-start gap-2">
            <p>
              <b class="font-medium">Quantidade total de produtos:</b>
              {{ cart.getTotalItems() }}
            </p>
            <p class="font-medium">
              Preço total: R${{ cart.getFinalPrice().toFixed(2).replace('.', ',') }}
            </p>
            <Button @click="requireConfirmation" label="Remover todos os itens do carrinho" />
          </div>
        </div>
      </template>
      <template #list="slotProps">
        <div class="flex flex-col gap-4 p-4">
          <div
            v-for="item in slotProps.items"
            :key="item.product.id"
            class="flex items-center justify-between p-3 border border-emerald-200 rounded-sm"
          >
            <div class="flex flex-col">
              <small class="text-secondary">{{ item.product.category.name }}</small>
              <span class="font-bold">{{ item.product.name }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-secondary">Quantidade:</span>
              <InputNumber
                :modelValue="item.quantity"
                @update:modelValue="(val) => updateQuantity(item.product, val, item.quantity)"
                showButtons
                buttonLayout="horizontal"
                :min="0"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
              />
              <Button
                icon="pi pi-trash"
                @click="removeItemFromCart(item.product)"
                class="p-button-danger p-button-text"
              />
            </div>
          </div>
        </div>
      </template>
      <template #empty>
        <Card class="p-2 m-4">
          <template #title>Seu carrinho está vazio!</template>
          <template #subtitle>Vamos comprar?</template>
        </Card>
      </template>
    </DataView>
  </div>
  <ConfirmDialog group="headless">
    <template #container="{ message, acceptCallback, rejectCallback }">
      <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
        <div
          class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
        >
          <i class="pi pi-question !text-4xl"></i>
        </div>
        <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
        <p class="mb-0">{{ message.message }}</p>
        <div class="flex items-center gap-2 mt-6">
          <Button label="Remover" @click="acceptCallback" class="w-32"></Button>
          <Button label="Cancelar" outlined @click="rejectCallback" class="w-32"></Button>
        </div>
      </div>
    </template>
  </ConfirmDialog>
  <Toast />
</template>
