// 1. Sözleşme Adresi Kopyalama
function copyCA() {
    const caText = document.getElementById("caText").innerText;
    navigator.clipboard.writeText(caText).then(() => {
        alert("Contract Address copied to clipboard!");
    });
}

// 2. Sıkça Sorulan Sorular (Accordion) Aç/Kapat
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// 3. Scroll Reveal Animasyonu
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 4. Tokenomics Donut Grafik (Chart.js)
const ctx = document.getElementById('tokenomicsChart');
if (ctx) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Raydium Liquidity', 'Marketing & CEX', 'Community Airdrops'],
            datasets: [{
                data: [80, 10, 10],
                backgroundColor: ['#dc2626', '#f59e0b', '#404040'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            cutout: '75%'
        }
    });
}

// 5. Arka Plan Hareketli Particle Efekti
const canvas = document.getElementById('particleCanvas');
const ctxP = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    draw() {
        ctxP.fillStyle = 'rgba(239, 68, 68, 0.2)';
        ctxP.beginPath();
        ctxP.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctxP.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 60; i++) {
        particles.push(new Particle());
    }
}
initParticles();

function animateParticles() {
    ctxP.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();
