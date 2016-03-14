/*!
 * jQuery method and function mImageLoader v1.0
 * Copyright 2016 maam.inc
 * Contributing Author: Hiroki Homma
 * Require for jQuery v1.7 or above
 */
 (function($) {
  $.mImageLoader = function(target) {
    var $target;

    if(target instanceof jQuery) {
      $target = target;

    } else if(typeof target === 'object') {
      $target = $(target);

    } else if(typeof target === 'string') {
      $target = $(target);

    } else {
      return;
    }

    if(!$target.attr('data-src')) {
      $target = $('img[data-src]', $target);
    }

    $target.each(function() {
      $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
    });

    return false;
  };

  $.fn.mImageLoader = function() {
    var $self = this;

    $self.each(function(){
      $.mImageLoader(this);
    });
  };
 })(jQuery);
