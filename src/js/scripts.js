$(document).ready(function() {

  $('.feedback__slider').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/next.svg" alt="next"></button>'
  });
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlied(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__model').eq(i).toggleClass('catalog-item__model_active');
        $('.catalog-item__model-desc').eq(i).toggleClass('catalog-item__model-desc_active');
      })
    });
  };

  toggleSlied('.catalog-item__link');
  toggleSlied('.catalog-item__back');
  
});
