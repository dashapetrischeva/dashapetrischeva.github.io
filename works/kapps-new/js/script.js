window.addEventListener("load", windowLoad);
function windowLoad(){
   const htmlBlock = document.documentElement;
   const saveUserTheme = localStorage.getItem('user-theme');
   let userTheme;
   if (window.metchMedia){
      userTheme = window.matchMedia('(prefers-color-schema: dark)').matches ? 'dark' : 'light';
   }
   window.matchMedia('(prefers-color-schema: dark)').addEventListener('change',e => {
      !saveUserTheme ? changeTheme() : null;
   });
   const themeButton = document.querySelector('.page__theme');
   if(themeButton) {
      themeButton.addEventListener('click', function (e) {
         changeTheme(true);
      });
   }
   function setThemeClass(){
      if(saveUserTheme){
         htmlBlock.classList.add(saveUserTheme);
      }
      else{
         htmlBlock.classList.add(userTheme);
      }
   }
setThemeClass();

// смена темы
function changeTheme(saveTheme = false) {
   let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
   let newTheme;
   if (currentTheme === 'light') {
      newTheme = 'dark';
     
   }
   else if (currentTheme === 'dark') {
      newTheme = 'light';
   }
   htmlBlock.classList.remove(currentTheme);
   htmlBlock.classList.add(newTheme);
   saveTheme ? localStorage.setItem('user-theme', newTheme): null;
}
}

$(document).ready(function(){
   // Вывод NYKOMMERE
 // Получение данных из JSON
   /*
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(data => {
        // Добавление каждого элемента в HTML
        data.forEach(item => {
          const container = document.createElement('a');
          container.href = '#';
          container.className = 'nykommere__item';

          const content = document.createElement('div');
          content.className = 'nykommere__item-content';

          const image = document.createElement('div');
          image.className = 'nykommere__item-image';
          const img = document.createElement('img');
          img.src = item.thumbnailUrl;
          img.alt = item.title;
          image.appendChild(img);

          const info = document.createElement('div');
          info.className = 'nykommere__item-info';
          const name = document.createElement('div');
          name.className = 'nykommere__item-name';
          name.textContent = item.title;
          info.appendChild(name);

          content.appendChild(image);
          content.appendChild(info);
          container.appendChild(content);

          // Добавление элемента в DOM
          document.querySelector('.nykommere__row').appendChild(container);
        });
      })
      .catch(error => console.error('Ошибка при получении данных:', error));
*/


$('.lesmer').click(function(event){
      $('.lesmer').hide();
      $('.registrert').show();
      
   });



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

$('.tabs__items').click(function(event){
   $.each($('.tabs__items'), function() {
      $(this).removeClass('active');
   });
   $.each($('.tabs__block'), function() {
      $(this).removeClass('active');
   });
   $(this).addClass('active');
  document.getElementById('top_title').textContent = 'TOP ' + $(this)[0].textContent + ' >';
name = '#tab_' + $(this)[0].id;

$(name).addClass('active');

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







  //adaptive functions
$(window).resize(function(event){

   adaptive_function();
});
function adaptive_header(w,h){
   var headerMenu=$('.header-menu');
   var headerSearch=$('.form__search');
   var headerMenu1=$('.menu__list');
   var headerTheme = $('.page__action');
   
  
 
   

    if(w<1180){
     
      if(!headerMenu1.hasClass('done')){
         headerMenu1.addClass('done').appendTo(headerMenu);
       
      }
   }else{
       if(headerMenu1.hasClass('done')){
         headerMenu1.removeClass('done').appendTo($('.menu__body'));
      }
   }
   if(w<1180){
     
      if(!headerSearch.hasClass('done')){
         headerSearch.addClass('done').appendTo(headerMenu);
       
      }
   }else{
       if(headerSearch.hasClass('done')){
         headerSearch.removeClass('done').appendTo($('.menu__body'));
      }
   }
   if(w<1180){
     
      if(!headerTheme.hasClass('done')){
         headerTheme.addClass('done');
       
      }
   }else{
       if(headerTheme.hasClass('done')){
         headerTheme.removeClass('done').appendTo($('.menu__body'));
      }
   }
  }

function adaptive_function(){
   var w=$(window).outerWidth();
   var h= $(window).outerHeight();
 
   adaptive_header(w,h);
}
adaptive_function();