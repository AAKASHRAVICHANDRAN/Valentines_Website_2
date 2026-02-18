// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('Dinner invitation page loaded! 💕');

    // Initialize interactive features
    initializeClickEffects();
    initializePhotoGallery();
    initializeMovingNoButton();

    // Add some sparkle to the page
    createRandomSparkles();
});

// Function to navigate to Yes page
function goToYesPage() {
    window.location.href = 'yes.html';
}

// Initialize the moving "No" button
function initializeMovingNoButton() {
    const noBtn = document.getElementById('noBtn');
    if (!noBtn) return;

    let moveCount = 0;
    const maxMoves = 5;

    noBtn.addEventListener('mouseenter', function () {
        moveCount++;

        if (moveCount <= maxMoves) {
            moveNoButton();
        } else {
            // After 5 attempts, make it even more playful
            transformNoButton();
        }
    });

    // Also move on click attempts
    noBtn.addEventListener('click', function (e) {
        e.preventDefault();
        moveCount++;

        if (moveCount <= maxMoves) {
            moveNoButton();
            showPlayfulMessage();
        } else {
            transformNoButton();
        }
    });
}

// Move the "No" button to a random position
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.invitation-container');

    if (!noBtn || !container) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate safe boundaries within the container
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply the movement
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';

    // Add a little shake effect
    noBtn.style.animation = 'shake 0.5s ease-in-out';

    // Create hearts at the old position
    const oldX = btnRect.left + btnRect.width / 2;
    const oldY = btnRect.top + btnRect.height / 2;
    createFloatingHeart(oldX, oldY);
}

// Transform the "No" button after multiple attempts
function transformNoButton() {
    const noBtn = document.getElementById('noBtn');
    if (!noBtn) return;

    // Change the button text and make it more playful
    const playfulTexts = [
        "Please🥹",
        "Are you Sure?💔",
        "Please Say Yes🥺",
        "Think Again..🥺",
        "Come on...🥺",
        "You know you want to!😉",
        "I'll make it worth it!💖",
    ];

    const randomText = playfulTexts[Math.floor(Math.random() * playfulTexts.length)];
    noBtn.textContent = randomText;

    // Make it pulse and change color
    noBtn.style.background = 'linear-gradient(45deg, #ff6b9d, #ffc3e0)';
    noBtn.style.animation = 'pulse 1s ease-in-out infinite';

    // After a few seconds, make it even more obvious
    setTimeout(() => {
        noBtn.textContent = "Fine... Yes! 💕";
        noBtn.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
        noBtn.onclick = goToYesPage;
    }, 10000);
}

// Show playful messages when trying to click "No"
function showPlayfulMessage() {
    const messages = [
        "Aw, come on! 💕",
        "You're making this difficult! 😄",
        "I know you want to say yes! 💖",
        "Stop being so stubborn! 😉",
        "Just give in already! 🥰"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showTemporaryMessage(randomMessage);
}

// Show a temporary message
function showTemporaryMessage(text) {
    const message = document.createElement('div');
    message.textContent = text;
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.background = 'rgba(233, 30, 99, 0.9)';
    message.style.color = 'white';
    message.style.padding = '1rem 2rem';
    message.style.borderRadius = '25px';
    message.style.fontSize = '1.2rem';
    message.style.fontFamily = 'Dancing Script, cursive';
    message.style.fontWeight = '700';
    message.style.zIndex = '2000';
    message.style.animation = 'slideDown 0.5s ease-out';

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'slideUp 0.5s ease-in';
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 2000);
}

// Create floating hearts on click anywhere on the page
function initializeClickEffects() {
    const container = document.querySelector('.invitation-container') || document.querySelector('.yes-page-container');

    if (container) {
        container.addEventListener('click', function (e) {
            // Don't create hearts when clicking buttons
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
                return;
            }

            createFloatingHeart(e.clientX, e.clientY);
        });
    }
}

// Create a floating heart at specific coordinates
function createFloatingHeart(x, y) {
    const hearts = ['💖', '💕', '💗', '💝', '🌹', '✨', '🥰', '😍'];
    const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];

    const heart = document.createElement('div');
    heart.innerHTML = randomHeart;
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = Math.random() * 10 + 15 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'floatUp 2s ease-out forwards';
    heart.style.userSelect = 'none';

    document.body.appendChild(heart);

    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, 2000);
}

// Initialize photo gallery interactions
function initializePhotoGallery() {
    const photoSlots = document.querySelectorAll('.photo-slot');

    photoSlots.forEach((slot, index) => {
        slot.addEventListener('click', function () {
            const img = slot.querySelector('.gallery-image');
            const placeholder = slot.querySelector('.photo-placeholder');

            if (img && img.style.display !== 'none') {
                // Image exists and is visible - create a modal
                createImageModal(img.src, img.alt);
            } else {
                // Show upload hint
                showUploadHint(slot);
            }
        });
    });
}

// Create image modal for viewing photos
function createImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeImageModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <img src="${src}" alt="${alt}" class="modal-image">
                <button class="modal-close" onclick="closeImageModal()">×</button>
                <div class="modal-hearts">
                    <span>💖</span>
                    <span>💕</span>
                    <span>💗</span>
                </div>
            </div>
        </div>
    `;

    // Add modal styles if not already present
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .image-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-backdrop {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            
            .modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                cursor: default;
            }
            
            .modal-image {
                max-width: min(800px, 90vw);
                max-height: min(600px, 80vh);
                width: auto;
                height: auto;
                border-radius: 15px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }
            
            .modal-close {
                position: absolute;
                top: -15px;
                right: -15px;
                background: #ff6b9d;
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }
            
            .modal-close:hover {
                background: #e91e63;
                transform: scale(1.1);
            }
            
            .modal-hearts {
                position: absolute;
                bottom: -20px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 10px;
                font-size: 24px;
            }
            
            .modal-hearts span {
                animation: bounce 1s ease-in-out infinite;
            }
            
            .modal-hearts span:nth-child(2) {
                animation-delay: 0.2s;
            }
            
            .modal-hearts span:nth-child(3) {
                animation-delay: 0.4s;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(modal);

    // Add click event listener for backdrop
    const backdrop = modal.querySelector('.modal-backdrop');
    backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) {
            closeImageModal();
        }
    });

    // Prevent clicks on modal content from closing the modal
    const content = modal.querySelector('.modal-content');
    content.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // Add keyboard event listener for ESC key
    const handleKeyDown = function (e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    };

    // Store the handler on the modal element so we can remove it later
    modal.keyDownHandler = handleKeyDown;
    document.addEventListener('keydown', handleKeyDown);

    // Focus the modal for better accessibility
    modal.setAttribute('tabindex', '-1');
    modal.focus();
}

// Close image modal
function closeImageModal() {
    const modal = document.querySelector('.image-modal');
    if (modal) {
        // Remove the keyboard event listener
        if (modal.keyDownHandler) {
            document.removeEventListener('keydown', modal.keyDownHandler);
        }

        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Show upload hint for empty photo slots
function showUploadHint(slot) {
    const hint = document.createElement('div');
    hint.className = 'upload-hint';
    hint.innerHTML = `
        <div class="hint-content">
            <span>📸</span>
            <p>To add your photo:</p>
            <ol>
                <li>Save your image as "photo${slot.dataset.photo}.jpg"</li>
                <li>Place it in the "images" folder</li>
                <li>Refresh the page</li>
            </ol>
            <button onclick="closeUploadHint()">Got it! 💕</button>
        </div>
    `;

    // Add hint styles if not already present
    if (!document.querySelector('#hint-styles')) {
        const style = document.createElement('style');
        style.id = 'hint-styles';
        style.textContent = `
            .upload-hint {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1500;
                animation: fadeIn 0.3s ease;
            }
            
            .hint-content {
                background: white;
                padding: 2rem;
                border-radius: 15px;
                text-align: center;
                max-width: 400px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            
            .hint-content span {
                font-size: 3rem;
                display: block;
                margin-bottom: 1rem;
            }
            
            .hint-content p {
                font-size: 1.2rem;
                color: #d63384;
                margin-bottom: 1rem;
                font-weight: bold;
            }
            
            .hint-content ol {
                text-align: left;
                margin: 1rem 0;
                color: #333;
            }
            
            .hint-content li {
                margin: 0.5rem 0;
                font-size: 0.9rem;
            }
            
            .hint-content button {
                background: linear-gradient(45deg, #e91e63, #ff6b9d);
                color: white;
                border: none;
                padding: 0.8rem 1.5rem;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                margin-top: 1rem;
            }
            
            .hint-content button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(233, 30, 99, 0.3);
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(hint);
}

// Close upload hint
function closeUploadHint() {
    const hint = document.querySelector('.upload-hint');
    if (hint) {
        hint.remove();
    }
}

// Create random sparkles periodically
function createRandomSparkles() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createSparkle(x, y);
        }
    }, 4000);
}

// Create a sparkle effect
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    sparkle.style.animation = 'sparkleEffect 2s ease-out forwards';
    sparkle.style.userSelect = 'none';

    // Add sparkle animation if not already present
    if (!document.querySelector('#sparkle-styles')) {
        const style = document.createElement('style');
        style.id = 'sparkle-styles';
        style.textContent = `
            @keyframes sparkleEffect {
                0% {
                    opacity: 0;
                    transform: scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.2) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) rotate(360deg);
                }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            
            @keyframes slideUp {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-20px);
                }
            }
            
            @keyframes floatUp {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(1) rotate(0deg);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100px) scale(0.5) rotate(360deg);
                }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(sparkle);

    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.remove();
        }
    }, 2000);
}

// Add keyboard shortcuts for fun interactions
document.addEventListener('keydown', function (e) {
    // Press 'H' for hearts
    if (e.key.toLowerCase() === 'h') {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFloatingHeart(x, y);
    }

    // Press 'S' for sparkles
    if (e.key.toLowerCase() === 's') {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkle(x, y);
    }

    // Press 'Y' to go to yes page (secret shortcut)
    if (e.key.toLowerCase() === 'y') {
        goToYesPage();
    }
});

// Add some console messages for fun
console.log('💕 Welcome to your dinner invitation! 💕');
console.log('🎉 Try hovering over the "No" button... if you dare! 🎉');
console.log('✨ Keyboard shortcuts: H for hearts, S for sparkles, Y for yes! ✨');