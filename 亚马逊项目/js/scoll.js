/**
 * Created by Administrator on 2016/11/30.
 */
var scrollImages = document.getElementsByClassName('scroll_images')[0];
var rectangle = document.getElementsByClassName("rectangle")[0];
var rectangleArray = document.querySelectorAll('.href');
var btn_l = document.getElementsByClassName('btn_l')[0];
var btn_r = document.getElementsByClassName('btn_r')[0];

var timer1 = null;
var timer2 = null;
var timer3 = null;
var timer4 = null;
var timer5 = null;
var timer6 = null;
var timer7 = null;

var num = 0;
var spilce = 240;
var spilceMax = 295;

var target = 0;
var leader = 0;

/*设置定时器*/
timer1 = setInterval(autoPlay, 10);


function autoPlay() {
    num = num - 1;
    clearTimeout(timer7);
    clearTimeout(timer6);

    num <= -10400 ? num = 0 : num;
    scrollImages.style.left = num + 'px';

    if (num % 1300 == 0) {
        clearInterval(timer1);
        timer2 = setTimeout(function () {
            timer1 = setInterval(autoPlay, 10);
        }, 2000)
    }

    /*左点击*/
    btn_l.onclick = function () {
        clearInterval(timer1);
        clearTimeout(timer7);
        clearTimeout(timer6);

        num = num + 1300;
        num >= 0 ? num = -10400 : num;
        for (var i = 0; i < 8; i++) {
            rectangle.getElementsByTagName('li')[i].style.backgroundColor = "lightslategrey";
            if (num == -1300 * i) {
                rectangle.getElementsByTagName('li')[i].style.backgroundColor = "orange";
                clearInterval(timer1);
                num = -1300 * i;
                timer6 = setTimeout(function () {
                    timer1 = setInterval(autoPlay, 10);
                }, 2000)
            }

        }

        scrollImages.style.left = num + 'px';
    };

    /*右点击*/
    //console.log(btn_r.querySelector('a'));
    btn_r.onclick = function () {
        clearInterval(timer1);
        clearTimeout(timer7);
        clearTimeout(timer6);

        num = num - 1300;
        num <= -10400 ? num = 0 : num;
        for (var i = 0; i < 8; i++) {
            rectangle.getElementsByTagName('li')[i].style.backgroundColor = "lightslategrey";
            if (num == -1300 * i) {
                rectangle.getElementsByTagName('li')[i].style.backgroundColor = "orange";
                clearInterval(timer1);
                timer7 = setTimeout(function () {
                    timer1 = setInterval(autoPlay, 10);
                }, 2000)
            }
        }
        scrollImages.style.left = num + 'px';

    };
    /*下面小长方形*/

    for (var i = 0; i < 8; i++) {

        if (num == -1300 * i) {
            rectangle.getElementsByTagName('li')[i].style.backgroundColor = "orange";
        } else if (num == -1300 * i - 1000) {
            rectangle.getElementsByTagName('li')[i].style.backgroundColor = "lightslategrey";
        }

        rectangleArray[i].onmouseover = function () {
            for (var j = 0; j < 8; j++) {
                rectangle.getElementsByTagName('li')[j].style.backgroundColor = "lightslategrey";
                this.parentNode.style.backgroundColor = "orange";

            }
            clearInterval(timer1);
            clearInterval(timer4);
            clearTimeout(timer2);

            /*向上移动*/
            spilceMax = spilce;
            timer5 = setInterval(function () {
                spilceMax = spilceMax - 1;
                if (spilceMax <= 240) {
                    spilceMax = 240;
                    clearInterval(timer5);
                }
                rectangle.style.top = spilceMax + 'px';
            }, 10);

            /*取href的值*/
            var value = this.href;
            var re = /javascript\:([^\.]*)/;
            var r = value.match(re);
            value = r[1];
            target = (-value + 1) * 1300;
            num = target;
            //console.log(value);
            timer3 = setInterval(function () {
                leader = leader + (target - leader) / 10;
                scrollImages.style.left = leader + 'px';
            }, 20)
        };

        rectangleArray[i].onmouseout = function () {
            if (num == -1300 * i - 1000) {
                this.parentNode.style.backgroundColor = "lightslategrey";
            }
            clearInterval(timer5);
            /*向下移动*/
            spilce = spilceMax;
            timer4 = setInterval(function () {

                spilce = spilce + 1;
                if (spilce >= 295) {
                    spilce = 295;
                    clearInterval(timer4);
                }
                rectangle.style.top = spilce + 'px';
            }, 10);

            clearInterval(timer3);

            timer2 = setTimeout(function () {
                timer1 = setInterval(autoPlay, 10)
            }, 2000);
        };
    }

}


/*广告栏*/
var ad = document.querySelector(".ad_min");
var adImg = ad.querySelector("img");
var adMax = document.querySelector(".ad_max");
var time1 = null;

ad.onmouseover = function () {
    adImg.style.display = "none";
    time1 = setInterval(function () {
        adMax.style.top = 40 + 'px';
        if (adMax.style.top == 40 + "px") {
            clearInterval(time1);
        }
    }, 500);
};
ad.onmouseout = function () {
    clearInterval(time1);
    adImg.style.display = "block";
    adMax.style.top = '-375px';
};