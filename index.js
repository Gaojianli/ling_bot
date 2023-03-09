const {
    ProcessText,
    RandomLing
} = require("./handler")
const {
    Telegraf
} = require('telegraf');
const {
    message
} = require('telegraf/filters');
const {
    Application,
    Router
} = require('@cfworker/web');
const createTelegrafMiddleware = require('cfworker-middleware-telegraf');


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


const bot = new Telegraf(self.BOT_TOKEN);

// Your code here, but do not `bot.launch()`
// Do not forget to set environment variables BOT_TOKEN and SECRET_PATH on your worker
bot.on(message("text"), ctx => ctx.reply("这是一个inline bot，输入 @ling_lang_bot 以使用"));
bot.on('inline_query', async (ctx) => {
    const result = [];
    let query = ctx.inlineQuery.query;
    if (!query) {
        const text = RandomLing()
        result.push({
            type: "article",
            id: hash(text),
            title: "随机一淋",
            description: "随机一淋",
            input_message_content: {
                message_text: text
            },
        })
    } else {
        const newText = ProcessText(query)
        result.push({
            type: "article",
            id: hash(query),
            title: "啾咪",
            description: newText,
            input_message_content: {
                message_text: newText
            },
        })
    }
    // Using context shortcut
    await ctx.answerInlineQuery(result, {
        cache_time: 0
    });
});

const router = new Router();
router.post(`/${self.SECRET_PATH}`, createTelegrafMiddleware(bot));
new Application().use(router.middleware).listen();