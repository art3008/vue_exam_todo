<template>
  <section class="todo-details">
    <div class="back">
      <button @click="goBack">Назад</button>
    </div>
    <h2>Детали задачи</h2>
    <h3 class="todo__title">{{ todo.title }}</h3>
    <p class="todo__description">{{ todo.description }}</p>
    <p class="todo__deadline">
      Дата deadline'a: <span> {{ todo.deadline | formatDate }} </span>
    </p>
    <p class="todo__created">
      Дата создания: <span> {{ todo.created_at | formatDate }} </span>
    </p>
    <p class="todo__updated">
      Дата обновления:
      <span> {{ formatDateMethod() }} </span>
    </p>
  </section>
</template>

<script>
export default {
  name: "TodoDetailsPage",
  data: () => ({
    todo: {},
  }),

  computed: {
    todoId() {
      return this.$route.params.id;
    },

    todoList() {
      return this.$store.state.todoList;
    },
  },

  created() {
    const todo = this.todoList.find((el) => el.created_at === this.todoId);
    if (!todo) {
      return this.goBack();
    }
    this.todo = todo;
  },

  methods: {
    formatDateMethod() {
      if (!this.todo.updated_at) return "-";
      return new Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).format(new Date(this.todo.updated_at));
    },

    goBack() {
      this.$router.push({ name: "HomePage" });
    },
  },

  filters: {
    formatDate(value) {
      if (!value) return "-";
      return new Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).format(new Date(value));
    },
  },
};
</script>

<style lang="scss">
.back {
  text-align: left;
}
</style>
