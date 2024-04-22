//Accordions Animation
$(window).on('load', function () {

  //Set default states
  $('.accordions_hidden').css({
    'opacity': '0%',
    'max-height': 0,
    'display': 'none'
  });

  //On click event
  $('.accordions_button').on('click', function () {
    var hiddenContent = $(this).siblings('.accordions_hidden');
    var arrow = $(this).find('.why-accordion_arrow');
    var readMoar = $(this).find('.why-accordion_arrow-text.read-more');
    var collapse = $(this).find('.why-accordion_arrow-text.collapse');
    var isClosed = hiddenContent.css('opacity') == 0;
    
    if (isClosed) {
      
      //Open accordion
      hiddenContent.css('max-height','none')
      hiddenContent.find('.accordions_hidden').each(function() {
          $(this).css('max-height', 'none');
          $(this).css('display', 'flex');
      });
      var estimateHeight = hiddenContent.height() * 1.75
      hiddenContent.css('max-height',0)
      hiddenContent.find('.accordions_hidden').each(function() {
          $(this).css('max-height', 0);
          $(this).css('display', 'none');
          $(this).css('opacity',0)
          var button = $(this).siblings('.accordions_button')
          button.find('.why-accordion_arrow').css('transform', 'scale3d(1, 1, 1) rotateZ(0deg)');
          button.find('.why-accordion_arrow-text.read-more').css('display', 'block');
          button.find('.why-accordion_arrow-text.collapse').css('display', 'none');
      });
      hiddenContent.css('display', 'flex');
      readMoar.css('display', 'none');
      collapse.css('display', 'block');
      hiddenContent.animate({
        "max-height": estimateHeight
        }, 400 );
      arrow.css('transform', 'scale3d(1, 1, 1) rotateZ(180deg)');
      hiddenContent.css('opacity', 1);
    } else {
      
      //Close accordion
      hiddenContent.css('opacity', 0);
      arrow.css('transform', 'scale3d(1, 1, 1) rotateZ(0deg)');
      readMoar.css('display', 'block');
      collapse.css('display', 'none');
      hiddenContent.animate({
        "max-height": 0
        }, 400 );
      setTimeout(() => {
        hiddenContent.css('display', 'none');
      }, 400);
      
    }
  });

});
