var storage = storages.create("my_storage");

module.exports = {
    monitorInteractions: function(randomClick, alog) {
        var homePressed = false;
        var returnDesktopTimeMin = parseInt(storage.get("returnDesktopTimeMin", "15"));
        var returnDesktopTimeMax = parseInt(storage.get("returnDesktopTimeMax", "30"));
        var loopDuration = random(returnDesktopTimeMin, returnDesktopTimeMax) * 1000; // 转换为毫秒
        var startTime = new Date().getTime();
        var interactionInProgress = false; // 标记是否正在处理互动消息

        // 启动监测互动消息和私信的线程
        threads.start(function() {
            while (true) {
                // 监测互动消息
                var interactionWidget = descContains("互动消息").className("android.widget.Button").findOne(1000); // 等待1秒
                if (interactionWidget) {
                    var redTipsCountView = interactionWidget.findOne(id("com.ss.android.ugc.aweme:id/red_tips_count_view"));
                    if (redTipsCountView && parseInt(redTipsCountView.text()) > 0) {
                        alog("互动消息有未读消息，等待2秒...");
                        sleep(2000); // 等待2秒
                        randomClick(interactionWidget); // 使用随机点击
                        toast("点击了互动消息控件");
                        alog("点击了互动消息控件，等待5秒...");
                        sleep(5000); // 等待5秒
                        interactionInProgress = true; // 标记正在处理互动消息
                        interactionMessageModule.handleInteractionMessage(randomClick, alog); // 调用 handleInteractionMessage
                        alog("处理完互动消息");
                        interactionInProgress = false; // 标记处理互动消息完成
                    } else {
                        
                    }
                }

                // 监测私信
                var privateMessageWidget = text("陌生人消息").findOne(1000); // 等待1秒
                if (privateMessageWidget) {
                    alog("找到陌生人消息控件，等待2秒...");
                    sleep(2000); // 等待2秒
                    var parentWidget = privateMessageWidget.parent();
                    if (parentWidget) {
                        randomClick(parentWidget); // 使用随机点击
                        toast("点击了陌生人消息的父控件");
                        alog("点击了陌生人消息的父控件，处理私信...");
                        interactionInProgress = true; // 标记正在处理私信
                        privateMessageModule.handlePrivateMessage(randomClick, alog);
                        alog("处理完私信");
                        interactionInProgress = false; // 标记处理私信完成
                    } else {
                        alog("未找到陌生人消息的父控件");
                    }
                }

                // 检查是否达到用户设置的时间区间
                var currentTime = new Date().getTime();
                if (!interactionInProgress && currentTime - startTime >= loopDuration) {
                    alog("等待" + (loopDuration / 1000) + "秒后返回手机桌面...");
                    home(); // 返回手机桌面
                    homePressed = true;
                    alog("已返回手机桌面，等待5秒...");
                    sleep(5000); // 等待5秒

                    alog("开始查找抖音控件...");
                    var douyinWidget = desc("抖音").findOne(1000); // 等待1秒
                    if (douyinWidget) {
                        alog("找到抖音控件，点击...");
                        randomClick(douyinWidget); // 使用随机点击

                        // 使用 while 循环检测是否已进入抖音页面
                        var success = false;
                        while (!success) {
                            var rootView = id("root_view").findOne(1000); // 等待1秒
                            if (rootView) {
                                
                                success = true;
                            } else {
                                alog("未进入抖音，重新点击抖音控件");
                                randomClick(douyinWidget); // 使用随机点击
                                sleep(2000); // 等待2秒
                            }
                        }
                    } else {
                        alog("未找到desc为抖音的控件");
                        toast("未找到desc为抖音的控件");
                        exit();
                    }

                    homePressed = false;
                    alog("已重新打开抖音");
                    startTime = new Date().getTime(); // 重置开始时间
                    loopDuration = random(returnDesktopTimeMin, returnDesktopTimeMax) * 1000; // 重新生成随机时间
                }

                // 等待2秒后继续监测
                sleep(2000);
                alog("暂无新消息");
            }
        });

        // 启动检测并点击 "稍后" 控件和 "稍后提醒我" 控件的线程
        threads.start(function() {
            while (true) {
                // 检测并点击 "稍后" 控件
                var laterWidget = text("稍后").findOne(1000); // 等待1秒
                if (laterWidget) {
                    alog("找到稍后控件，点击...");
                    interactionInProgress = true; // 标记正在处理稍后控件
                    randomClick(laterWidget); // 使用随机点击
                    sleep(2000); // 等待2秒
                    alog("点击稍后控件完成");
                    interactionInProgress = false; // 标记处理稍后控件完成
                }

                // 检测并点击 "稍后提醒我" 控件
                var remindMeLaterWidget = text("稍后提醒我").findOne(1000); // 等待1秒
                if (remindMeLaterWidget) {
                    alog("找到稍后提醒我控件，点击...");
                    interactionInProgress = true; // 标记正在处理稍后提醒我控件
                    randomClick(remindMeLaterWidget); // 使用随机点击
                    sleep(2000); // 等待2秒
                    alog("点击稍后提醒我控件完成");
                    interactionInProgress = false; // 标记处理稍后提醒我控件完成
                }

                // 等待3秒后继续监测
                sleep(3000);
            }
        });
    }
};