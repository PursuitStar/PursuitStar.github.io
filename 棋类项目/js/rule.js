/**
 * Created by PursuitStar on 2016/12/16.
 */


if (typeof(document.onselectstart) != "undefined") {

    document.onselectstart = new Function("return false");
} else {

    document.onmousedown = new Function("return false");
    document.onmouseup = new Function("return true");
}



var time1 = null;
var time2 = null;
var time3 = null;
var time4 = null;
var body = document.getElementById('body');

var flag = 1;

var chessHome = document.getElementById("chess_home");
var chesses = chessHome.getElementsByClassName("chess");

var checker =document.getElementById("checker");
var checkes = checker.getElementsByClassName("chess_block");

var leftWas = new Array(32);
var topWas = new Array(32);
//console.log(chesses.length);
for(var i = 0; i < 32; i++){
    leftWas[i] = chesses[i].offsetLeft;
    topWas[i] = chesses[i].offsetTop;
}



for(var i = 0 ; i < 16 ; i++) {

    if (i < 5 || (i > 9 && i < 15)) {
        $('.chess').eq(i).click(function () {
            if ((flag == 2 || flag == 3 || flag == 8) && $(this).offset().left < 900) {

                var createleft = $(this).offset().left;
                var createtop = $(this).offset().top;

                clearTimeout(time1);
                clearTimeout(time2);
                clearInterval(time3);
                $('.chess').css('display', "block");

                $(this).css('display', "none");
                var $this = $(this);
                time2 = setTimeout(function () {
                    $this.css('display', "block");
                }, 500)
                time3 = setInterval(function () {
                    time1 = setTimeout(function () {
                        $this.css('display', "none");
                    }, 0)
                    time2 = setTimeout(function () {
                        $this.css('display', "block");
                    }, 500)
                }, 1000)

                $this.addClass('special').siblings('div').removeClass('special');

                for(var k in checkes) {
                    checkes[k].className = 'chess_block';
                }

                $('.chess').removeClass('special3');
                flag = 3;

                var $this = $(this);
                time4 = setTimeout(function(){
                    for (var j = 0 ; j < 81; j ++) {
                        var judege = Math.abs($('.chess_block').eq(j).offset().left - createleft) + Math.abs($('.chess_block').eq(j).offset().top - createtop)
                        if (judege < 52 && judege != 0) {
                            $('.chess_block').eq(j).addClass('bgcred');
                        }
                    }

                    for(var j = 16; j < 32; j++){
                        var judge = Math.abs($('.chess').eq(j).offset().left - createleft) + Math.abs($('.chess').eq(j).offset().top - createtop);
                        if (judge < 52 && judge != 0) {
                            $('.chess').eq(j).addClass('special3');

                            if($this.index() < 5){
                                flag = 8;
                            }
                        }else if(judge < 104){
                            if($this.index() < 5){
                                $('.chess').eq(j).addClass('special3');
                                flag = 8;
                            }
                        }

                    }
                })
            }

        });
    }

    else{
        $('.chess').eq(i).click(function () {
            if ((flag == 2 || flag == 3 || flag == 8) && $(this).offset().left < 900) {

                var createleft = $(this).offset().left;
                var createtop = $(this).offset().top;

                clearTimeout(time1);
                clearTimeout(time2);
                clearInterval(time3);
                $('.chess').css('display', "block");

                $(this).css('display', "none");
                var $this = $(this);
                time2 = setTimeout(function () {
                    $this.css('display', "block");
                }, 500)
                time3 = setInterval(function () {
                    time1 = setTimeout(function () {
                        $this.css('display', "none");
                    }, 0)
                    time2 = setTimeout(function () {
                        $this.css('display', "block");
                    }, 500)
                }, 1000)

                $this.addClass('special').siblings('div').removeClass('special');

                for(var k in checkes) {
                    checkes[k].className = 'chess_block';
                }

                $('.chess').removeClass('special3');
                flag = 3;

                time4 = setTimeout(function(){
                    for (var j = 0 ; j < 81; j ++) {
                        var judege = Math.abs($('.chess_block').eq(j).offset().left - createleft) + Math.abs($('.chess_block').eq(j).offset().top - createtop)
                        if (judege < 104 && judege != 0) {
                            $('.chess_block').eq(j).addClass('bgcred');
                        }
                    }

                    for(var j = 16; j < 32; j++){
                        var judge = Math.abs($('.chess').eq(j).offset().left - createleft) + Math.abs($('.chess').eq(j).offset().top - createtop);
                        if (judge < 104 && judge != 0) {
                            $('.chess').eq(j).addClass('special3');
                        }

                    }
                })
            }

        });
    }
}

$('.chess_block').click(function(){

    if((flag == 3 || flag == 8) && $(this).hasClass('bgcred')) {
        $('.chess[class ~= special]').css('left',$(this).position().left + "px");
        $('.chess[class ~= special]').css('top',$(this).position().top + "px");
        $('.chess').css('display', "block");
        clearInterval(time3);
        $('.chess_block').removeClass('bgcred');
        $('.chess').removeClass('special3');
        flag = 4;

        if($('.chess[class ~= special]').index() >= 0 && $('.chess[class ~= special]').index() < 5){
            var createleft = $(this).offset().left;
            var createtop = $(this).offset().top;
            for(var j = 16; j < 32; j++){
                var judge = Math.abs($('.chess').eq(j).offset().left - createleft) + Math.abs($('.chess').eq(j).offset().top - createtop);
                if (judge < 104 && judge != 0) {
                    $('.chess').eq(j).addClass('special3');
                    flag = 6;
                }
            }

        }
    }
})

for(i = 16; i < 32; i++){
    $('.chess').eq(i).click(function(){
        if(flag == 3 && $(this).hasClass('special3')){
            var index = $(this).index();
            $('.chess[class ~= special]').css('left',$(this).position().left + "px");
            $('.chess[class ~= special]').css('top',$(this).position().top + "px");
            $(this).css('left',leftWas[index + 16] + "px");
            $(this).css('top',topWas[index + 16] + "px");
            $('.chess').css('display', "block");
            clearInterval(time3);
            $('.chess_block').removeClass('bgcred');
            $('.chess').removeClass('special3');
            flag = 4;
            //console.log(leftWas[index]);

        }

        else if((flag == 6 || flag == 8) && $(this).hasClass('special3')){
            var index = $(this).index();
            $(this).css('left',leftWas[index + 16] + "px");
            $(this).css('top',topWas[index + 16] + "px");
            $('.chess').css('display', "block");
            clearInterval(time3);
            $('.chess_block').removeClass('bgcred');
            $('.chess').removeClass('special3');
            flag = 4;
        }
    })
}









for(var i = 16 ; i < 32 ; i++) {

    if (i < 21 || (i > 25 && i < 31)) {
        $('.chess').eq(i).click(function () {
            if ((flag == 4 || flag == 5 || flag == 9) && $(this).offset().left < 900) {

                var createleft = $(this).offset().left;
                var createtop = $(this).offset().top;

                clearTimeout(time1);
                clearTimeout(time2);
                clearInterval(time3);
                $('.chess').css('display', "block");

                $(this).css('display', "none");
                var $this = $(this);
                time2 = setTimeout(function () {
                    $this.css('display', "block");
                }, 500)
                time3 = setInterval(function () {
                    time1 = setTimeout(function () {
                        $this.css('display', "none");
                    }, 0)
                    time2 = setTimeout(function () {
                        $this.css('display', "block");
                    }, 500)
                }, 1000)

                $this.addClass('special2').siblings('div').removeClass('special2');

                for(var k in checkes) {
                    checkes[k].className = 'chess_block';
                }

                $('.chess').removeClass('special4');
                flag = 5;

                time4 = setTimeout(function(){
                    for (var j = 0 ; j < 81; j ++) {
                        var judege = Math.abs($('.chess_block').eq(j).offset().left - createleft) + Math.abs($('.chess_block').eq(j).offset().top - createtop)
                        if (judege < 52 && judege != 0) {
                            $('.chess_block').eq(j).addClass('bgcblue');
                        }
                    }

                    for(var j = 0; j < 16; j++){
                        var judge = Math.abs($('.chess').eq(j).offset().left - createleft) + Math.abs($('.chess').eq(j).offset().top - createtop);
                        if (judge < 52 && judge != 0) {
                            $('.chess').eq(j).addClass('special4');

                            if($this.index() < 5){
                                flag = 9;
                            }
                        }else if(judge < 104 && judge != 0){
                            if($this.index() < 5){
                                $('.chess').eq(j).addClass('special4');
                                flag = 9;
                            }
                        }

                    }
                })
            }

        });
    }

    else{
        $('.chess').eq(i).click(function () {
            if ((flag == 4 || flag == 5 || flag == 9) && $(this).offset().left < 900) {

                var createleft = $(this).offset().left;
                var createtop = $(this).offset().top;

                clearTimeout(time1);
                clearTimeout(time2);
                clearInterval(time3);
                $('.chess').css('display', "block");

                $(this).css('display', "none");
                var $this = $(this);
                time2 = setTimeout(function () {
                    $this.css('display', "block");
                }, 500)
                time3 = setInterval(function () {
                    time1 = setTimeout(function () {
                        $this.css('display', "none");
                    }, 0)
                    time2 = setTimeout(function () {
                        $this.css('display', "block");
                    }, 500)
                }, 1000)

                $this.addClass('special2').siblings('div').removeClass('special2');

                for(var k in checkes) {
                    checkes[k].className = 'chess_block';
                }

                $('.chess').removeClass('special4');
                flag = 5;

                time4 = setTimeout(function(){
                    for (var j = 0 ; j < 81; j ++) {
                        var judege = Math.abs($('.chess_block').eq(j).offset().left - createleft) + Math.abs($('.chess_block').eq(j).offset().top - createtop)
                        if (judege < 104 && judege != 0) {
                            $('.chess_block').eq(j).addClass('bgcblue');
                        }
                    }

                    for(var j = 0; j < 16; j++){
                        var judge = Math.abs($('.chess').eq(j).offset().left - createleft) + Math.abs($('.chess').eq(j).offset().top - createtop);
                        if (judge < 104 && judge != 0) {
                            $('.chess').eq(j).addClass('special4');
                        }

                    }
                })
            }

        });
    }
}
$('.chess_block').click(function(){

    if((flag == 5 || flag == 9) && $(this).hasClass('bgcblue')) {
        $('.chess[class ~= special2]').css('left',$(this).position().left + "px");
        $('.chess[class ~= special2]').css('top',$(this).position().top + "px");
        $('.chess').css('display', "block");
        clearInterval(time3);
        $('.chess_block').removeClass('bgcblue');
        $('.chess').removeClass('special4');
        flag = 2;

        if($('.chess[class ~= special2]').index() >= 0 && $('.chess[class ~= special2]').index() < 5){
            var createleft = $(this).offset().left;
            var createtop = $(this).offset().top;
            for(var j = 0; j < 16; j++){
                var judge = Math.abs($('.chess').eq(j).offset().left - createleft) + Math.abs($('.chess').eq(j).offset().top - createtop);
                if (judge < 104 && judge != 0) {
                    $('.chess').eq(j).addClass('special4');
                    flag = 7;
                }
            }

        }
    }
})

for(i = 0; i < 16; i++){
    $('.chess').eq(i).click(function(){
        if(flag == 5 && $(this).hasClass('special4')){
            var index = $(this).index();
            $('.chess[class ~= special2]').css('left',$(this).position().left + "px");
            $('.chess[class ~= special2]').css('top',$(this).position().top + "px");
            $(this).css('left',leftWas[index] + "px");
            $(this).css('top',topWas[index] + "px");
            $('.chess').css('display', "block");
            clearInterval(time3);
            $('.chess_block').removeClass('bgcblue');
            $('.chess').removeClass('special4');
            flag = 2;
            //console.log(leftWas[index]);

        } else if((flag == 7 || flag == 9) && $(this).hasClass('special4')){
            var index = $(this).index();
            $(this).css('left',leftWas[index] + "px");
            $(this).css('top',topWas[index] + "px");
            $('.chess').css('display', "block");
            clearInterval(time3);
            $('.chess_block').removeClass('bgcblue');
            $('.chess').removeClass('special4');
            flag = 2;
        }
    })
}


