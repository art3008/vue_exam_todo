<template>
  <div class="home">
    <AppHeader />
    <h2 class="title">Список моих задач</h2>
    <div v-if="todoList.length" class="todos">
      <Todo v-for="(todo, idx) in todoList" :key="todo.created_at" :idx="idx" :todo="todo" />
    </div>
    <div v-else class="empty">Список задач пуст</div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "Home",

  components: {
    AppHeader,
    Todo: () => import("@/components/Todo.vue"),
  },

  computed: {
    todoList() {
      return this.$store.state.todoList;

    },
    idx: Number
  },
};
</script>
