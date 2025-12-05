$(document).ready(function () {
    // Initialize AOS
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic'
    });

    // Theme Toggle
    const $themeToggle = $('#theme-toggle');
    const $html = $('html');
    const $icon = $themeToggle.find('i');

    // Check local storage
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    $themeToggle.on('click', function () {
        const newTheme = $html.attr('data-bs-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        $html.attr('data-bs-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            $icon.removeClass('fa-moon').addClass('fa-sun');
            $themeToggle.removeClass('btn-outline-dark').addClass('btn-outline-light');
        } else {
            $icon.removeClass('fa-sun').addClass('fa-moon');
            $themeToggle.removeClass('btn-outline-light').addClass('btn-outline-dark');
        }
    }

    // Smooth Scroll for Navbar Links
    $('a.nav-link, .btn[href^="#"]').on('click', function (e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70 // Adjust for fixed navbar
            }, 800);

            // Close mobile menu if open
            if ($('.navbar-collapse').hasClass('show')) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });

    // Navbar Background on Scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm');
        } else {
            $('.navbar').removeClass('shadow-sm');
        }
    });

    // 3D Tilt Effect
    const cards = $('.service-card, .value-card');

    cards.on('mousemove', function (e) {
        const card = $(this);
        const cardWidth = card.outerWidth();
        const cardHeight = card.outerHeight();
        const centerX = card.offset().left + cardWidth / 2;
        const centerY = card.offset().top + cardHeight / 2;
        const mouseX = e.pageX - centerX;
        const mouseY = e.pageY - centerY;

        // Calculate rotation (max 10 degrees)
        const rotateX = (mouseY / (cardHeight / 2)) * -10;
        const rotateY = (mouseX / (cardWidth / 2)) * 10;

        card.css({
            'transform': `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            'transition': 'transform 0.1s ease'
        });
    });

    cards.on('mouseleave', function () {
        $(this).css({
            'transform': 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
            'transition': 'transform 0.5s ease'
        });
    });

    // Particles.js Config
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6a11cb" /* Primary color */
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2575fc", /* Secondary color */
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2, /* Dynamic movement */
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Initialize Swiper
    const swiper = new Swiper('.projects-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        initialSlide: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
});
