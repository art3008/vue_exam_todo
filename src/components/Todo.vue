<template>
  <div class="todo">
    <span>  </span>
    <div class="todo__header">
      <span @click="open">Открыть</span>     
    </div>
    <h3 class="todo__title">{{ todo.title }}</h3>
    <p class="todo__description">{{ todo.description }}</p>
    <p class="todo__deadline">
      Дата deadline'a: <span> {{ todo.deadline | formatDate }} </span>
      Дата : <span> {{ todo.created_at | formatDate }} </span>
    </p>
    <div class="todo__bottom">
      <span @click="remove">Удалить</span>     
    </div>
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

<style lang="scss">
.todo {
  width: 400px;
  margin: 1rem auto;
  padding: 0.7rem;
  border: 1px solid black;
  border-radius: 8px;

  & h3,
  & p {
    margin: 0 0 0.5rem 0;
  }

  &__header {
    text-align: right;

    & span {
      font-style: italic;
      font-weight: 300;
      cursor: pointer;
    }
  }
  
  &__bottom {
    text-align: right;

    & span {
      font-style: italic;
      font-weight: 300;
      cursor: pointer;
    }
  }
  

}
</style>
