/* browsertiles. 2010. Paul M. Watson <paul@paulmwatson.com> */
$(document).ready()
{
  $('[data-target]').click(function()
    {
      console.log($(window).width());
      var originating = $(this);
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
    });
};