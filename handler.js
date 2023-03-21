const processMap = {
    "xs": "笑死",
    "死": "鼠",
    "！": "噜！",
    "了": "惹",
    "谢": "靴",
    "好！": "厚！",
    "哈": "厚",
    "真是": "珍素",
    "夭寿": "妖兽",
    "哭": "CRY",
    "嘻嘻": "吸吸",
    "大胆": "big胆",
    "好开心": "豪嗨心",
    "喜欢": "洗翻",
}

// 修复错误
const fixedMap = {
    "惹噜": "噜",
    "鼠惹": "鼠了",
    "厚噜！": "厚！"
}

const lingLibary = [
    "那些路人甲们，凭什么发言惹人讨厌",
    "走钢索惹！",
    "去逛美丽旗舰店噜！",
    "我需要喝口恒河水提提神",
    "闭嘴惊艳！",
    "不努力，你也配做花蝴蝶！",
    "暧昧只是小前戏",
    "周末没事，不如打扮成花蝴蝶，一起出去骚动趴体啊～",
    "清者自清",
    "努力一定会成功，不努力就去鼠",
    "捕捉爱的小游戏。",
    "别当壁花和壁树。",
    "你怎么话都说不清楚。",
    "那画面太美我不敢看。",
    "莫名其妙就怀孕。",
    "那些令人刺耳的声音，我不听",
    "我要洗心革面。",
    "傻傻分不清楚",
    "我不是天才是地才。",
    "冰冻全场焦点。",
    "凌晨一点的无邪浪荡睡衣姐妹会。",
    "时光的沙漏被我踩碎",
    "寄出爱的明信片",
    "是谁的眼神锁定我",
    "捕捉爱的小游戏",
    "新鲜 改变 再见",
    "没有被你骚鼠，我命大也鼠了"
]


module.exports = {
    ProcessText: text => {
        for (let key in processMap) {
            text = text.replaceAll(key, processMap[key])
        }
        for (let key in fixedMap) {
            text = text.replaceAll(key, fixedMap[key])
        }
        return text
    },
    RandomLing: () => {
        return lingLibary[Math.floor(Math.random() * lingLibary.length)]
    }
}
