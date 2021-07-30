<template>
  <section class="add">
    <form @submit.prevent="addTodo" class="add-form">
      <h3>Добавить задачу</h3>
      <input v-model.trim="title" type="text" placeholder="Заголовок задачи" />
      <textarea
        v-model.trim="description"
        placeholder="Описание задачи"
      ></textarea>
      <span>Выберите deadline</span>
      <input v-model="deadline" type="date" />
      <button type="submit">Добавить</button>
      <button @click="toHomePage">Отмена</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "AddTodoPage",

  data: () => ({
    title: "",
    description: "",
    deadline: "",
  }),


  props: {
    idx: Number,
  },

  methods: {
    addTodo() {
      if (!this.title || !this.description || !this.deadline) return;
          
      if(new Date(this.deadline).setHours(23,59) < Date.now()) {
        alert('Ваша дата некорректна')
        this.deadline = ""
      } else {
        this.$store.commit("ADD_TODO", {
          title: this.title,
          description: this.description,
          created_at: Date.now(),
          isFinished: false,
          updated_at: null,
          deadline: new Date(this.deadline).setHours(23,59).valueOf(),
        })
        this.toHomePage();
      }     
    },
    
    toHomePage() {
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>

<style lang="scss">
.add {
  padding-top: 6rem;
}

.add-form {
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input,
  & textarea,
  & button {
    margin-bottom: 0.7rem;
    width: 100%;
  }

  & textarea {
    resize: none;
    height: 100px;
    padding: 0.4rem;
  }
}
</style>
