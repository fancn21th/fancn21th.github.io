# Next

[React](https://reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains) 官方网站给出了 `Next` 的推荐建议。 但是 `Next` 的野心不仅如此。 它和它的竞品 `Gatsby` 和 `Remix` 在目的上有高度的重叠，在实现上有不同的 `哲学`

::: tip

If you’re building a server-rendered website with Node.js, try Next.js.

如果你要做 SSR （服务端渲染）你可以试试 `Next`

:::

## Dev Env Setup

- create-next-app

## Navigation

- HTML A Tag

  - Reload Page

- Link Component

  - Not Reload

  ```tsx
  import Link from "next/link";
  ```

## Dynamic Page

- useRouter hook

  ```tsx
  import { useRouter } from "next/router";

  // ... FC

  const router = useRouter();
  const { sameAsFileName } = router.query;
  ```

### Static Files

- public folder

## Image Component

> Key Feature with Performance Optimization

- local image
- remote image
  - config is necessary

## Head Component

> same as Helmet component in other framework like `Gatsby`

- Head

  ```tsx
  import Head from "next/head";
  ```

  - avoid duplication
    - key

## App Component

- `_app.tsx`

> similar with index.tsx in other framework

```tsx
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* The Component is Page Component */}
      <Component {...pageProps} />
    </div>
  );
}
```

## Document Component

- `_document.tsx`

  - running in server side

```tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

## CSS

### App Level

- add css into `_app.tsx`

### Component Level

- css module

  - common css grammar
  - use as object literal

### Inline Level

- css in js

  ```tsx
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      rowGap: "24px",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Button />
  </div>
  ```

## Layout

### App Level

- common layout component
  - injected into `_app.tsx`

### Page Level

- `getLayout` method

> this is not official way

```tsx
import type { ReactNode } from "react";
import { Heading } from "@chakra-ui/react";

import Layout from "../src/components/layout";

const Home = () => {
  return (
    <Heading w="full" textAlign="center">
      This is our homepage content!
    </Heading>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Home;
```

- `getLayout` method invoked in `_app.tsx`

```tsx
import type { ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

// import the custom layout
import Layout from "../src/components/layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // ✍️ wrap the Component with the custom layout
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    {getLayout(<Component {...pageProps} />)}
  );
};

export default App;
```
