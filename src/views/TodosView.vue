<template>
  <Transition mode="out-in">
        <v-card
        class="mt-4 mx-auto"
        max-width="600"
        >
          <v-list lines="two">
            <v-list-subheader inset>Todos</v-list-subheader>
            <v-list-item
              v-for="todo in todos"
              :key="todo.id"
              :title="todo.id"
              :subtitle="todo.description"
            >
            </v-list-item>
          </v-list>
        </v-card>
  </Transition>
</template>

<script setup lang="ts">
import { useTodos } from '@/composables/useTodos';

const { todos } = useTodos();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
