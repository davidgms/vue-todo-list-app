import {defineStore} from 'pinia';

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
        this.todoList.push({ item, id :this.id++, completed: false});
    },
    deleteTodo(itemId) {
        this.todoList = this.todoList.filter((object) => {
            return object.id !== itemId;
        });
    },
    toggleTodo(itemId) {
        this.todoList = this.todoList.map((object) => {
            if (object.id === itemId) {
                object.completed = !object.completed;
            }
            return object;
        });
    }
  }
})