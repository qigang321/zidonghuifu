// 4私信页面监测.js

var storage = storages.create("my_storage");

module.exports = {
    handlePrivateMessage: function(randomClick, alog) {
        // 在私信列表页面检测
        var whmWidget = id("whm").findOne(1000); // 等待1秒

        if (whmWidget) {
            while (true) {
                // 查找 className("android.widget.Button")
                var buttonWidget = whmWidget.findOne(className("android.widget.Button"));

                if (buttonWidget) {
                    // 1. 点击私信
                    alog("点击私信");
                    randomClick(buttonWidget); // 使用随机点击
                    var delay = getRandomDelay();
                    sleep(delay); // 使用随机延时
                    alog("等待 " + delay / 1000 + " 秒");

                    // 2. 点击确认
                    alog("点击确认");
                    var confirmWidget = text("确认").findOne(1000); // 等待1秒
                    if (confirmWidget) {
                        randomClick(confirmWidget); // 使用随机点击
                        var delay = getRandomDelay();
                        sleep(delay); // 使用随机延时
                        alog("等待 " + delay / 1000 + " 秒");

                        // 3. 输入回复内容
                        alog("输入回复内容");
                        var sendMessageWidget = id("com.ss.android.ugc.aweme:id/pah").findOne(1000); // 等待1秒
                        if (sendMessageWidget) {
                            randomClick(sendMessageWidget); // 使用随机点击
                            sleep(1000);
                            sendMessageWidget.setText(storage.get("privateMessage", "默认私信话术"));
                            var delay = getRandomDelay();
                            sleep(delay); // 使用随机延时
                            alog("等待 " + delay / 1000 + " 秒");

                            // 4. 点击发送
                            alog("点击发送");
                            var sendButtonWidget = id("com.ss.android.ugc.aweme:id/jge").findOne(1000); // 等待1秒
                            if (sendButtonWidget) {
                                randomClick(sendButtonWidget); // 使用随机点击
                                var delay = getRandomDelay();
                                sleep(delay); // 使用随机延时
                                alog("等待 " + delay / 1000 + " 秒");
                            }
                        }

                        // 5. 返回私信列表
                        alog("返回私信列表");
                        var backButtonWidget = id("com.ss.android.ugc.aweme:id/mp9").findOne(1000); // 等待1秒
                        if (backButtonWidget) {
                            randomClick(backButtonWidget); // 使用随机点击
                            var delay = getRandomDelay();
                            sleep(delay); // 使用随机延时
                            alog("等待 " + delay / 1000 + " 秒");
                        }
                    }
                } else {
                    // 如果没有找到 buttonWidget，则点击返回消息页面
                    alog("点击返回消息页面");
                    var backButtonWidget = id("com.ss.android.ugc.aweme:id/mp9").findOne(1000); // 等待1秒
                    if (backButtonWidget) {
                        randomClick(backButtonWidget); // 使用随机点击
                        var delay = getRandomDelay();
                        sleep(delay); // 使用随机延时
                        alog("等待 " + delay / 1000 + " 秒");
                    }
                    break; // 退出循环
                }
            }
        } else {
            alog("未找到 whm 控件");
        }
    }
};

// 获取随机延时
function getRandomDelay() {
    var minDelay = parseInt(storage.get("operationDelayMin", 1));
    var maxDelay = parseInt(storage.get("operationDelayMax", 5));
    return random(minDelay, maxDelay) * 1000; // 转换为毫秒
}