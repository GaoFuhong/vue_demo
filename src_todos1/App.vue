<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <todo-list :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer :todos="todos" :deleteCompletedTodos="deleteCompletedTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      // 从localStorage读取todos
      todos: JSON.parse(window.localStorage.getItem('todo_key') || '[]')
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    deleteCompletedTodos () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    selectAllTodos (isCheck) {
      this.todos.forEach(todo => (todo.completed = isCheck))
    }
  },
  watch: {
    todos: {
      deep: true, // 深度监视
      handler: function (value) {
        window.localStorage.setItem('todo_key', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
