// 4私信页面监测.js
module.exports = {
    handlePrivateMessage: function() {
        // 在私信列表页面检测
        var whmWidget = id("whm").findOne(1000); // 等待1秒

        if (whmWidget) {
            while (true) {
                // 查找 className("android.widget.Button")
                var buttonWidget = whmWidget.findOne(className("android.widget.Button"));

                if (buttonWidget) {
                    // 1. 点击私信
                    console.log("点击私信");
                    buttonWidget.click();
                    sleep(5000); // 等待5秒

                    // 2. 点击确认
                    console.log("点击确认");
                    var confirmWidget = text("确认").findOne(1000); // 等待1秒
                    if (confirmWidget) {
                        confirmWidget.click();
                        sleep(5000); // 等待5秒

                        // 3. 输入回复内容
                        console.log("输入回复内容");
                        var sendMessageWidget = id("com.ss.android.ugc.aweme:id/pah").findOne(1000); // 等待1秒
                        if (sendMessageWidget) {
                            sendMessageWidget.click();
                            sleep(1000);
                            sendMessageWidget.setText("小映批量助手，qigang812");
                            sleep(5000); // 等待5秒

                            // 4. 点击发送
                            console.log("点击发送");
                            var sendButtonWidget = id("com.ss.android.ugc.aweme:id/jge").findOne(1000); // 等待1秒
                            if (sendButtonWidget) {
                                sendButtonWidget.click();
                                sleep(5000); // 等待5秒
                            }
                        }

                        // 5. 返回私信列表
                        console.log("返回私信列表");
                        var backButtonWidget = id("com.ss.android.ugc.aweme:id/mp9").findOne(1000); // 等待1秒
                        if (backButtonWidget) {
                            backButtonWidget.click();
                            sleep(5000); // 等待5秒
                        }
                    }
                } else {
                    // 如果没有找到 buttonWidget，则点击返回消息页面
                    console.log("点击返回消息页面");
                    var backButtonWidget = id("com.ss.android.ugc.aweme:id/mp9").findOne(1000); // 等待1秒
                    if (backButtonWidget) {
                        backButtonWidget.click();
                        sleep(5000); // 等待5秒
                    }
                    break; // 退出循环
                }
            }
        } else {
            console.log("未找到 whm 控件");
        }
    }
};