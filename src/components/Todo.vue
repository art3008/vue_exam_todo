<template>
  <div class="todo" :class="{'todo-finished': todo.isFinished}">
    <div class="todo__header">
      <span @click="open">Открыть</span>
      <span @click="remove">Удалить</span>      
    </div>
    <h3 class="todo__title">{{ todo.title }}</h3>
    <p class="todo__description">{{ todo.description }}</p>
    <p class="todo__deadline">
      Дата deadline'a: <span> {{ todo.deadline | formatDate }} </span>
    </p>
    <span class="todo__done" @click="toggleTodo">{{todo.isFinished ? 'Возобновить' : 'Завершить'}} задачу</span>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data: () => ({
  }),

  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    idx: Number
  },
  
  


  computed:{
    todoList() {
      return this.$store.state.todoList;
    },
  },
  methods: {
    open() {
      this.$router.push({
        name: "TodoDetailsPage",
        params: { id: this.todo.created_at },
      });
    },
    remove() {
      this.todoList.splice(this.idx,1);
    },

    toggleTodo() {
      this.todo.isFinished = !this.todo.isFinished
      console.log(this.todo.isFinished);
    }
  },

  filters: {
    formatDate(value) {
      return new Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(new Date(value));
    },
  },
};
</script>

