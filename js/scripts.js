//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const offset = window.innerHeight; // Adjust the value as needed
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY <= offset) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});


// My scripts


document.addEventListener("DOMContentLoaded", function() {
  const backToTop = document.getElementById('back-to-top');
  const offset = window.innerHeight - 0; // Adjust the value as needed
  // Check initial scroll position and set the button's display style
  if (window.scrollY === 0){
    backToTop.style.display = 'none';
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > offset) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
});



const projectLinks = document.querySelectorAll(".nav-link");
const offset = 0; // Adjust the offset value as needed

projectLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const scrollOptions = {
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    }
  });
});

// EmailJS Initialization
// (function(){
//     emailjs.init('txI4PjsPbstH3ScUs'); // Replace with your User ID
// })();

// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contactForm');
    
//     contactForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Get form input values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const message = document.getElementById('message').value;
    
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Phone:', phone);
//     console.log('Message:', message);
    
//     // Email parameters
//     const params = {
//         from_name: name,
//         to_name: 'epicroute', // Your name or receiver's name
//         message: message,
//         reply_to: email,
//     };
//     // Send email using EmailJS
//     emailjs.send('YOUR_EMAILJS_SERVICE_ID', 'template_n99040m', params)
//         .then(function(response) {
//             console.log('Email sent successfully!', response);
//         }, function(error) {
//             console.error('Email sending failed:', error);
//         });
// });
// });

// Whatsapp
const phoneNumber = '+919891454752';

// Detect user agent to determine the link
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Set the link dynamically based on the user's device
const whatsappLink = isMobile
  ? `whatsapp://send?phone=${phoneNumber}`
  : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

// Set the link in the HTML
const whatsappButton = document.getElementById('whatsapp-link');
whatsappButton.href = whatsappLink;

const whatsappButton2 = document.getElementById('whatsapp-link-footer');
whatsappButton2.href = whatsappLink;


