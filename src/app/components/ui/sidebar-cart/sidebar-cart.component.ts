import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-sidebar-cart',
  templateUrl: './sidebar-cart.component.html',
  styleUrls: ['./sidebar-cart.component.scss']
})
export class SidebarCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click', function() {
      $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click', function() {
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ PerfectScrollbar ]*/
    $('.js-pscroll').each(function () {
      $(this).css('position', 'relative');
      $(this).css('overflow', 'hidden');
      const ps = new PerfectScrollbar(this, {
        wheelSpeed: 1,
        scrollingThreshold: 1000,
        wheelPropagation: false,
      });

      $(window).on('resize', function () {
        ps.update();
      });
    });

  }

}
