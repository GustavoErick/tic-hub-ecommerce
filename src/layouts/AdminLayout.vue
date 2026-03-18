<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          label: 'Gerência',
          items: [
            {
              label: 'Dashboard',
              icon: 'pi pi-table',
              route: '/admin/dashboard',
            },
            {
              label: 'Produtos',
              icon: 'pi pi-star',
              route: '/products',
            },
          ],
        },
      ],
    }
  },
}
</script>

<template>
  <div class="flex min-h-screen p-1">
    <Menu :model="items">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </template>
    </Menu>
    <div>
      <RouterView />
    </div>
  </div>
</template>
