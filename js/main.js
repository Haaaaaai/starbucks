$(document).ready(function(){
    $(".search_btn").click(function(){
        $(".search_area").animate({"width":180});
        $(".login input").animate({"width":140});
        $(".login ul").animate({"margin-right":200});
    });

    //pc버전 글로벌 내비게이션 주메뉴 - 마우스 오버, 서브메뉴 슬라이드다운
    $(".mainmenu nav > ul > li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown(300);
    });
    //pc버전 글로벌 내비게이션 주메뉴 - 마우스 아웃, 서브메뉴 슬라이드업
    $(".mainmenu nav > ul > li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    });

    $('.mobile_menu_btn').click(function(){
        $('.mobile_menu').animate({
            "right":0
        });
        $('.close_btn i').addClass("active");
    
    });
    //모바일 닫기 버튼 - 메뉴 영역 오른쪽으로 이동
    $('.close_btn i').click(function() {
        $(".mobile_menu").animate({
            "right":"-100vw"
        });
        $(".close_btn i").removeClass("active");
    });


    //모바일 아코디언 메뉴(accordion menu)
    $('.mobile_menu_box nav ul li a').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass("active");
        return false;
    });
    
    //html문서 가로길이 660px 이하 아코디언 메뉴 적용
    if($("html, body").width() <= 660){
        $(".sitemap_list > ul > li > a").click(function(){
            if($(this).attr("class") != "active"){        
                $(".sitemap_list > ul > li > a").next().slideUp();
                $(this).next().slideDown();
                $(".sitemap_list > ul > li > a").removeClass("active");
                $(this).addClass("active");                    
                return false;
            //클릭한 a태그에 active가 이미 추가되어 있는 상태라면    
            }else{
                $(this).next().slideUp();
                $(this).removeClass("active");
                return false;
            }        
        });
    }   

//swiper slide
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay:2000
        },
        breakpoints:{
            1024:{
                slidesPerView:3,
                slidesPerGroup:3
            },
            768:{
                slidesPerView:3,
                slidesPerGroup:3
            },
            480:{   
                slidesPerView:1,
                slidesPerGroup:1
            },
            360:{
                slidesPerView:1,
                slidesPerGroup:1
            }
        }
        
    });

    //swiper 슬라이드 멈춤 버튼 클릭
    $('.fa-pause').click(function() {
    $(this).hide();
    $('.fa-play').css('display','inline-block');
    swiper.autoplay.stop();
    })

    //슬라이드 재생 버튼 클릭, 다시 재생
    $('.fa-play').click(function() {
        $(this).hide();
        $('.fa-pause').css('display','inline-block');
        swiper.autoplay.start();
    });
    
    //스크롤 이벤트, 스크롤에 따라 애니메이션 작동
    $(window).scroll(function(){
        let winTop=$(this).scrollTop();
        $('section').each(function(){
            let secTop=$(this).offset().top-300;
            if(secTop < winTop) {
                $(this).find('.ani').addClass('active');
                $(this).find('.ani').addClass('delay');
            }   //if
        }); //each
    }); //scroll
});