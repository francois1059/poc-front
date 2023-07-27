<template>
  <v-navigation-drawer app rail permanent class="clara-nav-drawer">
    <v-list>
      <v-list-item :prepend-icon="mdiApps" :to="{ name: 'home' }"></v-list-item>
    </v-list>
    <v-list>
      <v-list-item :prepend-icon="mdiAccount" :to="{ name: 'todos' }"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { mdiApps, mdiAccount } from '@mdi/js';
</script>

<style scoped>
.clara-nav-drawer {
  border-left: solid 5px var(--v-secondary-base);
}
</style>
