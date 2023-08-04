$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scroll>500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    })

    //slide-up script
    $('.scroll-up-btn').click(()=>{
        $('html').animate({scrollTop:0});
    });



    // toggle menu/navbar script
    $('.menu-btn').click(()=>{
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
})



var typed = new Typed('.typing', {
    strings: ['Web Developer', 'Designer','Content-Creator','Artist'],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
    smartBackspace: true // Default value
  });
var typed = new Typed('.typing-2', {
    strings: ['Web Developer', 'Designer','Artist','Content-Creator'],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
    smartBackspace: true // Default value
  });