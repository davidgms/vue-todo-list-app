<script setup>
import { useTodoListStore } from '@/stores/todoList';
import { storeToRefs } from "pinia";

const store = useTodoListStore();
// storeToRefs lets todoList keep reactivity:
const { todoList } = storeToRefs(store);

// you can use store.toggleTodo and store.deleteTodo directly in the template or import it here: 
// const {toggleTodo, deleteTodo} = store;
</script>

<template>
    <div class="item" v-for="todo in todoList" :key="todo.id">
        <div class="content">
            <div :class="{ completed: todo.completed }">{{ todo.item }}</div>
            <div class="item__actions">
                <button class="complete-btn" @click.stop="store.toggleTodo(todo.id)">{{ todo.completed ? 'Undo' : 'Complete' }}</button>
                <button class="delete-btn" @click="store.deleteTodo(todo.id)">Remove</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}
button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  &.complete-btn {
    background-color: #3d3d3d;
  }
  &.delete-btn {
    background-color: #cc122b;
    margin-left: 30px;
  }
}
</style>