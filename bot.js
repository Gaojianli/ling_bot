const {
    ProcessText
} = require("./handler")
const {
    Telegraf
} = require('telegraf');
const {
    message
} = require('telegraf/filters');

function hash(str) {
    var hash = 0,
        i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}


const bot = new Telegraf(process.env.BOT_TOKEN);

// Your code here, but do not `bot.launch()`
// Do not forget to set environment variables BOT_TOKEN and SECRET_PATH on your worker
bot.on(message("text"), ctx => ctx.reply("输入 @ling_lang_bot 以使用"));
bot.on('inline_query', async (ctx) => {
    let query = ctx.inlineQuery.query;
    if (!query) {
        query = "不努力就去死"
    }
    const result = [];
    result.push({
        type: "article",
        id: hash(query),
        title: "啾咪",
        description: ProcessText(query),
        input_message_content: {
            message_text: ProcessText(query)
        },
    })
    // Using context shortcut
    await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
});

module.exports = bot