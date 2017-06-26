function setYear() {
  var currentYear = new Date().getFullYear();
  $('.js-currentYear').html(currentYear);
}

// returns true if given element is within viewport or above viewport
$.fn.hasScrolledUpTo = function() {
  var win = $(window);
  var viewport = {};

  // scrollTop returns the scroll position from top
  viewport.top = win.scrollTop();
  viewport.bottom = viewport.top + win.height();
  
  // offset will return the current coordinates of the element
  var bounds = this.offset();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.bottom < bounds.top));
};

function setFixedHeader() {
  $(window).on('scroll', function() {
    if ($('.testimonials').hasScrolledUpTo() && !($('.footer').hasScrolledUpTo())) {
      $('.js-hero_header-fixed').fadeIn(400);
    } else {
      $('.js-hero_header-fixed').fadeOut(400);
    }
  });
}

$(document).ready(function() {
  setYear();
  setFixedHeader();
});
