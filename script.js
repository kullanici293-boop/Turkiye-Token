// Resmi Akıllı Sözleşme (CA) Bilgileri
const CONTRACT_ADDRESS = "5W9fU1hab4titQighG9x1m4c995379JZ2wjM4Ypdpump"; 

// 1. Preloader Kontrolü
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('opacity-0');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 700);
    }, 1000);
});

// Hızlı analiz butonlarının linklerini otomatik güncelle
function setupAnalyticLinks() {
    document.getElementById('lnk-dex').href = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`;
    document.getElementById('lnk-pump').href = `https://pump.fun/${CONTRACT_ADDRESS}`;
    document.getElementById('lnk-scan').href = `https://solscan.io/token/${CONTRACT_ADDRESS}`;
}
window.addEventListener('DOMContentLoaded', setupAnalyticLinks);

// 2. Canlı DexScreener Veri Çekme Sistemi
async function fetchLiveStats() {
    if (!CONTRACT_ADDRESS) return;
    
    try {
        const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`);
        const data = await response.json();
        
        if (data.pairs && data.pairs.length > 0) {
            const pair = data.pairs[0];
            
            document.getElementById('stat-price').innerText = `$${parseFloat(pair.priceUsd).toFixed(8)}`;
            document.getElementById('stat-mcap').innerText = `$${parseInt(pair.fdv).toLocaleString()}`;
            document.getElementById('stat-vol').innerText = `$${parseInt(pair.volume.h24).toLocaleString()}`;
            document.getElementById('stat-liq').innerText = `$${parseInt(pair.liquidity.usd).toLocaleString()}`;
            
            const change24h = parseFloat(pair.priceChange.h24);
            const changeElem = document.getElementById('stat-change');
            changeElem.innerText = `${change24h > 0 ? '+' : ''}${change24h}%`;
            
            if (change24h > 0) {
                changeElem.className = "text-base font-black text-green-500";
            } else if (change24h < 0) {
                changeElem.className = "text-base font-black text-red-500";
            }
            
            // Holders sayısı DexScreener API'sinde dinamik yer almıyorsa default yedek koruma:
            document.getElementById('stat-holders').innerText = "Aktif";
        } else {
            // Token henüz tamamen trade'e açılmadıysa veya dex verisi oluşmadıysa yedek stabil gösterge
            document.getElementById('stat-price').innerText = "Pump.fun";
            document.getElementById('stat-mcap').innerText = "Yükseliyor";
            document.getElementById('stat-vol').innerText = "Canlı";
            document.getElementById('stat-liq').innerText = "Kilitli";
            document.getElementById('stat-holders').innerText = "Büyüyor";
        }
    } catch (error) {
        console.error("Dex Veri Hatası:", error);
    }
}
setInterval(fetchLiveStats, 20000); // 20 saniyede bir otomatik tazeleme
window.addEventListener('DOMContentLoaded', fetchLiveStats);

// 3. Sözleşme Kopyalama (Yaratıcı Buton Uyarısı)
function copyCA() {
    const caText = document.getElementById("caText").innerText;
    const copyBtn = document.getElementById("copyBtn");
    
    navigator.clipboard.writeText(caText).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i class="fa-solid fa-check text-green-500"></i> Alındı!`;
        copyBtn.classList.add('border-green-500/50', 'bg-green-600/10');
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('border-green-500/50', 'bg-green-600/10');
        }, 2000);
    });
}

// 4. FAQ Akordeon Kontrolü
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// 5. Scroll Animasyonları (Reveal Effect)
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            element.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 6. Tokenomics Donut Grafik (Chart.js Ayarı)
const ctx = document.getElementById('tokenomicsChart');
if (ctx) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Likidite', 'Marketing', 'Airdrop'],
            datasets: [{
                data: [80, 10, 10],
                backgroundColor: ['#dc2626', '#f59e0b', '#262626'],
                borderWidth: 0
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            cutout: '83%'
        }
    });
}

// 7. Akıcı Kırmızı/Sarı Yıldız Tozu Parçacık Simülasyonu
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
        this.size = Math.random() * 1.2 + 0.4;
        this.speedX = Math.random() * 0.15 - 0.075;
        this.speedY = Math.random() * 0.15 - 0.075;
        this.color = Math.random() > 0.5 ? 'rgba(239, 68, 68, 0.12)' : 'rgba(245, 158, 11, 0.08)';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
    draw() {
        ctxP.fillStyle = this.color;
        ctxP.beginPath();
        ctxP.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctxP.fill();
    }
}

for (let i = 0; i < 45; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctxP.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();
