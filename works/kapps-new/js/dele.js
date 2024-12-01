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
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(data => {
      

const firstSixMembers = data.slice(0, 6);
firstSixMembers.forEach(item => {
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


          const type = document.createElement('div');
          type.className = 'nykommere__item-type';
          type.textContent = 'RPA';
          info.appendChild(type);


          const author = document.createElement('div');
          author.className = 'nykommere__item-author';
          author.textContent = 'Fosen IKT';
          info.appendChild(author);


          content.appendChild(image);
          content.appendChild(info);
          container.appendChild(content);

          // Добавление элемента в DOM
          document.querySelector('.nykommere__row').appendChild(container);
        });
      })
      .catch(error => console.error('Ошибка при получении данных:', error));


// TOPApps
 // Получаем данные из URL
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(response => response.json())
    .then(data => {
      // Получаем контейнер, в который будем вставлять элементы
      const topRowApps = document.querySelector('.top__row-apps');

      // Создаем элементы для каждого из первых 6 элементов
      for (let i = 0; i < 6; i++) {
        const item = data[i];
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'top__item';

        const content = document.createElement('div');
        content.className = 'top__item-content';

        const image = document.createElement('div');
        image.className = 'top__item-image';
        const img = document.createElement('img');
        img.src = item.thumbnailUrl;
        img.alt = item.title;
        image.appendChild(img);

        const info = document.createElement('div');
        info.className = 'top__item-info';

        const name = document.createElement('div');
        name.className = 'top__item-name';
        name.textContent = item.title;

        const type = document.createElement('div');
        type.className = 'top__item-type';
        type.textContent = 'Applikasjon';

        const author = document.createElement('div');
        author.className = 'top__item-author';
        author.textContent = 'Fosen IKT';

        info.appendChild(name);
        info.appendChild(type);
        info.appendChild(author);

        content.appendChild(image);
        content.appendChild(info);

        link.appendChild(content);
        topRowApps.appendChild(link);
      }
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
    });


      // ---TOP RPA------------------------------------

  fetch('https://jsonplaceholder.typicode.com/photos?albumId=2')
    .then(response => response.json())
    .then(data => {
      // Получаем контейнер, в который будем вставлять элементы
      const topRowApps = document.querySelector('.top__row-rpa');

      // Создаем элементы для каждого из первых 6 элементов
      for (let i = 0; i < 6; i++) {
        const item = data[i];
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'top__item';

        const content = document.createElement('div');
        content.className = 'top__item-content';

        const image = document.createElement('div');
        image.className = 'top__item-image';
        const img = document.createElement('img');
        img.src = item.thumbnailUrl;
        img.alt = item.title;
        image.appendChild(img);

        const info = document.createElement('div');
        info.className = 'top__item-info';

        const name = document.createElement('div');
        name.className = 'top__item-name';
        name.textContent = item.title;

        const type = document.createElement('div');
        type.className = 'top__item-type';
        type.textContent = 'RPA';

        const author = document.createElement('div');
        author.className = 'top__item-author';
        author.textContent = 'Fosen IKT';

        info.appendChild(name);
        info.appendChild(type);
        info.appendChild(author);

        content.appendChild(image);
        content.appendChild(info);

        link.appendChild(content);
        topRowApps.appendChild(link);
      }
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
    });

     // ---TOP INTEGRASJONER------------------------------------

  fetch('https://jsonplaceholder.typicode.com/photos?albumId=3')
    .then(response => response.json())
    .then(data => {
      // Получаем контейнер, в который будем вставлять элементы
      const topRowApps = document.querySelector('.top__row-inreg');

      // Создаем элементы для каждого из первых 6 элементов
      for (let i = 0; i < 6; i++) {
        const item = data[i];
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'top__item';

        const content = document.createElement('div');
        content.className = 'top__item-content';

        const image = document.createElement('div');
        image.className = 'top__item-image';
        const img = document.createElement('img');
        img.src = item.thumbnailUrl;
        img.alt = item.title;
        image.appendChild(img);

        const info = document.createElement('div');
        info.className = 'top__item-info';

        const name = document.createElement('div');
        name.className = 'top__item-name';
        name.textContent = item.title;

        const type = document.createElement('div');
        type.className = 'top__item-type';
        type.textContent = 'Integrasjoner';

        const author = document.createElement('div');
        author.className = 'top__item-author';
        author.textContent = 'Fosen IKT';

        info.appendChild(name);
        info.appendChild(type);
        info.appendChild(author);

        content.appendChild(image);
        content.appendChild(info);

        link.appendChild(content);
        topRowApps.appendChild(link);
      }
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
    });

         // ---TOP TOP DOKUMENTER------------------------------------

  fetch('https://jsonplaceholder.typicode.com/photos?albumId=4')
    .then(response => response.json())
    .then(data => {
      // Получаем контейнер, в который будем вставлять элементы
      const topRowApps = document.querySelector('.top__row-docum');

      // Создаем элементы для каждого из первых 6 элементов
      for (let i = 0; i < 6; i++) {
        const item = data[i];
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'top__item';

        const content = document.createElement('div');
        content.className = 'top__item-content';

        const image = document.createElement('div');
        image.className = 'top__item-image';
        const img = document.createElement('img');
        img.src = item.thumbnailUrl;
        img.alt = item.title;
        image.appendChild(img);

        const info = document.createElement('div');
        info.className = 'top__item-info';

        const name = document.createElement('div');
        name.className = 'top__item-name';
        name.textContent = item.title;

        const type = document.createElement('div');
        type.className = 'top__item-type';
        type.textContent = 'Dokumenter';

        const author = document.createElement('div');
        author.className = 'top__item-author';
        author.textContent = 'Fosen IKT';

        info.appendChild(name);
        info.appendChild(type);
        info.appendChild(author);

        content.appendChild(image);
        content.appendChild(info);

        link.appendChild(content);
        topRowApps.appendChild(link);
      }
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
    });

    // ---------------------------------------------

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