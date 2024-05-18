console.log("Hello, world!");

class Test {
    // プロパティ
    leftSide: number;
    rightSide: number;

    // コンストラクタ
    constructor(leftSide: number, rightSide: number) {
        this.leftSide = leftSide;
        this.rightSide = rightSide;
    }

    // メソッド
    logLeftSide() {
        console.log(this.leftSide);
    }

    logRightSide() {
        console.log(this.rightSide);
    }
}

const calculation = new Test(1, 2);
calculation.logLeftSide(); // 1
calculation.logRightSide(); // 2

const a: number = 1
const b: number = 2

export function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(a, b)); // 3
