let loveCount = 0;
let quizScore = 0;
let currentQuestion = 0;
let valentineName = '';
let uploadedPhotoURL = '';

// Photo Preview Function
function previewPhoto() {
    const input = document.getElementById('photoInput');
    const preview = document.getElementById('photoPreview');
    const previewImg = document.getElementById('previewImg');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedPhotoURL = e.target.result;
            previewImg.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Save Name and Photo Function
function saveName() {
    const nameInput = document.getElementById('valentineName').value.trim();
    
    if (nameInput === '') {
        alert('Please enter your Valentine\'s name! ❤️');
        return;
    }
    
    valentineName = nameInput;
    
    // Update all name displays
    const nameElements = [
        'displayName1', 'displayName2', 'displayName3', 
        'displayName4', 'displayName5', 'displayName6'
    ];
    
    nameElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = valentineName;
        }
    });
    
    // Update name in letters
    const letterNames = document.querySelectorAll('.nameInLetter');
    letterNames.forEach(elem => {
        elem.textContent = valentineName;
    });
    
    // Update photos if uploaded
    if (uploadedPhotoURL) {
        const photoElements = ['mainPhoto', 'celebrationPhoto'];
        photoElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.src = uploadedPhotoURL;
            }
        });
    }
    
    // Show success and move to next screen
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    
    setTimeout(() => {
        goTo(1);
    }, 500);
}

// 1. Cursor Follower
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    if (Math.random() > 0.9) createHeart(e.clientX, e.clientY);
});

function createHeart(x, y) {
    const h = document.createElement('div');
    h.className = 'trail-heart'; 
    h.innerHTML = '❤️';
    h.style.left = x + 'px'; 
    h.style.top = y + 'px';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1200);
    
    loveCount++;
    document.getElementById('loveCount').textContent = loveCount;
}

// 2. Floating Hearts Background
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.getElementById('floatingHearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createFloatingHeart, 800);

// 3. Original Logic
function startStory() {
    document.getElementById('bgMusic').play();
    goTo(2);
}

function goTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('p' + id).classList.add('active');
    window.scrollTo(0, 0);
    
    if (id === 11) {
        document.getElementById('finalScore').textContent = quizScore;
    }
}

function toggleWA() {
    document.getElementById('waMenu').classList.toggle('active');
}

function moveNo() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px'; 
    btn.style.top = y + 'px';
}

function celebrate() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => goTo(5), 500);
}

// 4. Love Letter Flip
function flipLetter(letter) {
    letter.classList.toggle('opened');
}

// 5. Memory Game
const emojis = ['💕', '💖', '💗', '💝', '🌹', '💐', '🌺', '🌸'];
const gameEmojis = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
let flippedCards = [];
let matchedPairs = 0;

function initMemoryGame() {
    const grid = document.getElementById('memoryGame');
    grid.innerHTML = '';
    gameEmojis.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.innerHTML = '❓';
        card.onclick = () => flipCard(card);
        grid.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        card.classList.add('flipped');
        card.innerHTML = card.dataset.emoji;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 800);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        document.getElementById('matchCount').textContent = matchedPairs;
        
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });

        if (matchedPairs === 8) {
            setTimeout(() => {
                alert('🎉 Amazing! You found all the matches!');
                document.getElementById('quizBtn').style.display = 'inline-block';
            }, 500);
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerHTML = '❓';
        card2.innerHTML = '❓';
    }
    flippedCards = [];
}

// 6. Quiz System
const questions = [
    {
        q: "What's my favorite thing about you?",
        options: [
            { text: "Your cooking skills", correct: false },
            { text: "Everything! Your smile, laugh, kindness, everything!", correct: true },
            { text: "Your sense of humor", correct: false },
            { text: "Your intelligence", correct: false }
        ]
    },
    {
        q: "What do I love doing with you the most?",
        options: [
            { text: "Watching movies", correct: false },
            { text: "Just being together, doesn't matter what we do", correct: true },
            { text: "Going out to eat", correct: false },
            { text: "Playing games", correct: false }
        ]
    },
    {
        q: "How much do I love you?",
        options: [
            { text: "A lot", correct: false },
            { text: "To the moon and back", correct: false },
            { text: "More than words can express, infinity times infinity!", correct: true },
            { text: "Very much", correct: false }
        ]
    }
];

function checkAnswer(option, isCorrect) {
    const allOptions = document.querySelectorAll('.quiz-option');
    allOptions.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (isCorrect) {
        option.classList.add('correct');
        quizScore++;
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } else {
        option.classList.add('wrong');
    }

    if (currentQuestion < questions.length - 1) {
        document.getElementById('nextQuizBtn').style.display = 'inline-block';
    } else {
        document.getElementById('finishQuizBtn').style.display = 'inline-block';
    }
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
    document.getElementById('nextQuizBtn').style.display = 'none';
}

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('quizQuestion').textContent = q.q;
    
    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = '';
    q.options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'quiz-option';
        div.textContent = opt.text;
        div.onclick = () => checkAnswer(div, opt.correct);
        optionsDiv.appendChild(div);
    });
}

// 7. Final Surprise Box
const messages = [
    "I love you! ❤️", 
    "You're amazing! 🌟", 
    "Forever yours 💕", 
    "You complete me 💖", 
    "My soulmate 💝", 
    "Best day = with you ☀️",
    "You're beautiful 🌹", 
    "Thank you for being you 💐", 
    "My everything 💗", 
    "Infinite love ∞"
];
let revealedCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const surpriseBox = document.getElementById('surpriseBox');
    if (surpriseBox) {
        surpriseBox.addEventListener('click', (e) => {
            if (revealedCount < 10) {
                const msg = document.createElement('div');
                msg.textContent = messages[revealedCount];
                msg.style.position = 'absolute';
                msg.style.left = e.offsetX + 'px';
                msg.style.top = e.offsetY + 'px';
                msg.style.background = 'white';
                msg.style.padding = '10px 15px';
                msg.style.borderRadius = '10px';
                msg.style.fontSize = '0.9rem';
                msg.style.fontWeight = '600';
                msg.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                msg.style.animation = 'slideIn 0.5s ease';
                surpriseBox.appendChild(msg);
                
                revealedCount++;
                document.getElementById('revealCount').textContent = `Messages Found: ${revealedCount}/10`;
                
                confetti({ 
                    particleCount: 20, 
                    spread: 40, 
                    origin: { 
                        x: e.clientX / window.innerWidth, 
                        y: e.clientY / window.innerHeight 
                    } 
                });

                if (revealedCount === 10) {
                    setTimeout(() => {
                        alert(`🎉 You found all the love messages! You truly are special to me, ${valentineName || 'my love'}! ❤️`);
                    }, 500);
                }
            }
        });
    }
});

// Initialize memory game when page loads
window.addEventListener('load', () => {
    initMemoryGame();
    document.getElementById('finalScore').textContent = quizScore;
});