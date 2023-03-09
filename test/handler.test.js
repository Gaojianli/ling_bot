const assert = require("assert")
const {
    ProcessText
} = require("../handler")

const testCases = {
    "xs": "笑鼠",
    "不努力就去死": "不努力就去鼠",
    "天啦！": "天啦噜！",
    "我考上了": "我考上惹",
    "谢谢": "靴靴",
    "我真的会谢": "我真的会靴",
    "真是谢谢了": "珍素靴靴惹"
}

// 特殊情况
const testCases2 = {
    "死了": "鼠了",
    "夭寿了！": "妖兽噜！"
}
describe("ProcessText", () => {
    describe("一般路人甲", () => {
        for (let key in testCases) {
            it(`${key}:${testCases[key]}`, () => {
                assert.strictEqual(ProcessText(key), testCases[key])
            })
        }
    })

    describe("特殊情况", () => {
        for (let key in testCases2) {
            it(`${key}:${testCases2[key]}`, () => {
                assert.strictEqual(ProcessText(key), testCases2[key])
            })
        }
    })
})