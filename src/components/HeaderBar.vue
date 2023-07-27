<template>
  <v-app-bar color="background" app fixed :border="true" elevation="0">
    <router-link to="/" class="ml-4">
      <img src="@/assets/logo.png" alt="Claranet brand logo" />
    </router-link>
    <v-divider class="mx-4" vertical inset/>
    <v-app-bar-title>
      Todos
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.app-bar {
  border-bottom: 1px solid rgb(var(--v-theme-claraGray-lighten-6));
}
</style>
