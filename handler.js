const processMap = {
    "xs": "笑死",
    "死": "鼠",
    "！": "噜！",
    "了": "惹",
    "谢": "靴",
    "真是": "珍素",
    "夭寿": "妖兽",
}

// 修复错误
const fixedMap = {
    "鼠惹": "鼠了",
    "惹噜": "噜"
}

module.exports = {
    ProcessText: text => {
        for (let key in processMap) {
            text = text.replaceAll(key, processMap[key])
        }
        for (let key in fixedMap) {
            text = text.replaceAll(key, fixedMap[key])
        }
        return text
    }
}