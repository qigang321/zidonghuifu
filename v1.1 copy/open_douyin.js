module.exports = {
    openDouyinAndEnterMessagePage: function(randomClick, alog, storages) {
        try {
            alog("正在启动抖音...");
            app.launchApp("抖音"); // 直接启动抖音应用
            alog("抖音已启动");

            // 等待root_view出现
            var rootView = null;
            while (!rootView) {
                rootView = id("root_view").findOne(1000); // 等待1秒
                if (!rootView) {
                    alog("等待root_view出现...");
                    sleep(1000); // 等待1秒
                }
            }

            alog("已进入抖音页面");

            // 等待5秒
            sleep(5000);

            // 进入消息页面后，找到指定的控件并点击
            var targetWidget = rootView.findOne(className("android.widget.FrameLayout").drawingOrder(4));
            if (targetWidget) {
                var success = false;
                while (!success) {
                    randomClick(targetWidget); // 使用随机点击封装函数
                    alog("已点击消息页面");

                    // 检查是否进入消息页面
                    var interactionMessageWidget = text("互动消息").findOne(2000); // 等待2秒
                    if (interactionMessageWidget) {
                        alog("已成功进入消息页面");
                        success = true;
                    } else {
                        alog("未进入消息页面，继续点击消息页面");
                        sleep(2000); // 等待2秒
                    }
                }
            } else {
                alog("未找到指定的FrameLayout控件");
            }
        } catch (e) {
            alog("打开抖音并进入消息页面时发生错误: " + e);
        }
    }
};