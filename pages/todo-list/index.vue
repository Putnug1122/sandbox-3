<template>
  <div>
    <h3 class="text-center">TO DO LIST</h3>
    <div class="container">
      <form action="">
        <input-todo
          :value="todoList.name"
          :status="todoList.done"
          @get="(val) => (todoList.name = val)"
        />
        <!-- <button class="btn btn-outline-primary" type="submit">
          <i class="fas fa-plus"></i>
        </button> -->
        <button class="btn btn-outline-primary" @click="addTodo">
          <i class="fas fa-plus"></i>
        </button>
      </form>
      <hr />
      <div class="col" v-for="(todos, i) in todoList" :key="i">
        <list-belum :value="todos.name" :status="todos.done" />
      </div>
      <hr />
      <list-udah />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoList: [],
    }
  },
  mounted() {
    this.getTodoList()
  },
  methods: {
    addTodo(val) {
      this.todoList.push(val)
    },
    deleteTodo() {
      this.todoList.splice(this.todoList.indexOf(todo), 1)
    },
    getTodoList() {},
  },
  computed: {
    doneList() {
      return this.todoList.filter((todo) => todo.done)
    },
  },
}
</script>
