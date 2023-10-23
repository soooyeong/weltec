
$('.sub-menu').stop().slideUp(200); 
$('.btn-menu').on({
    mouseenter:	function(){
        $('.sub-menu').stop().slideDown(300);
    }
});
$('.nav2').on({
    mouseleave:	function(){
        $('.sub-menu').stop().slideUp(200);
    }
});
$('.sub-menu').on({
    mouseleave:	function(){
        $('.sub-menu').stop().slideUp(300);
    }
});

$('.btn-menu').each(function() {
    $(this).click(function() {
        $('.btn-menu').removeClass('active'); // 다른 모든 .btn-sub 요소의 'active' 클래스 제거
        $(this).addClass('active'); // 클릭한 .btn-sub 요소에 'active' 클래스 추가
    });
});
$('.btn-sub').each(function() {
    $(this).click(function() {
        $('.btn-sub').removeClass('active'); // 다른 모든 .btn-sub 요소의 'active' 클래스 제거
        $(this).addClass('active'); // 클릭한 .btn-sub 요소에 'active' 클래스 추가
    });
});

$('.btn-filter-close').click(function() {
   $('.nav-filter').hide();
});

// 다시 .input-search 클릭 시 .nav-filter 나타나도록 처리
$('.input-search').click(function() {
    if (!$('.nav-filter').hasClass('active')) {
        $('.nav-filter').show();
    }
});

$('.btn-recently').click(function() {
    $('.view-modal').addClass('active')
 });
$('.btn-view-close').click(function() {
    $('.view-modal').removeClass('active')
 });


 
 $('.nav_mo ul.menu_wrap .menu').click(function() {
    // 모든 .menu 요소에서 'active' 클래스 제거
    $('.nav_mo ul.menu_wrap .menu').removeClass('active');
    
    // 현재 클릭한 .menu 요소에 'active' 클래스 추가
    $(this).addClass('active');
    
    // 현재 클릭한 .menu 요소의 인덱스 찾기
    var index = $(this).index();
    
    // 현재 클릭한 .menu 요소의 .sub_menu 토글
    var $subMenu = $('.nav_mo .sub_menu').eq(index);
    $subMenu.toggleClass('active');
    
    // 다른 .sub_menu 요소는 숨기기
    $('.nav_mo .sub_menu').not($subMenu).removeClass('active');
});



$('.btn_footer').each(function(index) {
    $(this).click(function() {
        $('.footer_nav .inner ul li').removeClass('active')
        $('.footer_nav .inner ul li').eq(index).addClass('active')
    });
});
$('.btn_category').click(function() {
    $('.nav-filter').removeClass('active');
    $('.nav_mo').toggleClass('active');
});
$('.btn_search').click(function() {
    $('.nav_mo').removeClass('active');
    $('.nav-filter').toggleClass('active');
});


 $(document).ready(function(){
    $('.__count_range input[count_range]').click(function(e){
        e.preventDefault();
        var type = $(this).attr('count_range');
        var $count = $(this).parent().children('input.count');
        var count_val = $count.val(); // min 1
        if(type=='m'){
            if(count_val<1){
                return;
            }
            $count.val(parseInt(count_val)-1);
        }else if(type=='p'){
            $count.val(parseInt(count_val)+1);
        }
    });
});

// 첨부파일 업로드
$(document).ready(function(){

    //$('#ex_filename').change(function() {
    //	var filename = $(this).val();
    //	$('.upload-name').val(filename);
    //});

    var fileTarget = $('.file-upload .upload-hidden');

    fileTarget.on('change', function(){  // 값이 변경되면
         if(window.FileReader){  // modern browser
              var filename = $(this)[0].files[0].name;
         } 
         else {  // old IE
              var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
         }

         // 추출한 파일명 삽입
         $(this).siblings('.upload-name').val(filename);
    });
}); 

//preview image 
var imgTarget = $('.preview-image .upload-hidden');

imgTarget.on('change', function(){
    var parent = $(this).parent();
    parent.children('.upload-display').remove();

    if(window.FileReader){
         //image 파일만
         if (!$(this)[0].files[0].type.match(/image\//)) return;

         var reader = new FileReader();
         reader.onload = function(e){
              var src = e.target.result;
              parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="'+src+'" class="upload-thumb"></div></div>');
         }
         reader.readAsDataURL($(this)[0].files[0]);
    }

    else {
         $(this)[0].select();
         $(this)[0].blur();
         var imgSrc = document.selection.createRange().text;
         parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

         var img = $(this).siblings('.upload-display').find('img');
         img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";        
    }
});



var ttt=$("#test").text();


$("#he").click(function(){
ttt++;
$('#test').text(ttt);
})