import { reactive } from "vue";

class Store {
  constructor() {
    const todos = [
      {
        title: "快学前端",
      },
    ];
    this.state = reactive({
      todos,
    });
  }
  add(title) {
    this.state.todos.push({
      title,
    });
  }
  has(title) {
    return this.state.todos.some((todo) => todo.title === title);
  }
  remove(title) {
    const index = this.state.todos.findIndex((todo) => todo.title === title);
    this.state.todos.splice(index, 1);
  }
}

export const store = new Store();
