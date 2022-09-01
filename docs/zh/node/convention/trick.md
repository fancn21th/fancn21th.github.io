# Trick

## copy into clipboard

用 `curl` 命令调用一个 Restfull API 然后拷贝到 操作系统 剪切板

```shell
curl -X GET 'https://....' -H 'accept: application/json' -H 'Authorization: Bearer ...' | pbcopy
```
