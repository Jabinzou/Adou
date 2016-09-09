 $(function() {   
        checkPosition($(window).height());
        
        $(".flexslider").flexslider({
          animationSpeed:600,
          slideshowSpeed:3000,
        });  

        $(".text-slider .flex-direction-nav a.flex-prev").html('').removeClass('flex-prev');
        $(".text-slider .flex-direction-nav a.flex-next").html('').removeClass('flex-next');
        // 轮播
        $('#ad-carousel').carousel({
            interval:2000,
          });
         // 右侧导航栏hover事件
        $('.toolbar-item').hover(function(){
          $(this).children('.toolbar-layer-weixin').css({
            opacity: '1',
            transform: 'scale(1)'
          })
          $(this).children('.toolbar-layer-download').css({
            opacity: '1',
            transform: 'scale(1)'
          });
        },function(){
          $(this).children('.toolbar-layer-weixin').css({
            opacity: '0',
            transform: 'scale(0.1)'
          })
          $(this).children('.toolbar-layer-download').css({
            opacity: '0',
            transform: 'scale(0.1)'
          });
        })
          
     // 返回顶部
          $(window).on('scroll',function(){
          checkPosition($(window).height());
        });
        $('#backtop').on('click',function(){
          $('html,body').animate({
            scrollTop:0
          },800)
        })
        // checkPosition($(window).height());
        function checkPosition(pos){
          if ($(window).scrollTop() > pos) {
            $('#backtop').fadeIn('fast');
          }else{
            $('#backtop').fadeOut('fast');
          }
        };
       $('#member').find('.gallery-item').hover(function(){
        $(this).children('.gallery-item-overlay,.gallery-item-text').fadeOut(600);
       },function(){
        $(this).children('.gallery-item-overlay,.gallery-item-text').slideDown(300);
       })
       $("input[type=file]").change(function(){$(this).parents(".uploader").find(".filename").val($(this).val());});
        $("input[type=file]").each(function(){
        if($(this).val()==""){$(this).parents(".uploader").find(".filename").val("No file selected...");}
        });
      });  