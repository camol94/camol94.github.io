    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(document).scrollTop() > 100) {
                $('nav').addClass('shrink');
            } else {
                $('nav').removeClass('shrink');
            }
        });
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 58
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    function toggleNav() {
        $(".nav-menu").toggleClass('opened', 750);
        $(".nav-button").toggleClass('is-active');
    }

    $('.nav-button').on('click', toggleNav);
    $('.nav-menu a').on('click', toggleNav);


    $(function() {
        $(".header-welcome").typed({
            strings: ["Miło mi, że odwiedziłeś moją stronę.", ],
            typeSpeed: 10,
            // show cursor
            showCursor: false
        });
    });


    $(function() {
        $(".header-info").typed({
            strings: ["Jeśli już tu jesteś to znaczy, że potrzebujesz <i>Front-End Developera</i>!<br>Użyj strzałki i dowiedz się więcej.", ],
            typeSpeed: 10,
            startDelay: 2000,
            contentType: 'html',
            // show cursor
            showCursor: false
        });
    });

    $(".about-info > .single-col > i").addClass('wow fadeIn');
    $(".about-info > .single-col > p").addClass('wow fadeIn');
    $(".about-info > .single-col > i").attr('data-wow-delay', '0.4s');
    $(".about-info > .single-col > p").attr('data-wow-delay', '0.8s');
