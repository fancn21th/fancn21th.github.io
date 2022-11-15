# Directives

## 对比 `Component` vs `Directive`

在 `AngularJS` 的技术 术语里 [Component](https://code.angularjs.org/snapshot/docs/tutorial/step_03) 接近于 `Vue` 的 [SFC](https://cn.vuejs.org/api/sfc-spec.html#overview)

用现代前端组件来衡量， `AngularJS` 组件化技术的核心应该是 [Directive](https://code.angularjs.org/snapshot/docs/guide/directive)

:::tip

In AngularJS, a Component is a special kind of `directive` that uses a simpler configuration which is suitable for a component-based application structure.

AngularJS 组件 是 AngularJS 指令的一个特例 或者 简化版本

好比 `Array.map` vs `Array.reduce` `reduce` 更强大但是 `map` 更便捷。

- 引用自 [AngularJS component](https://code.angularjs.org/1.8.2/docs/guide/component)

:::

10 年前我就没有搞明白 组件与指令的区别， 因为官方的解释是偏向实现细节的 而不是接口应用层面， 如果你不关心实现细节你很难理解他们之间的区别。

10 年后我也不打算从官方的文档去理解，我相信作为应用开发人员从使用的角度去窥探他们的区别更有效。

### 组件化开发

现代前端编程 `组件化` 是一个基础术语。 简答来说 从 使用角度来看 要解决 `封装` 和 `接口` 两大问题。

- 组件封装

  组件封装的是页面上某一个区域的 `渲染` 和 `数据处理逻辑` 在这一点上 `Component` 完全可以胜任

- 组件 IO

  组件的 `复用` 离不开 输入输出的 接口, 输入 一般是指 `数据` 输出 一般是指 `事件`

  - Vue

    > Both `options` and `composition` api

    - In

      - Props

    - Out
      - `@`Event

  - React

    > `Function Component` >= 16.8

    - In

      - Function Parameter
        - 原始类型和对象类型

    - Out

      - Function Parameter
        - 回调函数

### Angular JS 的输入输出

:::warning

AngularJS 在 `指令` 这个 话题内有很多 技术 `细节` 比如

- link function
- scope
- element
- attrs
- controller
- $scope
- transcludeFn
- restrict option
- ...

这些都是属于 `实现细节` 和 `AngularJS 基础`， 实战来讲这些细节不影响你去实现常用的组件封装。所以我不会一一展开除非有必要。我还是会重点从 `使用` 角度出发 最后深入到 `细节`。

:::

- 如何往 组件 传参数

  - 在 option api `scope` 上定义入参

    - `@`

      > - 和 Vue 的 @ 语法方向相反
      > - 父作用域的参数 单向 传递到 子作用域

      这里注意观察 `initalTodoTitle`

      - 组件 `todolist` 中该属性会被更新 但是 父组件 绑定的值不会更新

      ```jsx
      // Template
      <add-todo on-addtodo="add(title)" inital-todo-title="{{initalTodoTitle}}">
        <h2>Add new todo</h2>
      </add-todo>;

      // JS
      angular.module("todolist", []).directive("addTodo", function () {
        return {
          restrict: "E",
          transclude: true,
          scope: {
            value: "@initalTodoTitle", //
            addtodo: "&onAddtodo",
          },
          templateUrl: "addTodo.html",
          controller: [
            "$scope",
            function AddTodoController($scope) {
              $scope.onClick = function () {
                $scope.addtodo({ title: $scope.value });
                $scope.value = "";
              };
            },
          ],
        };
      });
      ```

    - `=`

      > 父子作用域的属性 双向绑定

      这里注意观察 `todos`

      - 组件 `todolist` 中该属性会被更新(删除) 父组件中 绑定的该属性也随之更新

      - 直接在子组件更新状态
        - 当代前端编程 不提倡 双向绑定 :no_good_man: :no_good_woman:
        - 不应该在 子组件内操作 高层级的数据
          - 因此 我也用单向方式 在父组件更新了 todos 状态， 建议看完 `&` 后自行 实验

      :::warning
      这里是和 当代前端编程范式 有较大区别的地方！
      :::

      ```jsx
      // Template
      // remove - the vuejs way
      <!-- <todo-list todos="todos" on-removetodo="remove(id)" /> -->
      <todo-list todos="todos" />

      // JS
      angular.module("todolist", []).directive("todoList", function () {
        return {
          restrict: "E",
          scope: {
            todos: "=",
            // remove - the vuejs way
            // removetodo: "&onRemovetodo",
          },
          templateUrl: "todoList.html",
          controller: [
            "$scope",
            function TodoListController($scope) {
              // remove - the vuejs way
              // $scope.onClick = function (id) {
              //   // id 必须和 父作用域的 参数名保持一直
              //   // 尚未找到 这个 “坑” 的出处
              //   $scope.removetodo({ id });
              // };

              // enable the angularjs way with two way bindings， it is not good when it comes to modern frontend paradigm
              $scope.onClick = function (id) {
                $scope.todos = $scope.todos.filter((todo) => todo.id !== id);
              };
            },
          ],
        };
      });
      ```

  - 在 option api `scope` 上定义出参

    - `&`

    > 子作用域 调用 父作用域 传递进来的 回调方法 参数

    这里注意观察 `onAddtodo`

    - 组件入参 `onAddtodo` 映射到 组件内 变量 `addtodo`
    - 组件调用的参数 第 2 行 `on-addtodo="add(title)"` 中的 `title` 必须和 第 21 行 `$scope.addtodo({ title: $scope.value });` 中的 属性保持一致
      - 尚未找到该规则的出处 !!!

    ```jsx
    // Template
    <add-todo on-addtodo="add(title)" inital-todo-title="{{initalTodoTitle}}">
      <h2>Add new todo</h2>
    </add-todo>;
    // JS
    angular.module("todolist", []).directive("addTodo", function () {
      return {
        restrict: "E",
        transclude: true,
        scope: {
          value: "@initalTodoTitle",
          addtodo: "&onAddtodo",
        },
        templateUrl: "addTodo.html",
        controller: [
          "$scope",
          function AddTodoController($scope) {
            $scope.onClick = function () {
              // title 必须和 父作用域的 参数名保持一直
              // 尚未找到 这个 “坑” 的出处
              $scope.addtodo({ title: $scope.value });
              $scope.value = "";
            };
          },
        ],
      };
    });
    ```

## Todo List AngularJS

> 实战 代码参考

- 组件设计

  - `addTodo` 组件

  - `todoList` 组件

:::details TODO List （点击展开）

<iframe src="https://codesandbox.io/embed/004-todo-list-early-bird-0ekx62?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="004-todo-list-early-bird"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   
:::
