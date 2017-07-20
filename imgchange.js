

$(function(){
	$('.imgchange').click(function() {
		if (isTure){
			$(this).addClass('change-big');
		$(this>'img').animate({width: 200%}, 100);
		  isTure = false;
		}else{
			$(this).removeClass('change-big');
		$(this>'img').animate({width: 100%}, 100);
		isTure = true;
		}
		
	});
});
$(function(){ 
	$('li').hover(function() {
	    $(this).addClass('on');
	    var wl = $(this).find('img').attr('width');
	    if (wl < 190) {
	        $(this).find('.in').css('left', '0')
	    } else {
	        $(this).find('.in').css('left', -wl / 4)
	    }
	},
	function() {
	    $(this).animate({
	        height: "120px"
	    },
	    100).removeClass('on');
	    $(this).find('.in').css('left', '0')
	});
});