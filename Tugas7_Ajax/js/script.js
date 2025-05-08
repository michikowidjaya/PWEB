document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content');
    const navButtons = document.querySelectorAll('nav button');

    // Function to load content via AJAX
    function loadPage(page) {
        contentArea.classList.remove('fade-in');
        contentArea.innerHTML = '<p style="font-size: 1.2em; color: #ff69b4;">Loading Ciko\'s wonders...</p>'; // Themed loading message

        fetchContent(page)
            .then(html => {
                contentArea.innerHTML = html;
                contentArea.classList.add('fade-in');
                // Initialize any page-specific scripts
                if (page === 'home') {
                    initHomePage();
                } else if (page === 'gallery') {
                    initGallery();
                } else if (page === 'contact') {
                    initContactForm();
                }
            })
            .catch(error => {
                console.error('Error loading page:', error);
                contentArea.innerHTML = '<p>Oh no! Something went a bit pear-shaped. Please try again or contact Ciko\'s support team.</p>';
                contentArea.classList.add('fade-in');
            });
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            loadPage(page);
        });
    });

    loadPage('home'); // Load the initial page
});

// --- Page Specific Initializations ---

function initHomePage() {
    console.log("Home page initialized");
    // Any specific JS for the home page can go here
    // For example, the showRandomFact function is now globally accessible
    // as it's part of the HTML loaded by ajax-handler.js for the home page.
}

// --- Gallery Specific JS ---
function initGallery() {
    console.log("Gallery initialized");
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalCaption = document.getElementById('modal-caption');
    const closeModalButton = document.querySelector('.modal-close');

    if (!modal || !closeModalButton) { // Check if modal elements are present
        console.warn("Modal elements not found for gallery.");
        return;
    }
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.dataset.imgSrc;
            const title = item.dataset.title;
            const description = item.dataset.description;

            modalImage.src = imgSrc;
            modalImage.alt = title;
            modalTitle.textContent = title;
            modalCaption.textContent = description;
            modal.style.display = 'flex'; // Show modal by changing display to flex for centering
        });
    });

    closeModalButton.onclick = closeModal; // Assign function directly

    // Close modal if user clicks outside the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
}

// Make closeModal globally accessible for the inline onclick in ajax-handler.js
window.closeModal = function() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.style.display = 'none';
    }
}


// --- Contact Form Specific JS ---
function initContactForm() {
    console.log("Contact form initialized");
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = contactForm.name.value;
            const email = contactForm.email.value;
            const subject = contactForm.subject.value;
            const message = contactForm.message.value;

            // Simple validation feedback
            if (!name || !email || !subject || !message) {
                alert("Oops! Please fill in all fields for Ciko.");
                return;
            }
            if (!validateEmail(email)) {
                alert("Hmm, that email address doesn't look quite right. Try again?");
                return;
            }

            // Simulate form submission
            alert(`Thank you, ${name}! Ciko has received your sparkling message about "${subject}". We'll be in touch at ${email} if needed!`);
            contactForm.reset();
        });
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// --- Home Page Interactive Elements ---
// (Can be called from HTML generated by ajax-handler.js)
window.showRandomFact = function() {
    const facts = [
        "Pink wasn't always a 'girly' color. In the 18th century, it was often worn by young boys!",
        "The pink color of flamingos comes from their diet of shrimp and algae.",
        "There's a lake in Australia called Lake Hillier that is naturally bubblegum pink.",
        "The term 'tickled pink' means to be very pleased or delighted.",
        "Baker-Miller Pink is a specific shade of pink that has been shown to temporarily reduce aggressive behavior."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factDisplay = document.getElementById('fun-fact-display');
    if (factDisplay) {
        factDisplay.textContent = randomFact;
        factDisplay.style.opacity = 0;
        // Fade in effect
        let opacity = 0;
        const interval = setInterval(() => {
            opacity += 0.1;
            factDisplay.style.opacity = opacity;
            if (opacity >= 1) clearInterval(interval);
        }, 50);
    } else {
        alert(randomFact); // Fallback if the display element isn't there
    }
}