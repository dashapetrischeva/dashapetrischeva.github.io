$(document).ready(function(){

	$('.menu__icon').click(function(event){
		$('.menu__icon,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();



if($('.slider__body').length>0){
	$('.slider__body').slick({
       dots:true,
       arrows:false,
       accessibility:false,
       slidesToShow:1,
       autoplaySpedd: 3000,
       adaptiveHeight:true,
       nextArrow:'<button type="button" class="slick-next"></button>',
       prevArrow:'<button type="button" class="slick-prev"></button>',
       responsive:[{
       	breakpoint: 768,
       	settings: {}
       }]
		});
}



