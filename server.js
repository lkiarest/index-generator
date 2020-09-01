const Koa = require('koa')
const path = require('path')
const { run, clear } = require('./index')

const app = new Koa()

app.use(async (ctx) => {
  if (ctx.path === '/update') {
    run(path.join(__dirname, '.'))
    ctx.body = '已成功刷新文件索引'
  } else if (ctx.path === '/clear') {
    clear(path.join(__dirname, '.'))
    ctx.body = '索引文件已清除'
  }
})

app.listen(5001, () => {
  console.log('服务启动成功')
})
