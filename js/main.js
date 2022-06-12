//home slider
var swiper = new Swiper('.main-slider', {
  loop:true,
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
});
// new pro slider
var swiper = new Swiper(".new-pro-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});
  // virus pro slider
  var swiper = new Swiper(".virus-pro-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next4",
      prevEl: ".prev4",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
  // blog slider
  var swiper = new Swiper(".blog-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next6",
      prevEl: ".prev6",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
// brand slider
var swiper = new Swiper('.swiper-brand', {
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: '.next5',
    prevEl: '.prev5',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  }
});
// cart plus minus
$(document).ready(function () {
  $('.count').prop('disabled', true);
  $(document).on('click', '.plus', function () {
    $('.count').val(parseInt($('.count').val()) + 1);
  });
  $(document).on('click', '.minus', function () {
    $('.count').val(parseInt($('.count').val()) - 1);
    if ($('.count').val() == 0) {
      $('.count').val(1);
    }
  });
});
// bin
$(document).ready(function () {
  $(".bin-cart").click(function () {
    $(".item-cart-box").fadeOut();
  });
});
$(".close-alert-box").click(function () {
  $(".db-msg-alert-box").fadeOut();
});
// start product detail
// number incerement decerement
(function () {

  window.inputNumber = function (el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function () {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if (!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if (!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));
// tab
$(document).ready(function () {

    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })

  })
  // related product swiper
  var swiper = new Swiper(".relatedproducts", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
  // 360 product
  var threesixty = new ThreeSixty(document.getElementById('threesixty'), {
    image: 'https://codyhouse.co/demo/360-degrees-product-viewer/img/alfa.png',
    width: 1200,
    height: 500,
    count: 16,
    perRow: 16,
    speed: 150,
    draggable: false,
    swipeable: false,
    keys: false,
    prev: document.querySelector('.prev'),
    next: document.querySelector('.next'),
    inverted: false
  });
  
  threesixty.play();
  threesixty.goTo(1)
  document.getElementById('threesixty').style.cursor = 'ew-resize';
  // our gallery swiper
  
