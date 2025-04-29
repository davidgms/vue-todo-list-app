<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/todoList';

const todo = ref('');
const store = useTodoListStore();

function addItemAndClear(item) {
    if (item.lenght === 0) return;
    store.addTodo(item);
    todo.value = '';
}
</script>

<template>
    <form @submit.prevent="addItemAndClear(todo)">
        <input v-model="todo" type="text"/>
        <button>Add</button>
    </form>
</template>

<style scoped>
form {
  margin-bottom: 15px;
}
input {
  margin-top: 25px;
  margin-bottom: 15px;
  min-height: 32px;
}
button {
  margin-left: 30px;
  background-color: #0080e9;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
}
.alert-div {
  min-height: 25px;
}
.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>