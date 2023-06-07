$(function () {

    // 헤더스크롤
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })


    // 메인비쥬얼
    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        // 조건문 슬라이드 (1/3)
        $('.main_visual .slide_num span').text(c ? (c + 1) : 1)
        $('.main_visual .slide_num strong').text(s.slideCount)
        console.log(s.slideCount)


        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    })


    $('.main_slide').slick({
        autoplay: true,
        autopalySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });



    // 화살표 이전 다음으로 넘길때
    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    })



    // 숫자 생기는 슬라이드
    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault
        const idx = $(this).index(); //0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    })


    // 3 좌우 제품 슬라이드
    $('.product_slide').slick({
        // overflow: hidden 안으로 가둬주기
        slidesToShow: 3,
        // ✌왼오 같이 슬라이드 돌아가기
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',

        // 반응형 슬라이드
        responsive: [
            {
                breakpoint: "768",
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });

    $('.pic_slide').slick({
        vertical: true,
        asNavFor: ".product_slide",
        // ✌왼오 같이 슬라이드 돌아가기
        arrows: false,
    });


    // 화살표
    $('.main_big_product .arrows .left').on('click', function () {
        $('.product_slide2').slick('slickPrev');
    })

    $('.main_big_product .arrows .right').on('click', function () {
        $('.product_slide2').slick('slickNext');
    })



    // 4  제품 슬라이드
    $('.product_slide2').slick({
        // overflow: hidden 안으로 가둬주기
        slidesToShow: 3,
        // ✌왼오 같이 슬라이드 돌아가기
        arrows: false,
        dots: true,


        // 반응형 슬라이드
        responsive: [
            {
                breakpoint: "768",
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });



    // 5. 탭메뉴 선택하면 순서맞춰서 나오기
    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on')
    })


    // 내가 선택한 곳으로 이동하기 스크롤아이콘 클릭하면 섹션밑으로 내려감
    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600)
    })


    // 6현벨 슬라이드

    $('.portfolio_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.main_portfolio .itm').eq(c).addClass('on')
            .siblings().removeClass('on')
    });

    $('.portfolio_slide').slick({
        centerMode: true,
        // centerPadding: "100px",
        variableWidth: true,
        arrows: false,
        dots: true
    });

    //  화살표
    $('.main_portfolio .tab_arrows .left').on('click', function () {
        $('.portfolio_slide').slick('slickPrev');
    })

    $('.main_portfolio .tab_arrows .right').on('click', function () {
        $('.portfolio_slide').slick('slickNext');
    })









    // 스크롤 업
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    //   스크롤없애는거
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // 첫번째방법 sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })






    // 1 푸터 안에 패밀리 링크

    // change되었을때 어떤일은 한다
    $('#f1').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk, '바뀌네~~')
        //val()가 있을때만!

        // if (lnk) {
        //     window.open(lnk);
        // };
        //만약에 링크에 값이 있을때 띄우기 ↓축약형
        lnk && window.open(lnk);
    })

    // 2 푸터 안에 패밀리 링크
    $('.family_link2 span').on('click', function () {
        $(this).next().toggleClass('on');
        $(this).toggleClass('on');
    })

})