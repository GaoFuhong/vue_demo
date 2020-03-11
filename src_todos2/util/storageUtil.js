/* 使用localStorage存储数据的工具模块 */
const TODOkEY = 'todo_key'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODOkEY, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOkEY) || '[]')
  }
}
