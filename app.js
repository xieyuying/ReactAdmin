const koa = require('koa');
const config = require('./config')
const initController = require('./controllers/index');
console.log(initController)
const app = new koa()

// app.use((ctx) => {
//     ctx.body = 'hello worldddd'
// });
initController(app);

app.listen(config.port, () => {
    console.log(`sever is running: ${config.port}`)
})