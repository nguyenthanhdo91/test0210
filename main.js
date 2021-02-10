$(function(){
    // alert("aaaa")
    let message ='iquery  verision is ' + $.fn.jquery;
    console.log (message)
    $('#title').val('hello')
    let target = $('#itemList li');
    target.removeClass('item[1]');
    target.addClass('item');
    target.css('color', 'red');


})
