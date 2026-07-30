// ============================================
// CONFIGURATION
// ============================================
const RELATIONSHIP_START_DATE = new Date('2025-12-24T00:00:00').getTime();

const LOVE_LETTER = `
    <p>Od kiedy pojawiłaś się w moim życiu, wiele rzeczy zaczęło mieć zupełnie inny sens. Niby zwykłe dni, zwykłe wiadomości, zwykłe chwile, a jednak z Tobą nawet najprostsze momenty zaczęły być ważne. Z Tobą nauczyłem się, że miłość nie musi krzyczeć, żeby była prawdziwa. Czasem wystarczy jedno spojrzenie, jedna wiadomość, jeden uśmiech, żeby cały świat zrobił się spokojniejszy.</p>

    <p>Kiedy myślę o Tobie, nie widzę tylko osoby, którą kocham. Widzę też najlepszą część moich dni. Widzę śmiech, ciepło, czułość, Twoje oczy, Twój głos i wszystko to, co sprawia, że serce bije mi mocniej. Nawet wtedy, kiedy jest trudno, kiedy świat próbuje mnie zmęczyć, to właśnie myśl o Tobie potrafi dać mi siłę. Bo Ty jesteś dla mnie kimś więcej niż tylko dziewczyną. Jesteś moim domem, moim spokojem, moim szczęściem i moją najpiękniejszą historią.</p>

    <p>Pamiętam nasze rozmowy, te zwykłe i te głębokie, te śmieszne i te bardziej ciche. Pamiętam każdy moment, w którym czułem, że jesteś blisko, nawet jeśli dzielił nas ekran albo odległość. Nasze czaty stały się czymś wyjątkowym, czymś więcej niż tylko wiadomościami. Stały się miejscem, w którym było wszystko: troska, tęsknota, emocje, śmiech, czasem też łzy i nerwy, ale przede wszystkim prawda. A ja właśnie tę prawdę kocham najbardziej.</p>

    <p>Kocham w Tobie to, że jesteś sobą. Że potrafisz być delikatna, piękna, silna i wyjątkowa jednocześnie. Kocham Twój charakter, Twoją obecność, to, jak potrafisz wejść w moje serce i zostać tam na długo. Kocham nawet te chwile, kiedy wszystko jest trochę bardziej skomplikowane, bo wtedy jeszcze mocniej czuję, że to, co mamy, jest prawdziwe. Nie idealne. Prawdziwe. A to dla mnie znaczy więcej niż cokolwiek innego.</p>

    <p>Chciałbym, żebyś zawsze pamiętała, że jesteś dla mnie ważna. Nie tylko kiedy jest dobrze, ale też wtedy, kiedy robi się ciężej. Chcę być przy Tobie nie tylko w pięknych chwilach, ale też wtedy, gdy potrzebujesz spokoju, wsparcia albo po prostu czyjejś obecności. Chcę być tym człowiekiem, na którego możesz liczyć. Tym, który nie odchodzi, kiedy robi się trudno. Tym, który wybiera Ciebie każdego dnia od nowa.</p>

    <p>Dziękuję Ci za to, że jesteś. Za każdą wiadomość, za każdy uśmiech, za każdą chwilę, kiedy pozwalasz mi być częścią Twojego świata. Dziękuję za to, że mogę Cię kochać. To jedna z najpiękniejszych rzeczy, jakie mi się w życiu przydarzyły.</p>

    <p>Jeśli czasem nie umiem ubrać wszystkiego w idealne słowa, to wiedz, że serce mówi mi prościej: jesteś moją największą radością. Jesteś moim wyborem. Jesteś moją ukochaną dziewczyną, moją dumą i moją miłością.</p>

    <p>I niezależnie od tego, co przyniosą kolejne dni, jedno chcę żebyś wiedziała na pewno: zawsze będę wracał do Ciebie myślami, zawsze będę trzymał Cię blisko serca i zawsze będę kochał Cię najmocniej, jak tylko potrafię.</p>

    <p>Wszystkiego najlepszego, Basiu. Niech ten dzień będzie piękny, ciepły i Twój. A ja obiecuję, że postaram się sprawić, żebyś czuła się kochana nie tylko dziś, ale każdego dnia.</p>

    <p>Z całego serca,<br>Twój</p>
`;

const IMAGES = [
    '14175.jpg',
    '14174.jpg',
    '14171.jpg',
    '14150.jpg',
    '14137.jpg',
    '14135.jpg',
    '14134.jpg',
    '14129.jpg',
    '14127.jpg',
    'romantic_illustration.png'
];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeBackgroundAnimations();
    setupEventListeners();
    setupScrollAnimations();
});

// ============================================
// BACKGROUND ANIMATIONS
// ============================================
function initializeBackgroundAnimations() {
    createStars();
    createHearts();
    createParticles();
}

function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = window.innerWidth > 768 ? 50 : 20;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heartCount = window.innerWidth > 768 ? 15 : 8;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (6 + Math.random() * 4) + 's';
        heartsContainer.appendChild(heart);
    }
}

function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = window.innerWidth > 768 ? 30 : 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (3 + Math.random() * 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    const openGiftBtn = document.getElementById('openGiftBtn');
    const musicToggle = document.getElementById('musicToggle');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const closeLightbox = document.getElementById('closeLightbox');
    const lightbox = document.getElementById('lightbox');

    openGiftBtn.addEventListener('click', openGift);
    musicToggle.addEventListener('click', toggleMusic);
    prevBtn.addEventListener('click', previousImage);
    nextBtn.addEventListener('click', nextImage);
    closeLightbox.addEventListener('click', closeLightboxModal);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightboxModal();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') previousImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightboxModal();
        }
    });
}

// ============================================
// MAIN FUNCTIONALITY
// ============================================
function openGift() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');

    welcomeScreen.style.display = 'none';
    mainContent.style.display = 'block';

    // Start typing animation
    startTypingAnimation();

    // Populate letter
    populateLetter();

    // Populate gallery
    populateGallery();

    // Start counter
    updateCounter();
    setInterval(updateCounter, 1000);

    // Start slideshow
    startSlideshow();

    // Play music
    const audio = document.getElementById('backgroundMusic');
    audio.play().catch(() => {
        console.log('Autoplay prevented by browser');
    });
}

function startTypingAnimation() {
    const text = 'Wszystkiego najlepszego z okazji urodzin, moja kochana Basiu ❤️';
    const typingElement = document.getElementById('typingText');
    let index = 0;

    typingElement.textContent = '';

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    type();
}

function populateLetter() {
    const letterContent = document.getElementById('letterContent');
    letterContent.innerHTML = LOVE_LETTER;

    // Add stagger animation to paragraphs
    const paragraphs = letterContent.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        p.style.animationDelay = (index * 0.1) + 's';
    });
}

function populateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    IMAGES.forEach((imagePath, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${imagePath}" alt="Memory ${index + 1}" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });
}

function updateCounter() {
    const now = new Date().getTime();
    const distance = now - RELATIONSHIP_START_DATE;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// ============================================
// MUSIC PLAYER
// ============================================
function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');

    if (audio.paused) {
        audio.play();
        musicToggle.textContent = '🔊';
    } else {
        audio.pause();
        musicToggle.textContent = '🔇';
    }
}

// ============================================
// GALLERY FUNCTIONALITY
// ============================================
let currentImageIndex = 0;
let slideshowInterval;

function startSlideshow() {
    slideshowInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % IMAGES.length;
    }, 5000);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % IMAGES.length;
    resetSlideshow();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + IMAGES.length) % IMAGES.length;
    resetSlideshow();
}

function resetSlideshow() {
    clearInterval(slideshowInterval);
    startSlideshow();
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    currentImageIndex = index;
    lightboxImage.src = IMAGES[index];
    lightbox.classList.add('active');
    resetSlideshow();
}

function closeLightboxModal() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe letter paragraphs
    const paragraphs = document.querySelectorAll('.letter-content p');
    paragraphs.forEach(p => {
        p.classList.add('fade-in-on-scroll');
        observer.observe(p);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
window.addEventListener('resize', () => {
    // Recreate animations on resize for responsive behavior
    if (window.innerWidth < 768) {
        const starsContainer = document.querySelector('.stars');
        starsContainer.innerHTML = '';
        createStars();
    }
});
