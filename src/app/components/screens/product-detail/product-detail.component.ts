import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../service/product.service';
import { Product } from "../../../product";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
        console.log('product', this.product);
      });
  }

  /*==================================================================
  [ Add Cart ]*/
  addCart(): void {
    $(".js-addcart-detail").each(function() {
      var nameProduct = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .find(".js-name-detail")
        .html();
      $(this).on("click", function() {
        swal(nameProduct, "est ajouté à votre panier !", "success");
      });
    });
  }

  /*==================================================================
  [ Add Wish ]*/
  addWish(): void {
    event.preventDefault();
    console.log('addWish');
    $(".js-addwish-b2, .js-addwish-detail").on("click", function(e) {
      e.preventDefault();
    });

    $(".js-addwish-b2").each(function() {
      var nameProduct = $(this)
        .parent()
        .parent()
        .find(".js-name-b2")
        .html();
      $(this).on("click", function() {
        swal(nameProduct, "is added to wishlist !", "success");

        $(this).addClass("js-addedwish-b2");
        $(this).off("click");
      });
    });

    $(".js-addwish-detail").each(function() {
      var nameProduct = $(this)
        .parent()
        .parent()
        .parent()
        .find(".js-name-detail")
        .html();

      $(this).on("click", function() {
        swal(nameProduct, "est ajouté à vos favoris !", "success");

        $(this).addClass("js-addedwish-detail");
        $(this).off("click");
      });
    });
  }

  ngOnInit() {
    this.getProduct();

    /*==================================================================
    [ Rating ]*/
    $(".wrap-rating").each(function() {
      const item = $(this).find(".item-rating");
      let rated = -1;
      const input = $(this).find("input");
      $(input).val(0);

      $(item).on("mouseenter", function() {
        const index = item.index(this);
        let i = 0;
        for (i = 0; i <= index; i++) {
          $(item[i]).removeClass("zmdi-star-outline");
          $(item[i]).addClass("zmdi-star");
        }

        for (let j = i; j < item.length; j++) {
          $(item[j]).addClass("zmdi-star-outline");
          $(item[j]).removeClass("zmdi-star");
        }
      });

      $(item).on("click", function() {
        const index = item.index(this);
        rated = index;
        $(input).val(index + 1);
      });

      $(this).on("mouseleave", function() {
        let i = 0;
        for (i = 0; i <= rated; i++) {
          $(item[i]).removeClass("zmdi-star-outline");
          $(item[i]).addClass("zmdi-star");
        }

        for (let j = i; j < item.length; j++) {
          $(item[j]).addClass("zmdi-star-outline");
          $(item[j]).removeClass("zmdi-star");
        }
      });
	});
	
    /*==================================================================
        [ MagnificPopup ]*/
    $(".gallery-lb").each(function() {
      // the containers for all your galleries
      (<any>$(this)).magnificPopup({
        delegate: "a", // the selector for gallery item
        type: "image",
        gallery: {
          enabled: true
        },
        mainClass: "mfp-fade"
      });
    });

    /*==================================================================
        [ Slick2 ]*/
    $(".wrap-slick2").each(function() {
      (<any>$(this).find(".slick2")).slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $(this),
        prevArrow:
          '<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

    $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
      var nameTab = $(e.target).attr("href");
      (<any>$(nameTab).find(".slick2")).slick("reinit");
    });

  }
}
