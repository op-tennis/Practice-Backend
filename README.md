# op-tennis/Practice-Backend

## 開発環境を作成する

1. node.jsの21.x系をインストールする  
   ※ asdf推奨

   ```sh
   asdf local nodejs 21.7.3

   node -v
   v21.7.3
   ```

2. `node_modules`をインストールする  

   ```sh
   rm -rf node_modules && rm -f package-lock.json
   npm i
   ```

3. サーバーを立ち上げる  

   - Dockerイメージの作成し、コンテナを起動する
     ```sh
     colima start
     docker-compose build
     docker-compose up
     ```

   - サーバーを立ち上げる
     ```sh
     npm run dev

     # 下記の場合でも実行可能
     npx ts-node-dev --respawn src/app.ts
     ```
