# Tips

## 代码迁移

- 把代码推送到新的 Origin

```shell
cd existing_repo
git remote rename origin old-origin
git remote add origin git@newgitlab.digitalchina.com:very-frontend/existing-git-folder.git
git push -u origin --all
git push -u origin --tags

```

- 删除 Old Origin

```shell
git remote remove old-origin
```
