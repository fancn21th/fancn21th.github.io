<template>
  <div>
    <em>我的待办（范例）</em>
    <hr />
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
    <cite>
      {{ now }}
    </cite>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "./MyTodoList.store";

const newTodo = ref(null);

const todos = store.state.todos;

const now = new Date();

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
  font-size: 1rem;
}
div {
  width: 400px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
}
input {
  margin-top: 1rem;
  border: none;
  border-bottom: 1px solid black;
  font-size: 0.9rem;
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
em {
  width: 50%;
  font-size: 1rem;
}
cite {
  margin-top: 2rem;
  font-size: 0.5rem;
  align-self: flex-end;
}
</style>
