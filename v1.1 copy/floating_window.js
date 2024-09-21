// 创建滚动悬浮窗
var logWindow = floaty.rawWindow(
    <frame bg='#88000000' w="500" h="100">  
        <scroll id="scroll" w="match_parent" h="match_parent">
            <text id="text" textSize="16sp" textColor="#FFFFFF" />
        </scroll>
    </frame>
);

// 设置悬浮窗不可点击
logWindow.setTouchable(false);

// 设置悬浮窗的位置
logWindow.setPosition(0, 1000); 

// 当脚本结束时关闭悬浮窗
logWindow.exitOnClose();

// 对控件的操作需要在ui线程中执行
function alog(message) {
    ui.run(function(){
        // 增加文本并换行显示
        logWindow.text.append(message + "\n");
        // 一直显示最新的文本
        logWindow.scroll.scrollTo(0, logWindow.text.getHeight());
    });
}

// 保持悬浮窗持续运行
setInterval(() => {
    // 你可以在这里添加一些代码来保持悬浮窗的活动状态
}, 1000); // 每秒执行一次

// 创建新的悬浮窗来显示按钮
var buttonWindow = floaty.rawWindow(
    <frame>
        <button id="stopButton" text="停止" padding="5" w="50" h="30"  textSize="13sp" textColor="#000000" bg="#FF0000"/>
    </frame>
);

// 设置悬浮窗可点击
buttonWindow.setTouchable(true);

// 设置悬浮窗的位置
buttonWindow.setPosition(900, 1300); // 调整位置以避免遮挡日志悬浮窗

// 设置停止按钮的点击事件
buttonWindow.stopButton.click(function() {
    toast("脚本已停止");
    exit(); // 停止脚本运行
});

module.exports = {
    alog: alog
};