import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click', function() {
      $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click', function() {
        $('.js-sidebar').removeClass('show-sidebar');
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
