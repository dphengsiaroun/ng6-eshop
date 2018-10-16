import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

            /*==================================================================
        [ Slick1 ]*/
        $('.wrap-slick1').each(function() {
          const wrapSlick1 = $(this);
          const slick1 = $(this).find('.slick1');


          const itemSlick1 = $(slick1).find('.item-slick1');
          const layerSlick1 = $(slick1).find('.layer-slick1');
          const actionSlick1 = [];


          $(slick1).on('init', function() {
              const layerCurrentItem = $(itemSlick1[0]).find('.layer-slick1');

              for (let i = 0; i < actionSlick1.length; i++) {
                  clearTimeout(actionSlick1[i]);
              }

              $(layerSlick1).each(function() {
                  $(this).removeClass($(this).data('appear') + ' visible-true');
              });

              for (let i = 0; i < layerCurrentItem.length; i++) {
                  actionSlick1[i] = setTimeout(function(index) {
                      $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
                  }, $(layerCurrentItem[i]).data('delay'), i);
              }
          });


          let showDot = false;
          if ($(wrapSlick1).find('.wrap-slick1-dots').length > 0) {
              showDot = true;
          }

          (<any>$(slick1)).slick({
              pauseOnFocus: false,
              pauseOnHover: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              speed: 1000,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 6000,
              arrows: true,
              appendArrows: $(wrapSlick1),
              prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
              nextArrow: '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
              dots: showDot,
              appendDots: $(wrapSlick1).find('.wrap-slick1-dots'),
              dotsClass: 'slick1-dots',
              customPaging: function(slick, index) {
                  const linkThumb = $(slick.$slides[index]).data('thumb');
                  const caption = $(slick.$slides[index]).data('caption');
                  console.log('linkThumb', linkThumb, 'caption', caption);
                  return  '<img src="' + linkThumb + '">' +
                          '<span class="caption-dots-slick1">' + caption + '</span>';
              },
          });

          $(slick1).on('afterChange', function(event, slick, currentSlide) {

              const layerCurrentItem = $(itemSlick1[currentSlide]).find('.layer-slick1');

              for (let i = 0; i < actionSlick1.length; i++) {
                  clearTimeout(actionSlick1[i]);
              }

              $(layerSlick1).each(function() {
                  $(this).removeClass($(this).data('appear') + ' visible-true');
              });

              for (let i = 0; i < layerCurrentItem.length; i++) {
                  actionSlick1[i] = setTimeout(function(index) {
                      $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
                  }, $(layerCurrentItem[i]).data('delay'), i);
              }
            });
        });

  }

}
