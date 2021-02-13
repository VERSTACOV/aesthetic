$('.wrapper').addClass('loaded');

//$('.header__burger').click(function(event) {
	//$(this).toggleClass('active');
	//$('.header__list').toggleClass('active');
	//$('body').toggleClass('lock');
//});

$(document).ready(function(){
	$('.item__title').click(function(event) {
		if($('.spoler').hasClass('one')){
			$('.item__title').not($(this)).removeClass('active');
			$('.item__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});




$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		adaptiveHeight: true,
	});
});

$(document).ready(function(){
	$('.').slick({
		arrows:true,
	});
});


$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});

function ibg(){
	$.each($('.ibg'),function(index, val){
		if($(this).find('img').length>0){
		   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();



