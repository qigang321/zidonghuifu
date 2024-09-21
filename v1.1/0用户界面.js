"ui";

ui.layout(
    <vertical bg="#FFFFFF">
        <horizontal>
            <text text="无障碍服务" textSize="18sp" margin="10" />
            <Switch id="accessibilityServiceSwitch" margin="10" checked="{{auto.service != null}}" />
        </horizontal>
        <horizontal>
            <text text="悬浮窗权限" textSize="18sp" margin="10" />
            <Switch id="floatingWindowPermissionSwitch" margin="10" />
        </horizontal>
        <text text="评论内容" textSize="18sp" margin="10" />
        <input id="commentContent" hint="请输入评论内容" textSize="16sp" margin="10" />
        <text text="私信话术" textSize="18sp" margin="10" />
        <input id="privateMessage" hint="请输入私信话术" textSize="16sp" margin="10" />
        <text text="多久返回桌面" textSize="18sp" margin="10" />
        <horizontal>
            <input id="returnDesktopTimeMin" hint="最小值（秒）" textSize="16sp" margin="10" />
            <text text="至" textSize="16sp" margin="10" />
            <input id="returnDesktopTimeMax" hint="最大值（秒）" textSize="16sp" margin="10" />
        </horizontal>
        <text text="操作延时" textSize="18sp" margin="10" />
        <horizontal>
            <input id="operationDelayMin" hint="最小值（秒）" textSize="16sp" margin="10" />
            <text text="至" textSize="16sp" margin="10" />
            <input id="operationDelayMax" hint="最大值（秒）" textSize="16sp" margin="10" />
        </horizontal>
        <button id="startButton" text="开始运行" textSize="18sp" margin="10" />
    </vertical>
);




// 初始化存储对象
var storage = storages.create("my_storage");

// 从存储中读取数据并设置到用户界面
function loadData() {
    ui.commentContent.setText(storage.get("commentContent", ""));
    ui.privateMessage.setText(storage.get("privateMessage", ""));
    ui.returnDesktopTimeMin.setText(storage.get("returnDesktopTimeMin", "15"));
    ui.returnDesktopTimeMax.setText(storage.get("returnDesktopTimeMax", "30"));
    ui.operationDelayMin.setText(storage.get("operationDelayMin", "2"));
    ui.operationDelayMax.setText(storage.get("operationDelayMax", "5"));
}

// 当应用程序恢复时，加载数据
ui.emitter.on("resume", function() {
    loadData();
    ui.accessibilityServiceSwitch.checked = auto.service != null;
});

// 保存数据函数
function saveData() {
    // 将输入框的内容保存到存储中，并调用 toString() 方法
    storage.put("commentContent", ui.commentContent.text().toString());
    storage.put("privateMessage", ui.privateMessage.text().toString());
    storage.put("returnDesktopTimeMin", ui.returnDesktopTimeMin.text().toString());
    storage.put("returnDesktopTimeMax", ui.returnDesktopTimeMax.text().toString());
    storage.put("operationDelayMin", ui.operationDelayMin.text().toString());
    storage.put("operationDelayMax", ui.operationDelayMax.text().toString());
}



// 开始运行脚本
ui.startButton.on("click", function(){
    if(auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }

    // 判断悬浮窗数量
    let engineCount = engines.all().length;
    log("当前悬浮窗数量: " + engineCount);
    if (engineCount > 2) {
        toast("当前悬浮窗数量过多，请关闭一些悬浮窗后再试！");
        return;
    }

    saveData();
    main();
});

// 主运行函数
function main() {
    // 启动 0主运行.js 脚本
    log("准备启动 0主运行.js 脚本");
    engines.execScriptFile("0主运行.js");
    log("0主运行.js 脚本已启动");
}