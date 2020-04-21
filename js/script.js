function hamburger(e){
    e.preventDefault();
    // alert("clicked");
    $('.hamburger i').toggleClass('fa-times',1000);
    if($(document).width() <= 678){
        $('nav .menu').fadeToggle();
      }
  console.log($(window).width());

    
}


document.addEventListener('scroll', () => {
    let x = window.scrollY;
    if(x>=5){
        document.querySelector('.nav').style.background = '#333';
        document.querySelector('.nav').style.padding = '1rem';
    }else {
        document.querySelector('.nav').style.background = 'rgba(51,51,51,.1)';
        document.querySelector('.nav').style.padding = '1.2rem';
    }
    if(x>=100){
        // console.log(x);
        document.getElementById('scrollTop').style.visibility = 'visible';
    }else {
        document.querySelector('#scrollTop').style.visibility = 'hidden';
    }
    // console.log(x);

    // Scroll skills
    // skills bar
    console.log(document.getElementById('skills').offsetTop-(window.innerHeight*.5));
    var h = document.getElementById('skills').offsetTop-(window.innerHeight*.8);

    if(window.scrollY >= (h)){
        // alert("works");
        $('.sk-bar-inner').each(function(){
            // console.log($(this).attr('data-width'));
            $(this).animate({
                width:$(this).attr('data-width')
            },1000);
        });
    }





});
$('#scrollTop').click(function (e) {
    let x= this.hash;
    $('body, html').animate({
        'scrollTop':0
    },500);
});

$('.hamburger').click(hamburger);
$('.menu').click(function(){
    $('.menu').fadeOut();
});



















