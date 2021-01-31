const Controller = require('./Controller')

class IndexController extends Controller {
    constructor() {
        super()
    }
    actionIndex(ctx, next) {
        ctx.body = 'action index'
    }
}

module.exports = IndexController;