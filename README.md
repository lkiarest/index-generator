# index-generator
在服务器上生成静态文件目录索引，灵活控制索引列表

### 环境要求

服务器需要安装 nodejs。

### 启动服务

首先需要上传源码中的 js 文件到服务器，拷贝到需要索引的根目录中，然后使用 node 启动：

```
node server.js # 测试服务

nohup node server.js & # 后台进程

pm2 start server.js # 使用 pm2 管理服务
```

### 特殊场景

如果服务器位于内网，只安装了 node，无法执行 npm 安装其他工具包，则需要本地打包之后上传到服务器执行：

```
yarn build # 会生成 app.js 文件，上传此文件到服务器
node app.js # 各种启动方式同上
```

### 创建/更新索引

```
curl http://host:5001/update
```

### 清除生成的索引文件，恢复默认状态

```
curl http://host:5001/clear
```
