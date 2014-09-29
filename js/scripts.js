var jsConf;

jsConf = (function ($, window, document) {

  function calendar() {
    var $calendar_buttons = $('.section-calendar .calendar-menu .button');
    var $calendar_holder = $('.section-calendar .event-calendar-holder');
    var $calendars = $calendar_holder.find('.event-calendar');

    $calendar_buttons.click(function(event){
      event.preventDefault();

      var $button = $(this);
      var day = $(this).data('day');
      $calendar_buttons.not($button).removeClass('active');
      $button.addClass('active');

      var $calendar = $calendars.filter('[data-day="'+day+'"]');
      var $old_calendars = $calendars.filter('.active').not($calendar);

      // Sorry.
      $old_calendars.addClass('active animate-left');
      setTimeout(function(){
        $old_calendars.removeClass('active animate-left');
        $calendar.addClass('active animate-right');
        setTimeout(function(){
          $calendar.removeClass('animate-right');
        }, 16);
      }, 250);

    });
  }

  function init() {
    calendar();
    new WOW().init();
  }

  return {
    init: init
  }
})(jQuery, window, document);

$(function() {
  jsConf.init();
});
