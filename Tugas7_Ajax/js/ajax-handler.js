// Simulate fetching content. In a real application, this would make an AJAX call to a server.
function fetchContent(pageName) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            let htmlContent = '';
            switch (pageName) {
                case 'home':
                    htmlContent = `
                        <h2>Welcome to the Home Page!</h2>
                        <p>This is Ciko\'s amazing interactive wonderland. Explore and have fun!</p>
                        <div class="interactive-element" onclick="showRandomFact()">Click Me for a Fun Fact!</div>
                        <p id="fun-fact-display" style="margin-top:15px; font-style:italic; color:#ff1493;"></p>
                        <p>We use AJAX to load content dynamically, making the experience smooth and fast.</p>
                        <h3>What to expect:</h3>
                        <ul>
                            <li>Interactive Gallery: Click on images to see more.</li>
                            <li>Dynamic Content: Pages load without refreshing.</li>
                            <li>Pink Everywhere: Because pink is awesome!</li>
                        </ul>
                    `;
                    break;
                case 'gallery':
                    // Using placekitten.com for robust image placeholder testing
                    const galleryItems = [
                        { id: 1, title: 'Cute Kitten 1', imgSrc: 'cutekitten1.jpg', description: 'A very cute kitten.' },
                        { id: 2, title: 'Cute Kitten 2', imgSrc: 'cutekitten2.jpg', description: 'Another adorable kitten.' },
                        { id: 3, title: 'Cute Kitten 3', imgSrc: 'cutekitten3.jpg', description: 'Look, a kitten!' },
                        { id: 4, title: 'Cute Kitten 4', imgSrc: 'cutekitten6.jpg', description: 'More kitten cuteness.' },
                        { id: 5, title: 'Cute Kitten 5', imgSrc: 'cutekitten5.jpg', description: 'Kitten overload!' },
                        { id: 6, title: 'Ciko\'s Kitten Pick', imgSrc: 'cutekitten4.jpg', description: 'Ciko picked this cute kitten!.' }
                    ];

                    htmlContent = `
                        <h2>Ciko's Pink Gallery</h2>
                        <p>Click on an image to see a larger view and a description.</p>
                        <div class="gallery-container">
                            ${galleryItems.map(item => `
                                <div class="gallery-item" data-id="${item.id}" data-title="${item.title}" data-img-src="${item.imgSrc}" data-description="${item.description}">
                                    <img src="${item.imgSrc}" alt="${item.title}">
                                    <div class="gallery-item-title">${item.title}</div>
                                </div>
                            `).join('')}
                        </div>
                        <p>More beautiful pink items coming soon!</p>

                        <!-- Modal Structure -->
                        <div id="galleryModal" class="modal">
                            <div class="modal-content">
                                <span class="modal-close" onclick="closeModal()">&times;</span>
                                <img id="modal-image" src="" alt="Gallery Image">
                                <h3 id="modal-title"></h3>
                                <p id="modal-caption"></p>
                            </div>
                        </div>
                    `;
                    break;
                case 'contact':
                    htmlContent = `
                        <h2>Contact Ciko</h2>
                        <p>Want to get in touch? Fill out the form below! Ciko loves hearing from you.</p>
                        <form id="contact-form" class="interactive-element">
                            <div>
                                <label for="name">Your Name:</label>
                                <input type="text" id="name" name="name" required placeholder="e.g., Pinky Pie">
                            </div>
                            <div>
                                <label for="email">Your Email:</label>
                                <input type="email" id="email" name="email" required placeholder="e.g., pinky@wonderland.com">
                            </div>
                            <div>
                                <label for="subject">Subject:</label>
                                <input type="text" id="subject" name="subject" required placeholder="e.g., Question about Pink">
                            </div>
                            <div>
                                <label for="message">Your Message:</label>
                                <textarea id="message" name="message" required rows="5" placeholder="Tell Ciko something wonderful..."></textarea>
                            </div>
                            <button type="submit">Send Sparkling Message</button>
                        </form>
                    `;
                    break;
                default:
                    htmlContent = '<h2>Page Not Found</h2><p>The requested content could not be found. Maybe try a pinker page?</p>';
                    reject('Page not found');
                    return;
            }
            resolve(htmlContent);
        }, 300); // Reduced delay for quicker feedback
    });
}