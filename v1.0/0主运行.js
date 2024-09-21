// main.js

// 导入模块
const douyinModule = require('./1打开抖音');
const messageMonitorModule = require('./2消息页面监测');
const interactionMessageModule = require('./3互动消息页面监测');
const privateMessageModule = require('./4私信页面监测');

// 主运行函数
function main() {
    // 1. 打开抖音并进入消息页面
    douyinModule.openDouyinAndEnterMessagePage();

    // 2. 监测消息页面并处理互动消息和私信
    messageMonitorModule.monitorInteractions();
}

// 启动主运行函数
main();