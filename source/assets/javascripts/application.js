//= require_tree .

$(document).ready(function() {
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });


  var navbar = $('.navbar-static-top'),
      distance = navbar.offset().top,
      $window = $(window);

  $window.scroll(function() {
      if ($window.scrollTop() > distance) {
          navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          $(".nav-bar li a").css("color", "#fff");
      } else {
          navbar.removeClass('navbar-fixed-top');
          $("body").css("padding-top", "0px");
      }
  });


  $(function() {
    $("#modal-1").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });

  $('.js-accordion-trigger').bind('click', function(e){
    jQuery(this).parent().find('.accordion-content').slideToggle('fast');  // apply the toggle to the ul
    jQuery(this).parent().toggleClass('is-expanded');
    e.preventDefault();
  });

  (function (jQuery) {
    jQuery.mark = {
      jump: function (options) {
        var defaults = {
          selector: 'a.scroll-on-page-link'
        };
        if (typeof options == 'string') {
          defaults.selector = options;
        }

        options = jQuery.extend(defaults, options);
        return jQuery(options.selector).click(function (e) {
          var jumpobj = jQuery(this);
          var target = jumpobj.attr('href');
          var thespeed = 1000;
          var offset = jQuery(target).offset().top;
          jQuery('html,body').animate({
            scrollTop: offset
          }, thespeed, 'swing');
          e.preventDefault();
        });
      }
    };
  })(jQuery);


jQuery(function(){  
  jQuery.mark.jump();
});




});
