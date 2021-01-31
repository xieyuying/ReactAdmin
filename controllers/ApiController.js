const Controller = require('./Controller')

class ApiController extends Controller {
    constructor() {
        super()
    }
    actionDataList(ctx, next) {
        ctx.body = [
            {
                id: 1,
                data: 2
            }
        ]
    }
}

module.exports = ApiController;