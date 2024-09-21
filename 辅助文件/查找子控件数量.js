// 查找id为root_view的控件
var rootView = desc("互动消息").findOne();

// 查找rootView下所有className为android.widget.FrameLayout且drawingOrder为4的控件
var frameLayouts = rootView.children().filter(function(child) {
    return child.id() == "red_tips_count_view" ;
});

// 输出找到的FrameLayout控件数量
console.log("找到的FrameLayout控件数量: " + frameLayouts.length);


