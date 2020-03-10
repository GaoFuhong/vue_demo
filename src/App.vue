<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 给TodoHeader标签绑定addTodo事件监听 -->
      <!-- <todo-header @addTodo="addTodo"/> -->
      <todo-header ref="header"/>
      <todo-list :todos="todos"/>
      <todo-footer :todos="todos" :deleteCompletedTodos="deleteCompletedTodos" :selectAllTodos="selectAllTodos"/>
      <todo-footer>
        <input type="checkbox" v-model="isAllcheck" slot="checkAll"/>
        <span slot="count">已完成{{completedSize}}/ 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completedSize > 0" @click="deleteCompletedTodos" slot="clear">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import storageUtil from './util/storageUtil'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      // 从localStorage读取todos
      todos: storageUtil.readTodos()
    }
  },
  computed: {
    completedSize () {
      return this.todos.reduce((preTotal, todo) => (preTotal + (todo.completed ? 1 : 0)), 0)
    },
    isAllcheck: {
      get () {
        return this.completedSize === this.todos.length && this.todos.length > 0
      },
      set (value) {
        this.selectAllTodos(value)
      }
    }
  },
  // 执行异步代码
  mounted () {
    this.$refs.header.$on('addTodo', this.addTodo)
    // 订阅消息
    Pubsub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
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
      handler: storageUtil.saveTodos
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
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
