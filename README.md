# client-node-monorepo-main

Nodejs でのモノレポのビルド後、main をどうするかについて。

## 論点

- Docker で 1 サービスを展開する時、無駄なものを含めないようにするためにはどうすればいいか？
- Node.js に ESM 読み込ませるなら tsconfig の設定どうしたらいいか. module, include, type...
