import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.scss']
})
export class NewestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*==================================================================
 [ Isotope ]*/
    const $topeContainer = $('.isotope-grid');
    const $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
      $filter.on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter');
        (<any>$topeContainer).isotope({ filter: filterValue });
      });
    });

    // init Isotope
    $(window).on('load', function () {
      const $grid = $topeContainer.each(function () {
        (<any>$(this)).isotope({
          itemSelector: '.isotope-item',
          layoutMode: 'fitRows',
          percentPosition: true,
          animationEngine: 'best-available',
          masonry: {
            columnWidth: '.isotope-item'
          }
        });
      });
    });

    const isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function () {
      $(this).on('click', function () {
        for (let i = 0; i < isotopeButton.length; i++) {
          $(isotopeButton[i]).removeClass('how-active1');
        }

        $(this).addClass('how-active1');
      });
    });

    /*==================================================================
  [ Filter / Search product ]*/
    $('.js-show-filter').on('click', function () {
      $(this).toggleClass('show-filter');
      $('.panel-filter').slideToggle(400);

      if ($('.js-show-search').hasClass('show-search')) {
        $('.js-show-search').removeClass('show-search');
        $('.panel-search').slideUp(400);
      }
    });

    $('.js-show-search').on('click', function () {
      $(this).toggleClass('show-search');
      $('.panel-search').slideToggle(400);

      if ($('.js-show-filter').hasClass('show-filter')) {
        $('.js-show-filter').removeClass('show-filter');
        $('.panel-filter').slideUp(400);
      }
    });

    /*==================================================================
  [ Add wish ]*/
    $('.js-addwish-b2').on('click', function (e) {
      e.preventDefault();
    });

    $('.js-addwish-b2').each(function () {
      const nameProduct = $(this)
        .parent()
        .parent()
        .find('.js-name-b2')
        .html();
      $(this).on('click', function () {
        swal(nameProduct, 'is added to wishlist !', 'success');

        $(this).addClass('js-addedwish-b2');
        $(this).off('click');
      });
    });
  }

}
