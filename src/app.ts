import express from 'express'

// テスト用の処理
// Serverのテストが完成したら削除する
const a: number = 1
const b: number = 2

export function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(a, b)); // 3


const app: express.Express = express()
const port: number = 8080;

// CORSの許可
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
const router: express.Router = express.Router()
app.get('/', (req:express.Request, res:express.Response) => {
    res.send('Hello, world!');
});
app.use(router)

// APIサーバ起動
app.listen(port,()=>{ console.log('Example app listening on port 8080!') })
