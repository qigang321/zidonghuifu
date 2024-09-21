// 3互动消息页面监测.js
var storage = storages.create("my_storage");

module.exports = {
    handleInteractionMessage: function(randomClick, alog) {
        while (true) {
            // 在互动消息页面监测
            var p4aWidgets = id("p4a").find(); // 查找所有id为p4a的控件

            if (p4aWidgets.length > 0) {
                var foundComment = false; // 用于标记是否找到评论

                for (var i = 0; i < p4aWidgets.length; i++) {
                    var p4aWidget = p4aWidgets[i];
                    var parentWidget = p4aWidget.parent();

                    if (parentWidget && parentWidget.desc() && parentWidget.desc().includes("评论")) {
                        foundComment = true; // 找到评论
                        alog("找到新的评论");

                        var replyCommentWidget = parentWidget.findOne(text("回复评论"));
                        if (replyCommentWidget) {
                            alog("找到 '回复评论' 按钮");
                            randomClick(replyCommentWidget); // 使用随机点击
                            var delay = getRandomDelay();
                            sleep(delay); // 使用随机延时
                            alog("等待 " + delay / 1000 + " 秒");

                            // 1. 回复评论
                            var commentInputWidget = id("com.ss.android.ugc.aweme:id/c8n").findOne(1000); // 等待1秒
                            if (commentInputWidget) {
                                alog("找到评论输入框");
                                randomClick(commentInputWidget); // 使用随机点击
                                var delay = getRandomDelay();
                                sleep(delay); // 使用随机延时
                                alog("等待 " + delay / 1000 + " 秒");
                                commentInputWidget.setText(storage.get("commentContent", "默认评论内容"));
                                var delay = getRandomDelay();
                                sleep(delay); // 使用随机延时
                                alog("等待 " + delay / 1000 + " 秒");

                                // 2. 发送评论
                                var sendCommentWidget = id("com.ss.android.ugc.aweme:id/c_z").findOne(1000); // 等待1秒
                                if (sendCommentWidget) {
                                    alog("找到发送评论按钮");
                                    randomClick(sendCommentWidget); // 使用随机点击
                                    var delay = getRandomDelay();
                                    sleep(delay); // 使用随机延时
                                    alog("等待 " + delay / 1000 + " 秒");
                                } else {
                                    alog("未找到发送评论按钮");
                                }

                                // 3. 点击昵称
                                var nicknameWidget = id("com.ss.android.ugc.aweme:id/p3w").findOne(1000); // 等待1秒
                                if (nicknameWidget) {
                                    alog("找到昵称按钮");
                                    randomClick(nicknameWidget); // 使用随机点击
                                    var delay = getRandomDelay();
                                    sleep(delay); // 使用随机延时
                                    alog("等待 " + delay / 1000 + " 秒");
                                } else {
                                    alog("未找到昵称按钮");
                                }

                                // 4. 点击三个点
                                var threeDotsWidget = id("com.ss.android.ugc.aweme:id/xuw").findOne(1000); // 等待1秒
                                if (threeDotsWidget) {
                                    alog("找到三个点按钮");
                                    randomClick(threeDotsWidget); // 使用随机点击
                                    var delay = getRandomDelay();
                                    sleep(delay); // 使用随机延时
                                    alog("等待 " + delay / 1000 + " 秒");
                                } else {
                                    alog("未找到三个点按钮");
                                }

                                // 5. 点击发私信
                                var sendPrivateMessageWidget = text("发私信").findOne(1000); // 等待1秒
                                if (sendPrivateMessageWidget) {
                                    alog("找到发私信按钮");
                                    randomClick(sendPrivateMessageWidget); // 使用随机点击
                                    var delay = getRandomDelay();
                                    sleep(delay); // 使用随机延时
                                    alog("等待 " + delay / 1000 + " 秒");
                                } else {
                                    alog("未找到发私信按钮");
                                }

                                // 6. 输入私信内容
                                var appWidget = id("app").findOne(1000); // 等待1秒
                                if (!appWidget) {
                                    var sendMessageWidget = text("发送消息").findOne(1000); // 等待1秒
                                    if (sendMessageWidget) {
                                        alog("找到发送信息按钮");
                                        randomClick(sendMessageWidget); // 使用随机点击
                                        var delay = getRandomDelay();
                                        sleep(delay); // 使用随机延时
                                        alog("等待 " + delay / 1000 + " 秒");
                                        sendMessageWidget.setText(storage.get("privateMessage", "默认私信话术"));
                                        var delay = getRandomDelay();
                                        sleep(delay); // 使用随机延时
                                        alog("等待 " + delay / 1000 + " 秒");
                                    } else {
                                        alog("未找到发送消息按钮");
                                    }
                                } else {
                                    alog("已发过私信退出");
                                }

                                // 7. 点击发送私信
                                var sendButtonWidget = id("com.ss.android.ugc.aweme:id/jge").findOne(1000); // 等待1秒
                                if (sendButtonWidget) {
                                    alog("找到发送私信按钮");
                                    randomClick(sendButtonWidget); // 使用随机点击
                                    var delay = getRandomDelay();
                                    sleep(delay); // 使用随机延时
                                    alog("等待 " + delay / 1000 + " 秒");
                                } else {
                                    alog("未找到发送私信按钮");
                                }

                                // 8. 点击返回用户主页
                                var backToUserPageWidget = id("com.ss.android.ugc.aweme:id/mp9").findOne(1000); // 等待1秒
                                if (backToUserPageWidget) {
                                    alog("找到返回用户主页按钮");
                                    randomClick(backToUserPageWidget); // 使用随机点击
                                    var delay = getRandomDelay();
                                    sleep(delay); // 使用随机延时
                                    alog("等待 " + delay / 1000 + " 秒");
                                } else {
                                    alog("未找到返回用户主页按钮");
                                }

                                // 9. 点击返回互动页面
                                var backToInteractionPageWidget = id("com.ss.android.ugc.aweme:id/back_btn").findOne(1000); // 等待1秒
                                if (backToInteractionPageWidget) {
                                    alog("找到返回互动页面按钮");
                                    randomClick(backToInteractionPageWidget); // 使用随机点击
                                    var delay = getRandomDelay();
                                    sleep(delay); // 使用随机延时
                                    alog("等待 " + delay / 1000 + " 秒");
                                } else {
                                    alog("未找到返回互动页面按钮");
                                }
                            } else {
                                alog("未找到评论输入框");
                            }
                        } else {
                            alog("未找到 '回复评论' 按钮");
                        }
                    } else {
                        alog("parentWidget 不包含 '评论'");
                        // 如果没有找到parentWidget并且parentWidget.descContains("评论")为false，则跳过当前循环
                        continue;
                    }
                }

                // 如果循环结束后没有找到评论，则跳出while循环
                if (!foundComment) {
                    alog("未找到评论，跳出 while 循环");
                    break;
                }
            } else {
                alog("未找到 id 为 p4a 的控件，跳出 while 循环");
                break;
            }
        }

        // 跳出循环后点击返回消息页面
        var backButtonWidget = id("com.ss.android.ugc.aweme:id/iv_back").findOne(1000); // 等待1秒
        if (backButtonWidget) {
            alog("找到返回消息页面按钮");
            randomClick(backButtonWidget); // 使用随机点击
            var delay = getRandomDelay();
            sleep(delay); // 使用随机延时
            alog("等待 " + delay / 1000 + " 秒");
        } else {
            alog("未找到返回消息页面按钮");
        }
    }
};

// 获取随机延时
function getRandomDelay() {
    var minDelay = parseInt(storage.get("operationDelayMin", 1));
    var maxDelay = parseInt(storage.get("operationDelayMax", 5));
    return random(minDelay, maxDelay) * 1000; // 转换为毫秒
}