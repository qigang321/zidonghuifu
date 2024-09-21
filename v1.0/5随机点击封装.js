// 5随机点击封装.js

module.exports = {
    randomClick: function(控件对象) {
        var bound = 控件对象.bounds();

        // 生成随机X坐标
        var randX = bound.left + random(2, bound.right - bound.left);

        // 生成随机Y坐标
        var randY = bound.top + random(2, bound.bottom - bound.top);

        // 点击随机生成的坐标
        click(randX, randY);
    }
};