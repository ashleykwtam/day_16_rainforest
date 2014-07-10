// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/



$(document).on('ready page:load', function(){
  if ($('.pagination').length){
    $(window).scroll(function(){
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop > $(document).height() - $(window).height() - 50){
        $('.pagination').text("Loading more products...");
        return $.getScript(url);
      }
    });
  }
});

// $(document).on('ready page:load', function(){
//   $(window).scroll(function(){
//     if ($(window).scrollTop() > $(document).height() - $(window).height() - 50){
//       $.getScript($('.pagination span.next').children().attr('href'));
//     }
//   });
// })

// $(document).on('ready page:load', function() {
//   if ($('.pagination').length) {
//     $(window).scroll(function() {
//       var url = $('.pagination span.next').children().attr('href');
//       if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
//         $('.pagination').text("Fetching more products...");
//         return $.getScript(url);
//       }
//     });
//   }
// });