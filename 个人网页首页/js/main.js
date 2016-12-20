(function(){

	/*------visibilitychange------*/
	$(window).bind('visibilitychange',function(){
		if(document.visibilityState=='hidden') {
			normal_title=$("title").html();
			$("title").html('(づ￣ 3￣)づ');
		}
		else
			$("title").html(normal_title);
	});

	/*------navShow------*/
	$.goNavShow = function(node){
		var $node = $(node);
		$(window).on('scroll',function(e){
			e.preventDefault();
			var offsetY = $(this).scrollTop();
			if (offsetY>=200) {
				$node.addClass('visible');
			}else{
				$node.removeClass('visible');
			}
		})
	};

	/*------topNav------*/
	var $navToggle = $('#nav-toggle');
	var $menu = $('nav ul');
	$navToggle.on('click',function(e){
	  e.preventDefault();
	  $menu.slideToggle(250);
	  this.classList.toggle('active');
	});
	$(window).resize(function(){
		var resizeW=$(window).width();
		resizeW>320&&$menu.is(':hidden')&&$menu.removeAttr('style')
	});
	/*------gotoTop------*/
	$('.gotop-js').on('click',function(e){
		e.preventDefault();
		$('body').animate({scrollTop: 0},'slow')
	})

	/*------projects mouseenter------*/
	 $('.projects').on('mouseenter','article',function(){
		$(this).siblings().addClass('dim');
	}).on('mouseleave','article',function(){
		$(this).siblings().removeClass('dim');
	});
	/*------文字翻转------*/
	$('.wodryRX').wodry({
	    animation: 'rotateX',
	    delay: 1500,
	    animationDuration: 800
	});
})(jQuery);

/*------music------*/
var isPlaying = true;
var music = $("#music")[0];
function musicToggle() {
	if(isPlaying) {
		music.pause();
	}else {
		music.play();
	}
	isPlaying = !isPlaying;
};

