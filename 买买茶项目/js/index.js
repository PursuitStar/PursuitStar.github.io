/**
 * Created by Administrator on 2016/10/4.
 */
window.onload = function () {
    /*导航栏开始*/

    var lis = document.getElementById('menuUl').getElementsByTagName('li');
    lis[0].onmousemove = function(){
        this.className = "active";
    };
    for(var i = 1; i < lis.length - 2; i++){
        lis[i].onmousemove = function () {
            this.className = "active";
        };
        lis[i].onmouseout = function () {
            this.className = "";
        }
    }
    //购物车
    var newBuycar = document.getElementById('newBuycar');
    newBuycar.onmousemove = function () {
        newBuycar.style.backgroundColor = "#438f0e";
    };
    newBuycar.onmouseout = function () {
        newBuycar.style.backgroundColor = "#62b206";
    };
    /*导航栏结束*/

    /*在线客服开始*/
    var showBox = document.getElementById('showBox');
    var open = document.getElementById('open');
    var contenBox = document.getElementById('contenBox');
    var closeBox = document.getElementById('closeBox');

    /*展开*/
    open.onclick = function () {
        this.style.display = "none";
        contenBox.style.display = "block";

    };
    /*关闭*/
    closeBox.onclick = function () {
        open.style.display = "block";
        contenBox.style.display = "none";
    };
    /*在线客服结束*/

    /*轮播图开始*/
    var playerCon = document.getElementById('player_con');
    var playerImg = document.getElementById('player_img');
    var liImgs = playerImg.getElementsByTagName('li');
    var circleLis = document.getElementById('circleUl').getElementsByTagName('li');
    var leader = 0, target = 0;
    var timer1 = null,timer2 = null, timer3 = 0;

    timer1 = setInterval(autoPlay, 10);
    function autoPlay() {
        leader--;
        leader <= -3166 ? leader = 0 : leader;
        playerImg.style.left = leader + "px";
        if (parseInt(leader % 1583) == 0){
            clearInterval(timer1);
            // 延时自动播放的定时器 timer2
            timer2 = setTimeout(function () {
                timer1 = setInterval(autoPlay, 10);
            }, 3000);
        }

    }
    for (var i = 0; i < circleLis.length; i++){

        circleLis[i].onmouseover = function () {
            // 拿到目标位移量
            var num = this.getElementsByTagName('a')[0];
            target = (-num.innerHTML + 1)* 1583;
            clearInterval(timer1);
            clearTimeout(timer2);
            num.style.color = "red";
            // 让num等于目标位置, 是为了消除整个图片闪动
            num = target;
            // 响应用户鼠标移进的定时器 timer3
            timer3 = setInterval(function () {
                leader = leader + (target - leader) / 10;

                playerImg.style.left = leader + "px";
            }, 20);

        };
        circleLis[i].onmouseout = function () {
            var num = this.getElementsByTagName('a')[0];
            num.style.color = "#fff";
            clearInterval(timer3);
            timer2 = setTimeout(function () {
                timer1 = setInterval(autoPlay, 10);
            }, 3000);
        }
    }
    /*轮播图结束*/

    /*限时特价开始*/

        $(function(){
            var nav=$('.hotpro_header');
            var lis1=$('ul>li',nav);
            var cons=$('.new_hotpro_con');

            lis1.mouseover(function(){
                var se=$(this);
                var num=se.index();
                $(this).addClass("mover");
                cons.hide();
                cons.eq(num).show();
            });
            lis1.mouseout(function(){
               $(this).removeClass("mover");
            });
            /********************/

            $('.tab_title ul li').mouseover(function(){
                    $(this).addClass('on').siblings().removeClass('on');
                });
            $('#today-special').mouseover(function(){
                $('#goods-li-first').show();
                $('#goods-li-second').hide();
            });
            $('#latest-news').mouseover(function(){
                $('#goods-li-first').hide();
                $('#goods-li-second').show();
            });
            /***********************/
        });
            /*侧边栏显示开始*/
            var lis2 = $('.mc_right>ul>li');
            lis2.mouseover(function(){
                $(this).addClass("on").removeClass("off").siblings().removeClass("on").addClass("off");
            });
            /*侧边栏显示结束*/

            /*热门评论轮播开始*/
            var leader3 = 0, target3 = 0, index = 0;
            var conContainer = document.getElementById('conContainer');
            var hotC = document.getElementById('hotcircl');
            var hotCircls = document.getElementById('hotcircl').getElementsByTagName('li');
            var timer4 = null;
                function setTimer4(){
                    hotCircls[index].className = '';
                    leader3 -= 338;
                    index++;
                    if(leader3 < -676){
                        leader3 = 0;
                    }
                    if(index > 2) {
                        index = 0;
                    }
                    //console.log(index);

                    hotCircls[index].className = 'activeCir';
                    conContainer.style.left = leader3 + "px";
                }
               timer4 = setInterval(setTimer4,1000);

            for(var j = 0; j < hotCircls.length; j++){
                //获取下标
                hotCircls[j].index = j;
                hotCircls[j].onmousemove = function(){
                    clearInterval(timer4);
                    for(var i = 0; i < hotCircls.length; i++){
                        hotCircls[i].className = '';
                    }
                    this.className = 'activeCir';
                    conContainer.style.left = this.index * (-338) + "px";
                };
                hotCircls[j].onmouseout = function(){
                    clearInterval(timer4);
                    timer4 = setInterval(setTimer4,1000);

                }

            }

            /*热门评论轮播结束*/


    /*限时特价结束*/


    /*滚动条事件开始*/
    var leader2 = 0;
    var target2 = 0;
    window.onscroll = function () {
        clearInterval(showBoxTimer);
        var quaiTop =document.getElementById('quaiTop');
        var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
        target2= scrollTop + 200;

        //在线客服定时器
        var showBoxTimer = setInterval(function () {
            leader2 = leader2 + (target2 - leader2) / 25;
            showBox.style.top = leader2 + "px";
        },100);

        /*返回顶部箭头*/
        if(scrollTop >= 410){
            quaiTop.style.display = "block";
        }else{
            quaiTop.style.display = "none";
        }
        //clearInterval(showBoxTimer);
        quaiTop.onclick = function(){
            /*var num = 1;
            var quaiTopTimer = setInterval(function () {
                num -= 0.1;
                if(num <= 0){
                    num = 0;
                }
                quaiTop.style.opacity = num;
                return num;
            },100);
            if(num == 0){
                quaiTop.style.display = "none";
            }*/
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            quaiTop.style.display = "none";
        }
    };

    /*滚动条事件结束*/


    /*买买茶新闻开始*/
    var  news = $('#titleUl').children('li');
    var newText = document.getElementById('newText');
    var newContent = document.getElementById('newContent');


    news[0].onmouseover = function () {
            news[1].style.backgroundColor = '#fafafa';
            this.style.backgroundColor = '#ffffff';
            newContent.style.display = 'none';
            newText.style.display = 'block';

    };
    news[1].onmouseover = function () {
            news[0].style.backgroundColor = '#fafafa';
            this.style.backgroundColor = '#ffffff';
            newContent.style.display = 'block';
            newText.style.display = 'none';

    };


    /*买买茶新闻结束*/



};