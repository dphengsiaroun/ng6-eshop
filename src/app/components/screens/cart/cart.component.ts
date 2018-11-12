import { Component, OnInit } from "@angular/core";
import PerfectScrollbar from "perfect-scrollbar";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /*==================================================================
  [ js-select2 ]*/
    $(".js-select2").each(function() {
      (<any>$(this)).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next(".dropDownSelect2")
      });
    });

    /*==================================================================
		[ +/- num product ]*/
    $(".btn-num-product-down").on("click", function() {
      const numProduct = Number(
        $(this)
          .next()
          .val()
      );
      if (numProduct > 0) {
        $(this)
          .next()
          .val(numProduct - 1);
      }
    });

    $(".btn-num-product-up").on("click", function() {
      const numProduct = Number(
        $(this)
          .prev()
          .val()
      );
      $(this)
        .prev()
        .val(numProduct + 1);
    });
  }
}
