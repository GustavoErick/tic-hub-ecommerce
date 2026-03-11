import type { Product } from './product.model'

interface CartItem {
  product: Product
  quantity: number
}

export class Cart {
  constructor(public cartItems: CartItem[] = []) {}

  // Retorna a quantidade total de unidades (soma das quantidades) no carrinho.
  getTotalItems() {
    let totalQuantity = 0
    this.cartItems.forEach((item) => {
      totalQuantity += item.quantity
    })

    return totalQuantity
  }

  // Retorna o valor monetário total da compra.
  getFinalPrice() {
    let totalPrice = 0
    this.cartItems.forEach((item) => {
      totalPrice += item.product.price * item.quantity
    })

    return totalPrice
  }

  // Adiciona um item ao carrinho ou aumenta a quantidade de itens caso já esteja no carrinho.
  addItem(product: Product, quantity: number) {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id)
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      this.cartItems.push({ product, quantity })
    }
  }

  // Remove um item completo do carrinho.
  removeItem(product: Product) {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== product.id)
  }

  // Remove uma unidade de um item do carrinho.
  removeOneItem(product: Product) {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id)
    if (existingItem) {
      if (existingItem.quantity - 1 > 0) {
        existingItem.quantity--
      } else {
        this.removeItem(existingItem.product)
      }
    }
  }

  // Remove todos os itens do carrinho.
  removeAllItens() {
    this.cartItems.pop()
  }
}
