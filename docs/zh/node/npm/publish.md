# Publish

## Sematic Versioning with Npm Command

无需手动修改 `package.json`

- major

  ```shell
  npm version major
  ```

- minor

  ```shell
  npm version minor
  ```

- patch

  ```shell
  npm version patch
  ```

- more

  ```shell
  npm help version
  ```

## Scoped Package

当你发布的 `npm` 包 `name` 和其他人的包 冲突。 你可以用 `scoped package` 方式命名。

```js
// package.json
{
  "name": "@npm-account-name/package-name",
  "version": "0.0.1",
  "bin": {
    "command-name": "index.js"
  }
}

```

- 发布

  这时候你执行以下命令来发布。

  :::warning
  如果直接执行 `npm publish` 会得到 必须是付费会员的警告， 因为 `scoped package` 默认是私有的。 私有 package 必须是付费会员才能发布。
  :::

  ```shell
  npm publish --access public
  ```
