window.addEventListener('load', function() {
    var timer = null; //全局变量
    //获取元素
    var main = document.querySelector('.main');
    var day = document.querySelector('.day');
    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var inputTime = +new Date('2021-9-5 0:00');
    var timer = setInterval(function countDown() {
            var nowTime = +new Date(); //单位：毫秒
            var times = parseInt((inputTime - nowTime) / 1000); //剩余时间总秒数
            if (times > 0) {
                var d = parseInt(times / 60 / 60 / 24);
                d = d < 10 ? '0' + d : d;
                day.innerHTML = d;
                //离开学还剩10天时
                if (d == 10) {
                    animate(main, 300, function() {
                        main.style.backgroundColor = '#cd2525';
                        main.style.color = '#fff';
                    })
                }
                var h = parseInt(times / 60 / 60 % 24); //小时
                h = h < 10 ? '0' + h : h;
                hour.innerHTML = h;
                var m = parseInt(times / 60 % 60); //分钟
                m = m < 10 ? '0' + m : m;
                minute.innerHTML = m;
                var s = parseInt(times % 60); //秒
                s = s < 10 ? '0' + s : s;
                second.innerHTML = s;
            }
        }, 1000)
        //进场设计
    animate(main, 150, function() {
        alert('抓紧时间学前端！！！');
    });

})