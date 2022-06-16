<template>
  <div>
    <!-- add todo -->
    <input
      ref="newTodo"
      @blur="addTodo"
      @keyup.enter="addTodo"
      placeholder="输入待办 然后 输入回车 新增"
    />
    <!-- todo list -->
    <ul>
      <li v-for="todo in todos" :key="todo.title">
        {{ todo.title }}
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
  const newTodoTitle = evt.target.value;
  if (newTodoTitle) {
    store.add(evt.target.value);
    newTodo.value.value = "";
    newTodo.value.focus();
  }
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
</style>
