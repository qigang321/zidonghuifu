// 2消息页面监测.js
module.exports = {
    monitorInteractions: function() {
        var homePressed = false;
        var loopDuration = 15000; // 15秒
        var startTime = new Date().getTime();
        var interactionInProgress = false; // 标记是否正在处理互动消息

        while (true) {
            // 监测互动消息
            console.log("开始监测互动消息...");
            var interactionWidget = descContains("互动消息").className("android.widget.Button").findOne(1000); // 等待1秒
            if (interactionWidget) {
                console.log("找到互动消息控件");
                var redTipsCountView = interactionWidget.findOne(id("com.ss.android.ugc.aweme:id/red_tips_count_view"));
                if (redTipsCountView && parseInt(redTipsCountView.text()) > 0) {
                    console.log("互动消息有未读消息，等待2秒...");
                    sleep(2000); // 等待2秒
                    var rect = interactionWidget.bounds();
                    click(rect.centerX(), rect.centerY());
                    toast("点击了互动消息控件");
                    console.log("点击了互动消息控件，等待5秒...");
                    sleep(5000); // 等待5秒
                    interactionInProgress = true; // 标记正在处理互动消息
                    handleInteractionMessage(); // 处理互动消息
                    console.log("处理完互动消息");
                    interactionInProgress = false; // 标记处理互动消息完成
                } else {
                    console.log("互动消息没有未读消息");
                }
            } else {
                console.log("未找到互动消息控件");
            }

            // 监测私信
            console.log("开始监测私信...");
            var privateMessageWidget = text("陌生人消息").findOne(1000); // 等待1秒
            if (privateMessageWidget) {
                console.log("找到陌生人消息控件，等待2秒...");
                sleep(2000); // 等待2秒
                var parentWidget = privateMessageWidget.parent();
                if (parentWidget) {
                    var rect = parentWidget.bounds();
                    click(rect.centerX(), rect.centerY());
                    toast("点击了陌生人消息的父控件");
                    console.log("点击了陌生人消息的父控件，处理私信...");
                    interactionInProgress = true; // 标记正在处理私信
                    handlePrivateMessage();
                    console.log("处理完私信");
                    interactionInProgress = false; // 标记处理私信完成
                } else {
                    console.log("未找到陌生人消息的父控件");
                }
            } else {
                console.log("未找到陌生人消息控件");
            }

            // 检测并点击 "稍后" 控件
            console.log("开始检测稍后控件...");
            var laterWidget = text("稍后").findOne(1000); // 等待1秒
            if (laterWidget) {
                console.log("找到稍后控件，点击...");
                interactionInProgress = true; // 标记正在处理稍后控件
                laterWidget.click();
                sleep(2000); // 等待2秒
                console.log("点击稍后控件完成");
                interactionInProgress = false; // 标记处理稍后控件完成
            } else {
                console.log("未找到稍后控件");
            }

            // 检测并点击 "稍后提醒我" 控件
            console.log("开始检测稍后提醒我控件...");
            var remindMeLaterWidget = text("稍后提醒我").findOne(1000); // 等待1秒
            if (remindMeLaterWidget) {
                console.log("找到稍后提醒我控件，点击...");
                interactionInProgress = true; // 标记正在处理稍后提醒我控件
                remindMeLaterWidget.click();
                sleep(2000); // 等待2秒
                console.log("点击稍后提醒我控件完成");
                interactionInProgress = false; // 标记处理稍后提醒我控件完成
            } else {
                console.log("未找到稍后提醒我控件");
            }

            // 检查是否达到15秒
            var currentTime = new Date().getTime();
            if (!interactionInProgress && currentTime - startTime >= loopDuration) {
                console.log("等待15秒后返回手机桌面...");
                home(); // 返回手机桌面
                homePressed = true;
                console.log("已返回手机桌面，等待5秒...");
                sleep(5000); // 等待5秒

                console.log("开始查找抖音控件...");
                var douyinWidget = desc("抖音").findOne(1000); // 等待1秒
                if (douyinWidget) {
                    console.log("找到抖音控件，点击...");
                    douyinWidget.click();
                } else {
                    console.log("未找到desc为抖音的控件");
                    toast("未找到desc为抖音的控件");
                    exit();
                }

                homePressed = false;
                console.log("已重新打开抖音");
                startTime = new Date().getTime(); // 重置开始时间
            }

            // 等待3秒后继续监测
            console.log("等待3秒后继续监测...");
            sleep(3000);
        }
    }
};