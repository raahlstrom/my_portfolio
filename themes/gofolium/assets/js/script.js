(function ($) {
    'use strict';

    // Preloader js
    $(window).on('load', function () {
        $('.preloader').fadeOut(100);
    });

    // Smooth Scrolling for Navigation Links
    var html_body = $('html, body');
    $('.nav-link, .page-scroll').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1500, 'easeInOutExpo');
                return false;
            }
        }
    });

    // Custom Easing Function
    jQuery.extend(jQuery.easing, {
        easeInOutExpo: function (x, t, b, c, d) {
            if (t === 0) {
                return b;
            }
            if (t === d) {
                return b + c;
            }
            if ((t /= d / 2) < 1) {
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            }
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        setTimeout(function () {
            $('.navbar-collapse').collapse('hide');
        }, 1500);
    });

    // article reading time
    $('article').each(function () {
        let _this = $(this);
        _this.readingTime({
            readingTimeTarget: _this.find('.eta'),
            remotePath: _this.attr('data-file'),
            remoteTarget: _this.attr('data-target')
        });
    });

    // particles
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 1100
                }
            },
            "color": {
                "value": "#15E600"
            },
            "shape": {
                "type": "edge",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.7,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 7,
                    "opacity_min": 0.1038961038961039,
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
                "color": "#333333",
                "opacity": 0.8,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": 4,
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
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
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

    // Smooth underline transition for navbar
    $(document).ready(function () {
        const $navLinks = $('.navbar-dark .navbar-nav .nav-link');
        const $navBarUnderline = $('.navbar-dark .navbar-nav .nav-underline');

        $navLinks.hover(
            function () {
                const left = $(this).position().left + ($(this).innerWidth() - $(this).width()) / 2 - 5; // Add -5 to left
                const width = $(this).width() + 10; // Add 10 to width
                $navBarUnderline.css({ left: left, width: width });
            },
            function () {
                $navBarUnderline.css({ width: 0 });
            }
        );
    });

    // Typewriter
    const sentences = [
        'Data empowered.',
        'Higher Ed Innovator.',
        'Building data products & analytics at SimpsonScarborough.'
    ];

    const typewriterElement = document.getElementById('typewriter');

    function typeSentence(sentence, callback) {
        let index = 0;

        function type() {
            typewriterElement.textContent += sentence[index];
            index++;

            if (index < sentence.length) {
                setTimeout(type, 100);
            } else {
                setTimeout(() => {
                    callback();
                }, 1500);
            }
        }

        type();
    }

    function deleteSentence(callback) {
        function del() {
            typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);

            if (typewriterElement.textContent.length > 0) {
                setTimeout(del, 100);
            } else {
                setTimeout(() => {
                    callback();
                }, 1500);
            }
        }

        del();
    }

    function runTypewriter(sentences) {
        const [first, ...rest] = sentences;

        typeSentence(first, () => {
            deleteSentence(() => {
                runTypewriter([...rest, first]);
            });
        });
    }

    runTypewriter(sentences);

})(jQuery);
