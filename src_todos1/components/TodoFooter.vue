<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllcheck"/>
    </label>
    <span>
      <span>已完成{{completedSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completedSize > 0" @click="deleteCompletedTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    deleteCompletedTodos: Function,
    selectAllTodos: Function
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
  }
}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
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
