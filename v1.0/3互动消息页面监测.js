// 3互动消息页面监测.js
module.exports = {
    handleInteractionMessage: function() {
        while (true) {
            // 在互动消息页面监测
            var p4aWidgets = id("p4a").find(); // 查找所有id为p4a的控件

            console.log("找到的 p4aWidgets 数量: " + p4aWidgets.length);

            if (p4aWidgets.length > 0) {
                var foundComment = false; // 用于标记是否找到评论

                for (var i = 0; i < p4aWidgets.length; i++) {
                    var p4aWidget = p4aWidgets[i];
                    console.log("检查第 " + (i + 1) + " 个 p4aWidget");

                    var parentWidget = p4aWidget.parent();
                    console.log("parentWidget 描述: " + (parentWidget ? parentWidget.desc() : "null"));

                    if (parentWidget && parentWidget.desc() && parentWidget.desc().includes("评论")) {
                        foundComment = true; // 找到评论
                        console.log("找到包含 '评论' 的 parentWidget");

                        var replyCommentWidget = parentWidget.findOne(text("回复评论"));
                        if (replyCommentWidget) {
                            console.log("找到 '回复评论' 按钮");
                            replyCommentWidget.click();
                            sleep(5000); // 等待5秒

                            // 1. 回复评论
                            var commentInputWidget = id("com.ss.android.ugc.aweme:id/c8n").findOne(1000); // 等待1秒
                            if (commentInputWidget) {
                                console.log("找到评论输入框");
                                commentInputWidget.click();
                                sleep(5000); // 等待5秒
                                commentInputWidget.setText("已私");
                                sleep(5000); // 等待5秒

                                // 2. 发送评论
                                var sendCommentWidget = id("com.ss.android.ugc.aweme:id/c_z").findOne(1000); // 等待1秒
                                if (sendCommentWidget) {
                                    console.log("找到发送评论按钮");
                                    sendCommentWidget.click();
                                    sleep(5000); // 等待5秒
                                } else {
                                    console.log("未找到发送评论按钮");
                                }

                                // 3. 点击昵称
                                var nicknameWidget = id("com.ss.android.ugc.aweme:id/p3w").findOne(1000); // 等待1秒
                                if (nicknameWidget) {
                                    console.log("找到昵称按钮");
                                    var rect = nicknameWidget.bounds();
                                    click(rect.centerX(), rect.centerY());
                                    sleep(5000); // 等待5秒
                                } else {
                                    console.log("未找到昵称按钮");
                                }

                                // 4. 点击三个点
                                var threeDotsWidget = id("com.ss.android.ugc.aweme:id/xuw").findOne(1000); // 等待1秒
                                if (threeDotsWidget) {
                                    console.log("找到三个点按钮");
                                    var rect = threeDotsWidget.bounds();
                                    click(rect.centerX(), rect.centerY());
                                    sleep(5000); // 等待5秒
                                } else {
                                    console.log("未找到三个点按钮");
                                }

                                // 5. 点击发私信
                                var sendPrivateMessageWidget = text("发私信").findOne(1000); // 等待1秒
                                if (sendPrivateMessageWidget) {
                                    console.log("找到发私信按钮");
                                    var rect = sendPrivateMessageWidget.bounds();
                                    click(rect.centerX(), rect.centerY());
                                    sleep(5000); // 等待5秒
                                } else {
                                    console.log("未找到发私信按钮");
                                }

                                // 6. 输入私信内容
                                var appWidget = id("app").findOne(1000); // 等待1秒
                                if (!appWidget) {
                                    var sendMessageWidget = text("发送消息").findOne(1000); // 等待1秒
                                    if (sendMessageWidget) {
                                        console.log("找到发送信息按钮");
                                        sendMessageWidget.click();
                                        sleep(5000); // 等待5秒
                                        sendMessageWidget.setText("小映批量助手，qigang812");
                                        sleep(5000); // 等待5秒
                                    } else {
                                        console.log("未找到发送消息按钮");
                                    }
                                } else {
                                    console.log("找到 app 控件");
                                }

                                // 7. 点击发送私信
                                var sendButtonWidget = id("com.ss.android.ugc.aweme:id/jge").findOne(1000); // 等待1秒
                                if (sendButtonWidget) {
                                    console.log("找到发送私信按钮");
                                    var rect = sendButtonWidget.bounds();
                                    click(rect.centerX(), rect.centerY());
                                    sleep(5000); // 等待5秒
                                } else {
                                    console.log("未找到发送私信按钮");
                                }

                                // 8. 点击返回用户主页
                                var backToUserPageWidget = id("com.ss.android.ugc.aweme:id/mp9").findOne(1000); // 等待1秒
                                if (backToUserPageWidget) {
                                    console.log("找到返回用户主页按钮");
                                    var rect = backToUserPageWidget.bounds();
                                    click(rect.centerX(), rect.centerY());
                                    sleep(5000); // 等待5秒
                                } else {
                                    console.log("未找到返回用户主页按钮");
                                }

                                // 9. 点击返回互动页面
                                var backToInteractionPageWidget = id("com.ss.android.ugc.aweme:id/back_btn").findOne(1000); // 等待1秒
                                if (backToInteractionPageWidget) {
                                    console.log("找到返回互动页面按钮");
                                    var rect = backToInteractionPageWidget.bounds();
                                    click(rect.centerX(), rect.centerY());
                                    sleep(5000); // 等待5秒
                                } else {
                                    console.log("未找到返回互动页面按钮");
                                }
                            } else {
                                console.log("未找到评论输入框");
                            }
                        } else {
                            console.log("未找到 '回复评论' 按钮");
                        }
                    } else {
                        console.log("parentWidget 不包含 '评论'");
                        // 如果没有找到parentWidget并且parentWidget.descContains("评论")为false，则跳过当前循环
                        continue;
                    }
                }

                // 如果循环结束后没有找到评论，则跳出while循环
                if (!foundComment) {
                    console.log("未找到评论，跳出 while 循环");
                    break;
                }
            } else {
                console.log("未找到 id 为 p4a 的控件，跳出 while 循环");
                break;
            }
        }

        // 跳出循环后点击返回消息页面
        var backButtonWidget = id("com.ss.android.ugc.aweme:id/iv_back").findOne(1000); // 等待1秒
        if (backButtonWidget) {
            console.log("找到返回消息页面按钮");
            backButtonWidget.click();
            sleep(5000); // 等待5秒
        } else {
            console.log("未找到返回消息页面按钮");
        }
    }
};