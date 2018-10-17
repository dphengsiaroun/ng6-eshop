import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /*[ Back to top ]
    ===========================================================*/
    const windowH = $(window).height() / 2;

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > windowH) {
            $('#myBtn').css('display', 'flex');
        } else {
            $('#myBtn').css('display', 'none');
        }
    });

    $('#myBtn').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 300);
    });

  }

}
