function animate(obj, target, callback) {
    // console.log(callback);
    //当不断点击按钮时，这个元素的速度会越来越快，because开启了多个定时器  让元素只有一个定时器就可以了          
    clearInterval(obj.timer); //先清除以前的定时器 只保留当前的定时器
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //把步长值改为整数 不要出现小数的问题
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if (callback)
                callback();
        }
        obj.style.top = obj.offsetTop + step + 'px';
    }, 15)
}