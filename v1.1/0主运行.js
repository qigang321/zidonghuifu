// 导入模块
const douyinModule = require('./1打开抖音');
const messageMonitorModule = require('./2消息页面监测');
const interactionMessageModule = require('./3互动消息页面监测');
const privateMessageModule = require('./4私信页面监测');
const floatyModule = require('./7悬浮窗'); // 导入整个悬浮窗模块
const randomClickModule = require('./5随机点击封装.js'); // 导入随机点击封装模块

// 主运行函数
function main() {
    floatyModule.alog("脚本开始运行");

    // 1. 打开抖音并进入消息页面
    floatyModule.alog("正在打开抖音并进入消息页面...");
    douyinModule.openDouyinAndEnterMessagePage(randomClickModule.randomClick, floatyModule.alog);

    // 2. 监测消息页面并处理互动消息和私信
    floatyModule.alog("正在监测消息页面...");
    messageMonitorModule.monitorInteractions(randomClickModule.randomClick, floatyModule.alog);

    
}

// 启动主运行函数
main();