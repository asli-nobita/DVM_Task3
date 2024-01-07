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


    var screenWidth = window.matchMedia('(min-width: 750px)');

    // SCRIPT FOR LARGE SCREENS //

    if (screenWidth.matches) {

        const menu = document.querySelector('.menu');
        const headerLarge = document.querySelector('#header-large');
        const burgerIcon = document.querySelector('.burger-menu-icon');
        const closeBtn = document.querySelector('.close-btn');

        const mediaContainers = document.querySelectorAll('.media-container');
        const imageContainers = document.querySelectorAll('.image-container');

        const largeText = document.querySelector('#large-text');

        const buttons = document.querySelectorAll("[data-carousel-btn]");

        buttons.forEach(button => {
            button.addEventListener('click', ()=>{
                const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
                const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

                const activeSlide = slides.querySelector("[data-active]");
                let newIndex = [...slides.children].indexOf(activeSlide) + offset;

                if(newIndex < 0) newIndex = slides.children.length - 1;
                if(newIndex >= slides.children.length) newIndex = 0;

                slides.children[newIndex].dataset.active = true;
                delete activeSlide.dataset.active;
            })
        })

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

        mediaContainers.forEach(element => {
            element.addEventListener('mouseenter', () => {
                playVideo(element.querySelector('video'));
            })
            element.addEventListener('mouseleave', () => {
                pauseVideo(element.querySelector('video'));
            })
        })

        imageContainers.forEach(element => {
            element.addEventListener('mouseenter', () => {
                playVideo(element.querySelector('video'));
            })
            element.addEventListener('mouseleave', () => {
                pauseVideo(element.querySelector('video'));
            })
        })

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

        const videoText = document.querySelector('#video-hover');
        const videoOnHover = document.querySelector('#video-hover > video');

        const moveVideo = (e, video) => {
            let height = video.style.height;
            let width = video.style.width;
            video.style.transform = `translate3d(${e.clientX - width/2}px, ${e.clientY - height/2}px, 0)`
        };

        videoText.addEventListener('mouseover', () => {
            window.addEventListener('mousemove', (e) => {
                moveVideo(e, videoOnHover);
            });
        });

        videoText.addEventListener('mouseenter', () => {
            playVideo(videoOnHover);
        })

        videoText.addEventListener('mouseleave', () => {
            pauseVideo(videoOnHover)
        })

        burgerIcon.addEventListener('click', () => {
            menu.classList.add('show');
            navbarLarge.classList.add('header-menuOpen');
            document.querySelector('body').style.overflowY = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.remove('show');
            navbarLarge.classList.remove('header-menuOpen');
            document.querySelector('body').style.overflowY = 'auto';
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('animationFade', entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            })
        })

        observer.observe(largeText);

    }

    // SCRIPT FOR SMALL SCREENS //

    if (!screenWidth.matches) {

        const menu = document.querySelector('.menu');
        const headerLarge = document.querySelector('#header-large');
        const burgerIcon = document.querySelector('.burger-menu-icon');
        const closeBtn = document.querySelector('.close-btn');

        const largeText = document.querySelector('#large-text');

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
            navbarSmall.classList.add('header-menuOpen');
            document.querySelector('body').style.overflowY = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.remove('show');
            navbarSmall.classList.remove('header-menuOpen');
            document.querySelector('body').style.overflowY = 'auto';
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.classList.toggle('animationFade', entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            })
        })

        observer.observe(largeText);
    }

    // COMMON //

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

    const playVideo = (video) => {
        video.play();
    }

    const pauseVideo = (video) => {
        video.pause();
        video.currentTime = 0;
    }

    const cursor = document.querySelector('.customCursor');
    document.addEventListener('mousemove', (e)=>{
        cursor.style.transform = `translate3d(${e.clientX - 14}px, ${e.clientY - 14}px, 0)`;
    })

});