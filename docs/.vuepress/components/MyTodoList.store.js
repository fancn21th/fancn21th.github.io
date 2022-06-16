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
}

export const store = new Store();
