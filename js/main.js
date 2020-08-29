$(document).ready(function() {
    $('[data-opener]').click(function() {
        $this = $(this);
        if($this.is('.active')) {
            $this.removeClass('active');
            $('[data-target="'+$this.data('opener')+'"]').removeClass('active');
        }else{
            $this.addClass('active');
            $('[data-target="'+$this.data('opener')+'"]').addClass('active');
        }
   });
    let mySwiper = new Swiper('.testimonials__wrap', {
        direction: 'horizontal',
        loop: true,
        pagination: {
        el: '.testimonials .swiper-pagination',
        },
        navigation: {
        nextEl: '.testimonials .swiper-button-next',
        prevEl: '.testimonials .swiper-button-prev',
        }
    });
    $('.btn-top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    $(window).on('load scroll resize', function() {
        let $this = $(this),
            offsetTop = $this.scrollTop(),
            btn = $('.btn-top');
        if(offsetTop > 700) {
            btn.fadeIn(300).removeClass('hidden');
        }else {
            btn.fadeOut(300).addClass('hidden');
        }
    });
    AOS.init();
});