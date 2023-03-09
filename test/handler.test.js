const assert = require("assert")
const {
    ProcessText,
    RandomLing
} = require("../handler")

const testCases = {
    "xs": "笑鼠",
    "不努力就去死": "不努力就去鼠",
    "天啦！": "天啦噜！",
    "我考上了": "我考上惹",
    "谢谢": "靴靴",
    "我真的会谢": "我真的会靴",
    "真是谢谢了": "珍素靴靴惹",
    "嘻嘻，你在等死": "吸吸，你在等鼠",
    "笑哭了": "笑CRY惹",
    "大胆": "big胆",
    "好开心": "豪嗨心",
    "喜欢": "洗翻"
}

// 特殊情况
const testCases2 = {
    "死了": "鼠了",
    "夭寿了！": "妖兽噜！",
    "哈哈哈，今天又赚了！": "厚厚厚，今天又赚噜！"
}
describe("ProcessText", () => {
    describe("一般路人甲", () => {
        for (let key in testCases) {
            it(`${key}->${testCases[key]}`, () => {
                assert.strictEqual(ProcessText(key), testCases[key])
            })
        }
    })

    describe("特殊情况", () => {
        for (let key in testCases2) {
            it(`${key}->${testCases2[key]}`, () => {
                assert.strictEqual(ProcessText(key), testCases2[key])
            })
        }
    })
})

describe("RandomLing", () => {
    it("随机返回10句淋", () => {
        for (let i = 0; i < 10; i++) {
            console.log(RandomLing())
        }
    })
})