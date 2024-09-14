const texts = ['Web Development', 'Software Engineering', 'Clinical Engineering', 'Innovative Solutions'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    document.getElementById('interactive-background').style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.5) 100%)`;
  });

  particlesJS('particle-container', {
    "particles": {
      "number": {
        "value": 100
      },
      "size": {
        "value": 3
      },
      "move": {
        "enable": true
      }
    }
  });
  
(function type() {
    if (count === texts.length) {
        count = 0; // Loop back to start
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('dynamic-text').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); // Delay before typing next phrase
    } else {
        setTimeout(type, 100); // Speed of typing effect
    }
})();

// Smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
    } else {
        document.getElementById('formMessage').innerText = 'Thank you for your message!';
    }
});

// Modal functionality for project details
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close modal if clicked outside content
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
document.querySelectorAll('.view-demo').forEach(button => {
    button.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        window.open(link, '_blank'); // Open the link in a new tab
    });
});

