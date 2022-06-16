<template>
  <div>
    <!-- add todo -->
    <input
      ref="newTodo"
      @blur="addTodo"
      @keyup.enter="addTodo"
      placeholder="输入待办标题 然后敲回车"
    />
    <!-- todo list -->
    <ul>
      <li v-for="todo in todos" :key="todo.title">
        {{ todo.title }} (<span @click="removeTodo(todo.title)">X</span>)
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "./MyTodoList.store";

const newTodo = ref(null);

const todos = store.state.todos;

function addTodo(evt) {
  const newTodoTitle = evt.target.value.trim();
  if (newTodoTitle && !store.has(newTodoTitle)) {
    store.add(evt.target.value);
    newTodo.value.value = "";
    newTodo.value.focus();
  }
}
function removeTodo(title) {
  store.remove(title);
}
</script>

<style scoped>
* {
  background-color: #efefef;
}
div {
  width: 400px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
}
input {
  border: none;
  border-bottom: 1px solid black;
}
input:focus {
  outline: none;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(180deg);
    color: red;
  }
}
span {
  display: inline-block;
  background-color: transparent;
}
span:hover {
  animation: rotate 0.4s ease;
  animation-fill-mode: both;
  cursor: pointer;
}
</style>
