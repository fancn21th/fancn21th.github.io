# React Antd Lite

搭建一个 `小而美` 的 脚手架 :lying_face: 。 基于 [Antd](https://ant.design/docs/react/introduce-cn) 但是不依赖于其他 `Ant` 生态。

## Step 0

vite 打底

```shell
pnpm create vite
```

## Step 1

[Antd](https://ant.design/docs/react/introduce-cn) 集成

```shell
pnpm install antd
```

- `main.jsx`

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
