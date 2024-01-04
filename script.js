document.addEventListener('DOMContentLoaded', () => {

    const featuredEvent = document.querySelector('#featured-event');
    const featuredImg = document.querySelector('#featured-img > img');
    const eventLink = document.querySelector('#event-details');
    const linkArrow = document.querySelector('#event-details > span');
    const upcomingInfo = document.querySelector('#upcoming-event-info');
    const link = document.querySelector('.link');
    const eventImg = document.querySelector('#event-img');

    const navbarLarge = document.querySelector('#nav-large');
    const navbarSmall = document.querySelector('#nav-small');
    var carouselItems = document.querySelectorAll('.carousel');
    const parallaxContainer = document.querySelector('.wrapper');



    // script for large screens

    var screenWidth = window.matchMedia('(min-width: 750px)');

    if (screenWidth.matches) {

        const menu = document.querySelector('.menu');
        const headerLarge = document.querySelector('#header-large');
        const burgerIcon = document.querySelector('.burger-menu-icon');
        const closeBtn = document.querySelector('.close-btn');

        window.addEventListener('scroll', () => {
            let prevPos = window.scrollY;
            window.addEventListener('scroll', () => {
                const currentPos = window.scrollY;
                if (window.scrollY >= 50) {
                    if (currentPos < prevPos) {
                        navbarLarge.classList.remove('nav-hide');
                    } else {
                        navbarLarge.classList.add('nav-hide');
                    }
                }
            });
        });
        

        featuredEvent.addEventListener('mouseover', () => {
            featuredImg.style.transform = 'scale(1.05)';
            eventLink.style.color = 'var(--link-color)';
            linkArrow.style.transform = 'translateX(10%)';
        });
        featuredEvent.addEventListener('mouseout', () => {
            featuredImg.style.transform = 'scale(1)';
            eventLink.style.color = 'inherit';
            linkArrow.style.transform = 'translateX(0)';
        });

        upcomingInfo.addEventListener('mouseover', () => {
            link.style.color = 'var(--link-color)';
            eventImg.style.transform = 'translateY(-10px)';
        });
        upcomingInfo.addEventListener('mouseout', () => {
            link.style.color = 'inherit';
            eventImg.style.transform = 'translateY(0)';
        });

        let i = 0;
        function next() {
            carouselItems[i + 1].style.display = 'flex';
            carouselItems[i].style.display = 'none';
            i++;
        };

        function prev() {
            if (i >= 1) {
                carouselItems[i - 1].style.display = 'flex';
                carouselItems[i].style.display = 'none';
            } else {
                i = carouselItems.length - 1;
                prev();
            }
            i--;
        };

        const videoText = document.querySelector('#video-hover');
        const videoOnHover = document.querySelector('#video-hover > video');

        const moveVideo = (e, video) => {
            video.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        };

        videoText.addEventListener('mouseover', () => {
            window.addEventListener('mousemove', (e) => {
                moveVideo(e, videoOnHover);
            });
        });

        burgerIcon.addEventListener('click', () => {
            menu.classList.add('show');
            headerLarge.classList.add('header-menuOpen');
            document.querySelector('body').style.overflowY = 'hidden';
        });
    
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('show');
            headerLarge.classList.remove('header-menuOpen');
            document.querySelector('body').style.overflowY = 'auto';
        });

    }

    // script for smartphones

    if (!screenWidth.matches) {

        const menu = document.querySelector('.menu');
        const headerLarge = document.querySelector('#header-large');
        const burgerIcon = document.querySelector('.burger-menu-icon');
        const closeBtn = document.querySelector('.close-btn');

        window.addEventListener('scroll', () => {
            let prevPos = window.scrollY;
            window.addEventListener('scroll', () => {
                const currentPos = window.scrollY;
                if (window.scrollY >= 50) {
                    if (currentPos < prevPos) {
                        navbarSmall.classList.remove('nav-hide');
                    } else {
                        navbarSmall.classList.add('nav-hide');
                    }
                }
            });
        });

        burgerIcon.addEventListener('click', () => {
            menu.classList.add('show');
            headerLarge.classList.add('header-menuOpen');
            document.querySelector('body').style.overflowY = 'hidden';
        });
    
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('show');
            headerLarge.classList.remove('header-menuOpen');
            document.querySelector('body').style.overflowY = 'auto';
        });
    }

    // common

    window.addEventListener('scroll', () => {
        if (parallaxContainer.offsetTop === 20) {
            parallax();
        }
    })

    function parallax() {
        window.addEventListener('scroll', () => {
            document.querySelectorAll('.image-container').forEach((element) => {
                element.style.transform = `translateY(${window.scrollY}px)`;
            });
        });
    }

});