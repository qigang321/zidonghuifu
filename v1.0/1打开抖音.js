// 导入随机点击封装模块
var randomClickModule = require('./5随机点击封装.js');

module.exports = {
    openDouyinAndEnterMessagePage: function() {
        // 等待desc为抖音的控件出现并点击
        var douyinWidget = desc("抖音").findOne(1000); // 等待1秒
        if (douyinWidget) {
            randomClickModule.randomClick(douyinWidget); // 使用随机点击封装函数

            // 等待root_view出现
            var rootView = null;
            while (!rootView) {
                rootView = id("root_view").findOne(1000); // 等待1秒
                if (!rootView) {
                    // 如果root_view未出现，继续点击douyinWidget
                    randomClickModule.randomClick(douyinWidget);
                    sleep(1000); // 等待1秒
                }
            }


            // 等待5秒
            sleep(5000);

            // 进入消息页面后，找到指定的控件并点击
            var targetWidget = rootView.findOne(className("android.widget.FrameLayout").drawingOrder(4));
            if (targetWidget) {
                randomClickModule.randomClick(targetWidget); // 使用随机点击封装函数
            } else {
                toast("未找到指定的FrameLayout控件");
            }
        } else {
            toast("未找到desc为抖音的控件");
            exit();
        }
    }
};