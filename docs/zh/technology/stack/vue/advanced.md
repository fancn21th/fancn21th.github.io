# 高级

## Functional 组件

### Why ?

- Functional 组件 没有 Instance 因此 开销更小
- 适合作为 叶子节点 组件

  - [RouterView](https://github.com/vuejs/vue-router/blob/dev/src/components/view.js)

### Use Cases

- Presentaional Component

  ```html
  <template functional>
    <!-- ... -->
  </template>
  ```

- Wrapper Component

  ```javascript
  Vue.component("smart-table", {
    functional: true,
    props: { items: { type: Array } },
    render(h, context) {
      if (context.props.items.length > 0) {
        return;
        h(NormalTable, context.data, context.children);
      } else {
        return h(EmptyTable, context.data, context.children);
      }
    },
  });
  ```

### Features

- has no

  - data
  - computed
  - watcher
  - lifecycle
  - methods
  - template

    - in `2.5.0+`

    ```vue
    <template functional>
      <!-- ... -->
    </template>
    ```

- has

  - props
  - attrs
  - events
  - slots
  - render func

- render
  - h
  - context

## 受控组件

## 组件封装

## 插槽

## Render 方法

## Data Provider 模式

## 组合组件
