# client-node-monorepo-main

Nodejs でのモノレポのビルド後、main をどうするかについて。

client/ server が lib_a を読み込んでいる。それをビルド・デプロイする時の設定について

## 論点

- Docker で 1 サービスを展開する時、無駄なものを含めないようにするためにはどうすればいいか？ node_modules そのまま Docker で COPY したり yarn install するのはもったいないよね
- Node.js に ESM 読み込ませるなら tsconfig の設定どうしたらいいか. module, include, type...
  - include 指定したら main.ts を main にできなくなるよねー(.js になるから)
