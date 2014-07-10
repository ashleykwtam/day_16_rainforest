// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on('ready page:load', function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchValue = $('#search').val();

    // $.ajax({
    //   url: '/products?search=' + searchValue,
    //   type: 'GET',
    //   dataType: 'html',
    // }).done(function(data){
    //   $('#products').html(data);
    // });

    // $.get('/products?search=' + searchValue)
    //   .done(function(data){
    //     console.log(data);
    //     $('#products').html(data);
    //   });

    $.getScript('/products?search=' + searchValue);
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        return alert('near bottom');
    }
  })
});