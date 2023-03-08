const bot = require("./bot")
const {
    Application,
    Router
} = require('@cfworker/web');
const process = require("process")
const createTelegrafMiddleware = require('cfworker-middleware-telegraf');


const router = new Router();
router.post(`/${process.env.SECRET_PATH}`, createTelegrafMiddleware(bot));
new Application().use(router.middleware).listen();