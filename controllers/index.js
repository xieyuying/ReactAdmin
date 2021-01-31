const Router = require('@koa/router')
const router = new Router()

const IndexController = require('./IndexController')
const ApiController = require('./ApiController')

const indexController = new IndexController()
const apiController = new ApiController()


function initController(app) {
    // router.get('/', (ctx, next) => {
    //     ctx.body = 'holll'
    // })
    router.get('/', indexController.actionIndex);
    router.get('/getDataList', apiController.actionDataList);
    app
        .use(router.routes())
        .use(router.allowedMethods());
}

module.exports = initController;