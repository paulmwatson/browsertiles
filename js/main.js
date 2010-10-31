/* browsertiles. 2010. Paul M. Watson <paul@paulmwatson.com> */
$(document).ready(function()
  {
    $('[data-target] form').submit(function()
      {
        browsertiles.loadTarget($(this).parents('[data-target]'));
      });
    
    $('[data-target-activation="click"]').click(function()
      {
        browsertiles.loadTarget($(this));
      });
      
    $('#theme_selector button').click(function()
      {
        var theme_button = $(this);
        var theme_name = theme_button.attr('data-theme-name');
        var current_theme_name = $('body').attr('data-current-theme-name');
        $('body').attr('data-current-theme-name', theme_name);
        $('body').removeClass('theme_' + current_theme_name);
        $('body').addClass('theme_' + theme_name);
      });
  });
  
var browsertiles = {};

browsertiles.loadTarget = function(originating)
  {
    var target = originating.attr('data-target');
    var targetPage = $('#page_' + target);
    var originatingPage = originating.parents('.page');
  
    targetPage.css('left', '');
    originatingPage.css('z-index', 0);
  
    if (targetPage.length > 0)
    {
    
      if (originating.is('.backwards'))
      {
        targetPage
          .show()
          .css('z-index', 99)
          .css('left', '-' + $(window).width() + 'px')
          .animate({left: ['-50px', 'swing']}, function()
            {
              targetPage.addClass('current');
            });
        originatingPage
          .css('left', '-50px')
          .animate({left: [$(window).width(), 'swing']}, function()
          {
            originatingPage.removeClass('current');
          });
      }
      else
      {
        originatingPage
          .animate({left: ['-' + $(window).width() + 'px', 'swing']});
        targetPage
          .css('z-index', 99)
          .css('left', $(window).width())
          .animate({left: ['-50px', 'swing']}, function()
          {
            targetPage.addClass('current');
            originatingPage
              .removeClass('current')
              .css('left', '');
          });
      }
    }
  };