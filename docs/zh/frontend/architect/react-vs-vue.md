# React Vs Vue

| 功能               |              React               |              Vue2               |                      Vue3                       |
| ------------------ | :------------------------------: | :-----------------------------: | :---------------------------------------------: |
| 响应式数据         |          useState(...)           |         { data:{...} }          | const foo = ref(...) /const foo = reactive(...) |
| 派生数据/计算属性  |         const c = a + b          | { computed:{ foo: () => {...} } |        const foo = computed(() => {...})        |
| Watch 监听         | useEffect(() => {...}, [target]) |   { watch:{foo: () => {...} }   |             [watch in vue3](#watch)             |
| hook vs composable | const [ a, b, ...] = useXXX(...) |               N/A               |        const { a, b, ...} = useXXX(...)         |

:::tip

- ... = {} | primitive type

:::

## watch

```js
watch(
  numbers,
  (newValue, oldValue) => {
    // 注意：这里的 newValue 和 oldValue 是 reactive 对象 永远相同
    if (oldValue) {
      console.log(`foo: ${oldValue.foo} -> ${newValue.foo}`);
      console.log(`bar: ${oldValue.bar} -> ${newValue.bar}`);
    }
  },
  {
    immediate: true,
  }
);
watch(
  [count],
  ([newValue], [oldValue]) => {
    if (oldValue !== newValue) {
      history.value.push(`count: ${oldValue} -> ${newValue}`);
    }
  },
  {
    immediate: true,
  }
);

watchEffect(() => {
  // 只会监听 count 的变化
  console.log(count.value);
});
```
