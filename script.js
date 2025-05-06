document.addEventListener('DOMContentLoaded', function () {
    // Dropdown Menu
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');
    var submenus = document.querySelectorAll('.dropdown-submenu');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation();
            dropdown.classList.toggle('active');

            dropdowns.forEach(function (otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });

            submenus.forEach(function (submenu) {
                submenu.classList.remove('active');
            });
        });
    });

    submenus.forEach(function (submenu) {
        submenu.addEventListener('click', function (event) {
            event.stopPropagation();
            submenu.classList.toggle('active');

            submenus.forEach(function (otherSubmenu) {
                if (otherSubmenu !== submenu) {
                    otherSubmenu.classList.remove('active');
                }
            });
        });
    });

    document.addEventListener('click', function () {
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove('active');
        });
        submenus.forEach(function (submenu) {
            submenu.classList.remove('active');
        });
    });

    // Slide Show
    const slides = document.querySelectorAll('.slide');
    const heading = document.querySelector('.heading');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateHeading() {
        heading.style.animation = 'none'; // Reset animation
        setTimeout(() => {
            const headings = [
                'Master Python basics: syntax, functions, data structures, and coding for web, data, or automation.',
                'Introduction to AI concepts, machine learning algorithms, and building intelligent systems with Python tools.',
                'Understand ethical hacking techniques, penetration testing, and securing systems against cyberattacks and vulnerabilities.',
                'Dive into Data Science with our in-depth course, mastering techniques for data analysis and predictive modeling.'
            ];
            heading.textContent = headings[currentIndex];
            heading.style.animation = ''; // Reapply animation
        }, 10); // Slight delay to reset animation
    }

    function showSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        updateHeading();
    }

    function showNextSlide() {
        showSlide((currentIndex + 1) % slides.length);
    }

    function showPrevSlide() {
        showSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    document.querySelector('.next').addEventListener('click', showNextSlide);
    document.querySelector('.prev').addEventListener('click', showPrevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    setInterval(showNextSlide, 5000); // Change slide every 5 seconds

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function () {
            document.getElementById('courseInput').value = this.textContent;
        });
    });

    // Typing Effect
    const text = "Welcome to I Roboticss";
    let index = 0;
    const speed = 100; // Typing speed in milliseconds

    function type() {
        if (index < text.length) {
            document.getElementById("animated-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                document.getElementById("animated-text").innerHTML = '';
                index = 0; // Reset index to start typing again
                type(); // Start typing again
            }, 1000); // Pause for 1 second before restarting
        }
    }

    type(); // Start the typing effect

    // Slick Carousel Initialization
    jQuery(document).ready(function ($) {
        $('.slick').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });
    });

    // Login Popup
    const loginPopup = document.querySelector(".login-popup");
    const closeBtn = document.querySelector(".login-popup .close");
    const courseInput = document.getElementById("courseInput");
    const checkboxes = document.querySelectorAll(".dropdown-content input[type='checkbox']");

    window.addEventListener("load", function () {
        setTimeout(function () {
            loginPopup.classList.add("show");
        }, 5000);
    });

    closeBtn.addEventListener("click", function () {
        loginPopup.classList.remove("show");
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            const selectedCourses = Array.from(checkboxes)
                .filter(i => i.checked)
                .map(i => i.value);
            courseInput.value = selectedCourses.join(", ");
        });
    });


// JavaScript to handle form submission and redirection
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Collect form data

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Check response or assume success
        alert("Form submitted successfully!"); // Optional alert
        window.location.href = "index.html"; // Redirect to home screen
    })
    .catch(error => console.error('Error:', error));
});



    // Scroll to Top Button
    $('#btnUp').click(function () {
        $('html').animate({ scrollTop: 0 }, "slow");
    });

    // Navbar Toggle
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('menu');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const closeIcon = document.querySelector('.close-icon');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    closeIcon.addEventListener('click', function() {
        nav.classList.remove('active');
    });
});