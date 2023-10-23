$(window).scroll(function(){
    var winH = $(window).height();
    
    if( $(this).scrollTop() >= winH - 100 ){
        $('.nav2').addClass('active');
        
    }
    else{
        $('.nav2').removeClass('active');
    }

    if( $(window).scrollTop() >= $('.mainSection01').offset().top - 500 ){
        $('.mainSection01').addClass('active')
    } 
    if($(window).scrollTop() >= $('.mainSection02').offset().top - 600) {
        $('.mainSection02').addClass('active')
    } 
    if($(window).scrollTop() >= $('.mainSection03').offset().top - 700) {
        $('.mainSection03').addClass('active')
    } 
    if($(window).scrollTop() >= $('.mainSection04').offset().top - 600) {
        $('.mainSection04').addClass('active')
    } 
    if($(window).scrollTop() >= $('.mainSection05').offset().top - 500) {
        $('.mainSection05').addClass('active')
    } 
    if($(window).scrollTop() >= $('.mainSection06').offset().top - 600) {
        $('.mainSection06').addClass('active')
    } 
    if($(window).scrollTop() >= $('.mainSection07').offset().top - 500) {
        $('.mainSection07').addClass('active')
    }
    if($(window).scrollTop() >= $('.mainSection08').offset().top - 700) {
        $('.mainSection08').addClass('active')
    }

});

$('.product-image').mouseenter(function() {
    alert('dd')
    // 마우스가 이미지 위에 올라갈 때 실행할 코드를 여기에 작성합니다.
    // 예를 들어, 이미지를 확대하거나 다른 효과를 적용할 수 있습니다.
    // $(this).css('transform', 'scale(1.1)'); // 이미지 확대 예시
});