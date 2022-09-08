# Trick

## copy into clipboard

用 `curl` 命令调用一个 Restfull API 然后拷贝到 操作系统 剪切板

```shell
curl -X GET 'https://....' -H 'accept: application/json' -H 'Authorization: Bearer ...' | pbcopy
```

## how to require a pure EMS module

[See this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
