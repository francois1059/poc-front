<template>
  <v-app>
    <NavigationDrawer />
    <Header />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "@/components/HeaderBar.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
</script>
