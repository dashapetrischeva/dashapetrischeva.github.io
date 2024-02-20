$(document).ready(function(){

	$('.header-menu__icon').click(function(event){
		$(this).toggleClass('active');
      $('.header-menu').toggleClass('active');
      if ($(this).hasClass('active')){
         $('body').data('scroll',$(window).scrollTop());
      }
		$('body').toggleClass('lock');
       if (!$(this).hasClass('active')){
         $('body,html').scrollTop(parseInt($('body').data('scroll')));
      }
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

  //adaptive functions
$(window).resize(function(event){

   adaptive_function();
});
function adaptive_header(w,h){
   var headerMenu=$('.header-menu');
   var headerLang=$('.header__top-left');
   var headerMenu1=$('.menu__list_1');
   var headerMenu2=$('.menu__list_2');
   
  
 
   if(w<840){
     
      if(!headerLang.hasClass('done')){
         headerLang.addClass('done').appendTo(headerMenu);
       
      }
   }else{
       if(headerLang.hasClass('done')){
         headerLang.removeClass('done').prependTo($('.header__top-row'));
      }
   }

    if(w<840){
     
      if(!headerMenu1.hasClass('done')){
         headerMenu1.addClass('done').appendTo(headerMenu);
       
      }
   }else{
       if(headerMenu1.hasClass('done')){
         headerMenu1.removeClass('done').prependTo($('.menu__body'));
      }
   }
    if(w<840){
     
      if(!headerMenu2.hasClass('done')){
         headerMenu2.addClass('done').appendTo(headerMenu);
       
      }
   }else{
       if(headerMenu2.hasClass('done')){
         headerMenu2.removeClass('done').appendTo($('.menu__body'));
      }
   }


}

function adaptive_function(){
   var w=$(window).outerWidth();
   var h= $(window).outerHeight();
 
   adaptive_header(w,h);
}
adaptive_function();