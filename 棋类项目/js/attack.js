/**
 * Created by PursuitStar on 2016/12/16.
 */

$('#enter').animate({
    top:'0'
},3000,'easeInExpo',function(){
    $(this).animate({
        top:'-200px'
    },2000,'easeOutQuint',function(){
        $(this).animate({
            top:'0'
        },1500,'easeInQuad')
    })
})
$('#buttonenter').click(function(){
    $('#enter')[0].style.display = 'none';
})



$('#begin').click(function(){
    $(this).addClass("disnone");
    $(this).siblings().children().addClass("disnone");
    $('#rule').addClass('disnone');
    flag = 2;
})

$('#rule').click(function(){
    $('#rulesay').addClass('disblock');
})
$('#closerule').click(function(){
    $('#rulesay').removeClass('disblock');
})



$('#rebegin').click(function(){
    $('#begin').removeClass("disnone");
    $(this).siblings().children().removeClass("disnone");
    $('#rule').removeClass('disnone');
    for(i = 0; i < 32; i++){
        chesses[i].style.left = leftWas[i] + 'px';
        chesses[i].style.top = topWas[i] + 'px';
    }
    for(var k in checkes){
        checkes[k].className = 'chess_block';
    }
    clearInterval(time3);
    flag = 1;
})
