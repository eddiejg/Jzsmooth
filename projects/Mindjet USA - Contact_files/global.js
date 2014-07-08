jQuery(document).ready(function() {
  
  jQuery('a.search').on('click', function(e) {
    
    var target = jQuery(this).attr('href');
    
    if (jQuery(this).hasClass('open')) {
      
      jQuery(target).submit();
      
    }
    else {
         
      var width = jQuery(target).css('width');
      var paddingLeft = jQuery(target).css('padding-left');
      var paddingRight = jQuery(target).css('padding-right');
      
      jQuery(target).css({
        'padding-left': 0,
        'padding-right': 0,
        'display': 'block',
        'width': 0
      }).animate({
        width: width,
        'padding-left': paddingLeft,
        'padding-right': paddingRight
      });
      
      jQuery('.nav.search').animate({
        'margin-right': '-20px'
      });
      
      jQuery(this).addClass('open');
      
    }
    
    e.preventDefault();
    
  });
  
  
  jQuery('#search .close').on('click', function(e) {
    
    var target = jQuery(this).parents('form');
    
    var width = jQuery(target).css('width');
    var paddingLeft = jQuery(target).css('padding-left');
    var paddingRight = jQuery(target).css('padding-right');
    
    jQuery(target).animate({
      width: 0,
      'padding-left': 0,
      'padding-right': 0
    }, function() {
      jQuery(target).css({
        'padding-left': paddingLeft,
        'padding-right': paddingRight,
        'display': 'none',
        'width': width
      });
    });
    
    jQuery('.nav.search').animate({
        'margin-right': 0
    });
    
    jQuery('a.search').removeClass('open');
    
    e.preventDefault();
    
  });
  
});