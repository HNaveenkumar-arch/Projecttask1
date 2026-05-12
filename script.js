document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }

    const track = document.querySelector('.carousel-track');
    const marquee = document.querySelector('.marquee-content');
    if (track) {
        let scrollPos = 0;
        const speed = 0.8;

        const animateCarousel = () => {
            scrollPos -= speed;
            if (Math.abs(scrollPos) >= (track.scrollWidth / 2)) {
                scrollPos = 0;
            }
            track.style.transform = `translateX(${scrollPos}px)`;
            requestAnimationFrame(animateCarousel);
        };
        animateCarousel();
    }
    if (marquee) {
        let marqueeAmount = 0;
        const marqueeSpeed = 1.2;

        const animateMarquee = () => {
            marqueeAmount += marqueeSpeed;
            const resetPoint = marquee.scrollWidth / 4;
            if (Math.abs(marqueeAmount) >= resetPoint) {
                marqueeAmount = 0;
            }
            marquee.style.transform = `translateX(${marqueeAmount}px)`;
            requestAnimationFrame(animateMarquee);
        };
        animateMarquee();
    }
    const testimonials = [
        {
            img: "./asset/client11.webp",
            quote: "The digital framework provided by the team has streamlined our global supply chain, resulting in a 22% increase in operational efficiency.",
            name: "Marcus Sterling",
            role: "Chief Operations Officer at Global Logistics Corp"
        },
        {
            img: "./asset/client33.webp",
            quote: "Unmatched expertise in enterprise security. They didn't just find gaps; they built a fortress around our data infrastructure.",
            name: "Sarah Chen",
            role: "Director of IT at FinTech Solutions"
        },
        {
            img: "./asset/clienyt55.webp",
            quote: "A rare consulting partner that actually focuses on ROI. Their strategy helped us pivot successfully during a volatile market shift.",
            name: "Jonathan Hughes",
            role: "CEO of Hughes Manufacturing"
        }
    ];

    const avatars = document.querySelectorAll('.avatar');
    const mainImg = document.getElementById('main-img');
    const quoteTxt = document.getElementById('testimonial-quote');
    const authorName = document.getElementById('author-name');
    const authorRole = document.getElementById('author-role');

    if (avatars.length > 0) {
        avatars.forEach(avatar => {
            avatar.addEventListener('click', function () {
                avatars.forEach(a => a.classList.remove('active'));
                this.classList.add('active');
                if (quoteTxt) quoteTxt.style.opacity = '0';
                if (mainImg) mainImg.style.opacity = '0';
                setTimeout(() => {
                    if (mainImg) mainImg.src = this.src;
                    if (quoteTxt) quoteTxt.textContent = `“${this.getAttribute('data-quote')}”`;
                    if (authorName) authorName.textContent = this.getAttribute('data-name');
                    if (authorRole) authorRole.textContent = this.getAttribute('data-role');
                    if (quoteTxt) quoteTxt.style.opacity = '1';
                    if (mainImg) mainImg.style.opacity = '1';
                }, 300);
            });
        });
    }
    const faqItems = document.querySelectorAll(".faq-content");

    faqItems.forEach((item) => {
        const header = item.querySelector(".faq-header");

        if (header) {
            header.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                faqItems.forEach((otherItem) => {
                    otherItem.classList.remove("active");
                });
                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });

});
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput').value.trim();
    const messageDiv = document.getElementById('validationMessage');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput === "") {
        showMessage("Please enter an email address.", "red");
    } else if (!emailPattern.test(emailInput)) {
        showMessage("Please enter a valid email address.", "red");
    } else {
        window.location.href = "404page.html";
    }
    function showMessage(text, color) {
        messageDiv.textContent = text;
        messageDiv.style.color = color;
        messageDiv.style.display = "block";
    }
});