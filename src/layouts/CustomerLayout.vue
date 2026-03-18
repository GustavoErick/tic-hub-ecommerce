<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          route: '/',
        },
        {
          label: 'Products',
          icon: 'pi pi-star',
          route: '/products',
        },
        {
          label: 'Carrinho',
          icon: 'pi pi-shopping-cart',
          route: '/cart',
        },
      ],
    }
  },
}
</script>
<template>
  <div>
    <Menubar :model="items" class="m-1">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
    </Menubar>
  </div>
  <div>
    <RouterView />
  </div>
</template>
