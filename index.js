const swc = require("@swc/core");
const fs = require('fs')

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'))
module.exports = {
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest", { ...config }],
    },
    testEnvironment: 'node',
};

// 第一引数には対象のソースコードを与えます。
// 第二引数には対象のコードが書かれたファイル名やsourcemapを作成することやminifyを行うか否かなどの設定を書きます。
// jscはswcの設定です。結果はPromise<Output>が返されます。このように作成したファイルをnode index.jsで実行するとトランスパイルされたファイルと結果が得られます。
swc
    .transform("src/app.ts", {
        filename: 'app.ts',
        sourceMaps: true,
        minify: true,

        jsc: {
        parser: {
            syntax: "ecmascript",
        },
        transform: {},
        minify: {
            compress: {
            unused: true
            },
            mangle: true,
        },
        },
    })
    .then((output) => {
        console.log(output);
    }
);

// 第一引数には対象のソースコードを与えます。
// 第二引数には設定を記述します。
swc
    .parse("src/app.ts", {
        syntax: "ecmascript",
        comments: false,
        script: true,

        target: "es2022",

    })
    .then((module) => {
        console.log(module);
        console.log(module.body[0]);
    }
);
