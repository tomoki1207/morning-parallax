$(function(){
     var $eyecatch = $('.eye-catch');
     $eyecatch.css('top', ( $eyecatch.closest('div').height() - $eyecatch.height()) / 2);
     $eyecatch.css('left', ( $eyecatch.closest('div').width() - $eyecatch.width()) / 2);
});
$(window).load(function() {
     $('.loading').css('display', 'none');
      $('.container').css('display', 'block');
	 // サイズ変更
	 var suiteSize = function() {
          var h = $(window).height();
          var w = $(window).width();
          	$('.viewable-area').height(h);
          	$('.viewable-area').width(w);
          	$('.passage').height(h);
          	$('.passage').width(w);
          	$('.morning-images').height(h);
          	$('.morning-images').width(w);
          /**	var $imgs = $('.morning-images').find('.office-image');
          if(h > w) {
          	$imgs.css('height', h);
          	$imgs.css('width', 'auto');
          }
          else {
          	$imgs.css('width', w);
          	$imgs.css('height', 'auto');
          }*/
          var $caption = $('.caption');
          $caption.css('top', ( $caption.closest('div').height() - $caption.height()) / 2);
          $caption.css('left', ( $caption.closest('div').width() - $caption.width()) / 2);
	 };
     suiteSize();
     $(window).bind('resize', suiteSize);
	 
	 $('.sun').css({'bottom' : 0, 'left' : 0});
	 
	 // スクロール
     $(window).scroll(function() {
          var value = $(this).scrollTop();
          $('#scrollValue').text(value);
          
          // 透過
          var opacityrate = (value === 0) ? 1 : 1 - value*2 / 2732;
          $('.passage').css('opacity', opacityrate);
          $('.viewable-area').css('padding-top', value);
          suiteSize();
          
          // 1/4 円
          (function(){
          	$('.sun').removeClass('what-is');
          	$('.sun').children().remove();
          	var r = ($(window).width() / 2) * 0.6;
          	
          	var rad = Math.PI - (Math.PI / 2) * (value*2 / 3000);
          	
          	if(rad < Math.PI / 2)
          	{
          		//$('.sun').append('<span class="sun-title">朝活</span>');
          		$('.sun').addClass('what-is');
          		return;
          	}
          	
          	var x = r * Math.cos(rad);
          	var y = r * Math.sin(rad);
          	
          	$('.sun').css({'bottom' : y, 'left' : r + x});
          })();
     });
});