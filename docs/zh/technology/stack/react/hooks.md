# React hooks

## WTF

讲清楚 `hooks` 可能是一件需要 把黑板 擦干净了然后写满，接着发现大家没有听明白， 然后 再擦干净，再写满的事情。

因为它本身就是一个经过若干年进化才有的全新编程范式，自然地，对于缺乏经验的新手而言，太过于抽象以至于不好理解。

我们来看一段范例代码

```jsx
function App() {
  const [todos, addTodo, removeTodo, toggleTodo] = useTodos();

  return (
    <div className="App">
      <h1>React + Typescript TODOs</h1>
      <AddTodo onAddTodo={(title) => addTodo(title)} />
      <hr />
      <TodoList
        todos={todos}
        onRemoveTodo={(id) => removeTodo(id)}
        onToggleTodo={(id) => toggleTodo(id)}
      />
    </div>
  );
}
```

如果这是一道面试题，需要你分别实现 `<AddTodo/>`， `<TodoList>` 以及 `useTodos()` 从而能实现 [TODO MVC React 版本在线演示](https://todomvc.com/examples/react/) 中的基本功能。 你会怎么做呢？

## 参考

- [hook-flow](https://github.com/donavon/hook-flow)
- [React Hooks 的 动机 （英文）](https://reactjs.org/docs/hooks-intro.html#motivation)
- [react-use](https://streamich.github.io/react-use/)
- [mantine hooks](https://mantine.dev/hooks/)
