$(function () {
    $('.navi-icon').click(function () {
        $('.menu-modal').addClass('showed');
        $('.menu-modal').fadeIn();
    });


    $('.close-icon').click(function () {
        $('.menu-modal').removeClass('showed');
        $('.menu-modal').fadeOut();
    });


    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function () {
        //メニュー閉じる
        $('.menu-modal').removeClass('showed');
        $('.menu-modal').hide();

        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top - 10;
        // スムーススクロール
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });

    $(window).scroll(function (){
        $('.fadein').each(function(){
          var elementTop = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elementTop - windowHeight + 100){
            $(this).addClass('scrollin');
          }
        });
    });

    $('.catch').delay(500).fadeIn(2000);

});

