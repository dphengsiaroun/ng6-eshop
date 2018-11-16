import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
	selector: 'app-modal-product',
	templateUrl: './modal-product.component.html',
	styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {
	constructor() {}

	ngOnInit() {
	/*==================================================================
		[ Show modal1 ]*/
	$('.js-show-modal1').on('click', function(e) {
	  e.preventDefault();
	  $('.js-modal1').addClass('show-modal1');
	});

	$('.js-hide-modal1').on('click', function() {
	  $('.js-modal1').removeClass('show-modal1');
	});

	/*==================================================================
		[ +/- num product ]*/
	$('.btn-num-product-down').on('click', function() {
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

	$('.btn-num-product-up').on('click', function() {
	  const numProduct = Number(
		$(this)
		  .prev()
		  .val()
	  );
	  $(this)
		.prev()
		.val(numProduct + 1);
	});

	/*==================================================================
	[ Rating ]*/
	$('.wrap-rating').each(function() {
	  const item = $(this).find('.item-rating');
	  let rated = -1;
	  const input = $(this).find('input');
	  $(input).val(0);

	  $(item).on('mouseenter', function() {
		const index = item.index(this);
		let i = 0;
		for (i = 0; i <= index; i++) {
		  $(item[i]).removeClass('zmdi-star-outline');
		  $(item[i]).addClass('zmdi-star');
		}

		for (let j = i; j < item.length; j++) {
		  $(item[j]).addClass('zmdi-star-outline');
		  $(item[j]).removeClass('zmdi-star');
		}
	  });

	  $(item).on('click', function() {
		const index = item.index(this);
		rated = index;
		$(input).val(index + 1);
	  });

	  $(this).on('mouseleave', function() {
		let i = 0;
		for (i = 0; i <= rated; i++) {
			$(item[i]).removeClass('zmdi-star-outline');
			$(item[i]).addClass('zmdi-star');
		}

		for (let j = i; j < item.length; j++) {
		  $(item[j]).addClass('zmdi-star-outline');
		  $(item[j]).removeClass('zmdi-star');
		}
	  });
	});

	/*==================================================================
			[ js-select2 ]*/
	$('.js-select2').each(function() {
	  (<any>$(this)).select2({
		minimumResultsForSearch: 20,
		dropdownParent: $(this).next('.dropDownSelect2')
	  });
	});

	/*==================================================================
			[ MagnificPopup ]*/
	$('.gallery-lb').each(function() {
	  // the containers for all your galleries
	  (<any>$(this)).magnificPopup({
		delegate: 'a', // the selector for gallery item
		type: 'image',
		gallery: {
		  enabled: true
		},
		mainClass: 'mfp-fade'
	  });
	});

	/*==================================================================
	[ Add Wish ]*/
	$('.js-addwish-detail').each(function() {
	const nameProduct = $(this)
		.parent()
		.parent()
		.parent()
		.find('.js-name-detail')
		.html();

	$(this).on('click', function() {
		swal(nameProduct, 'est ajouté à vos favoris !', 'success');

		$(this).addClass('js-addedwish-detail');
		$(this).off('click');
	});
	});

	/*==================================================================
			[ Add cart ]*/
	$('.js-addcart-detail').each(function() {
	  const nameProduct = $(this)
		.parent()
		.parent()
		.parent()
		.parent()
		.find('.js-name-detail')
		.html();
	  $(this).on('click', function() {
		swal(nameProduct, 'est ajouté à votre panier !', 'success');
	  });
	});

	/*==================================================================
			[ Slick3 ]*/
	$('.wrap-slick3').each(function() {
	  (<any>$(this).find('.slick3')).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 6000,

		arrows: true,
		appendArrows: $(this).find('.wrap-slick3-arrows'),
		prevArrow:
		  '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow:
		  '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

		dots: true,
		appendDots: $(this).find('.wrap-slick3-dots'),
		dotsClass: 'slick3-dots',
		customPaging: function(slick, index) {
		  const portrait = $(slick.$slides[index]).data('thumb');
		  return (
			'<img src=" ' +
			portrait +
			' "/><div class="slick3-dot-overlay"></div>'
		  );
		}
	  });
	});
  }
}
