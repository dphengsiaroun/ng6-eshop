import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import "animsition";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ng6-shop";

  constructor(private router: Router) { }

  ngOnInit() {
    // (<any>$(".animsition")).animsition({
    //   inClass: "fade-in",
    //   outClass: "fade-out",
    //   inDuration: 1500,
    //   outDuration: 800,
    //   linkElement: ".animsition-link",
    //   loading: true,
    //   loadingParentElement: "html",
    //   loadingClass: "animsition-loading-1",
    //   loadingInner: '<div class="loader05"></div>',
    //   timeout: false,
    //   timeoutCountdown: 5000,
    //   onLoadEvent: true,
    //   browser: ["animation-duration", "-webkit-animation-duration"],
    //   overlay: false,
    //   overlayClass: "animsition-overlay-slide",
    //   overlayParentElement: "html",
    //   transition: function(url) {
    //     window.location.href = url;
    //   }
    // });

  }
}
