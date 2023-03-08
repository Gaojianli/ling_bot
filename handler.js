const processMap = {
    "xs": "笑死",
    "死": "鼠",
    "了": "惹",
    "！": "噜！",
    "谢": "靴",
    "真是": "真素",
    "鼠惹": "鼠了"
}

module.exports = {
    ProcessText: text => {
        for (let key in processMap) {
            text = text.replaceAll(key, processMap[key])
        }
        return text
    }
}