document.addEventListener('DOMContentLoaded', ()=>{

    // // video hover effect
    // $(".video-container").hover(
    //     function() {
    //         $(".video-container img").hide(500);
    //         $(".video-container video").show(500);
    //         $(".video-container video").trigger(play);
    //     },
    //     function() {
    //         $(".video-container img").show(500);
    //         $(".video-container video").hide(500);
    //         $(".video-container video").trigger(pause);
    //     }
    // )


    const featuredEvent = document.querySelector('#featured-event');
    const featuredImg = document.querySelector('#featured-img');
    const eventLink = document.querySelector('#event-link');

    featuredEvent.addEventListener('mouseover', ()=>{
        featuredImg.style.transform = 'scale(1.05)';
        eventLink.style.color = 'var(--link-color)';
    });
    featuredEvent.addEventListener('mouseout', ()=>{
        featuredImg.style.transform = 'scale(1)';
        eventLink.style.color = 'inherit';
    });

    // $("#featured-event").hover(
    //     function() {
    //         $("featured-img").css("transform", "scale(1.05)");
    //         $("#event-link").css("color", "var(--link-color)");
    //     },
    //     function() {
    //         $("featured-img").css("transform", "scale(1)");
    //         $("#event-link").css("color", "inherit");
    //     }
    // );

    const upcomingInfo = document.querySelector('#upcoming-event-info');
    const link = document.querySelector('.link');
    const eventImg = document.querySelector('#event-img');

    upcomingInfo.addEventListener('mouseover', ()=>{
        link.style.color = 'var(--link-color)';
        eventImg.style.transform = 'translateY(-10px)';
    });
    upcomingInfo.addEventListener('mouseout', ()=>{
        link.style.color = 'inherit';
        eventImg.style.transform = 'translateY(0)';
    });

    // $("#upcoming-event-info").hover(
    // function() {
    //     $(".link").css("color", "var(--link-color)");
    //     $("#event-img").css("transform", "translateY(-10px)");
    // },
    // function() {
    //     $(".link").css("color", "inherit");
    //     $("#event-img").css("transform", "translateY(0)");
    // }
    // );

    const menu = document.querySelector('.menu');
    const headerLarge = document.querySelector('#header-large');
    const burgerIcon = document.querySelector('.burger-menu-icon');
    const closeBtn = document.querySelector('.close-btn');

    burgerIcon.addEventListener('click', ()=>{
        menu.classList.add('show');
        headerLarge.classList.add('header-menuOpen');
        document.querySelector('body').style.overflowY = 'hidden';
    });

    closeBtn.addEventListener('click', ()=>{
        menu.classList.remove('show');
        headerLarge.classList.remove('header-menuOpen');
        document.querySelector('body').style.overflowY = 'auto';
    });

    // $('.burger-menu-icon').click(function() {
    //     $("#mobile-menu").toggle();
    // });

    // // rotating coin 
    // const text = document.querySelector('#rotating-text p');
    // text.innerHTML = text.innerText.split("").map(
    //     (char, i) =>
    //     `<span style="transform:rotate(${i * 8.2}deg)">${char}</span>`
    // ).join("")

    const navbar = document.querySelector('#nav-small');

    window.addEventListener('scroll', ()=>{
        let prevPos = window.scrollY;
        window.addEventListener('scroll', ()=>{
            const currentPos = window.scrollY;

            if (currentPos < prevPos) {
                navbar.classList.remove('nav-hide');
            } else {
                navbar.classList.add('nav-hide');
            }
        });
        if (window.scrollY === 0) {
            navbar.classList.add('pinned');
        } else {
            navbar.classList.remove('pinned');
        }
    });
    
});