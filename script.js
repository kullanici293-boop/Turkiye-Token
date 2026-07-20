/* ==========================================================
   TÜRKİYE TOKEN
   PREMIUM SCRIPT.JS
   PART 1
========================================================== */


/* ===========================
LOADING SCREEN
=========================== */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loading-screen");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.pointerEvents="none";

},1200);

});




/* ===========================
COPY CONTRACT ADDRESS
=========================== */

function copyCA(){

const input=document.getElementById("contractAddress");

navigator.clipboard.writeText(input.value);

showToast("✅ Contract Address Copied");

}




/* ===========================
TOAST NOTIFICATION
=========================== */

function showToast(text){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=text;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},2500);

}




/* ===========================
SMOOTH SCROLL
=========================== */

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});




/* ===========================
NAVBAR EFFECT
=========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.82)";

header.style.backdropFilter="blur(25px)";

header.style.boxShadow="0 15px 45px rgba(0,0,0,.35)";

}else{

header.style.background="transparent";

header.style.boxShadow="none";

}

});




/* ===========================
MOBILE MENU
=========================== */

const menu=document.getElementById("menu");

const menuButton=document.getElementById("menuButton");

menuButton.addEventListener("click",()=>{

menu.classList.toggle("active");

});




/* ===========================
MENU AUTO CLOSE
=========================== */

document

.querySelectorAll("#menu a")

.forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});
/* ==========================================================
   SCRIPT.JS PART 2 (FINAL)
   COUNTERS • SCROLL ANIMATION • COIN EFFECTS
   PARALLAX • MOUSE GLOW • ACTIVE MENU
========================================================== */


/* ===========================
COUNTER ANIMATION
=========================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=Math.max(10,Math.floor(target/100));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target;

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>counterObserver.observe(counter));




/* ===========================
SCROLL REVEAL
=========================== */

const reveals=document.querySelectorAll(

".info-card,.ecosystem-card,.feature-card,.step-card,.security-card,.timeline-card,.vision-card,.partner-card,.stat-card,.token-card"

);

reveals.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s ease";

});

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

revealObserver.unobserve(entry.target);

}

});

},{threshold:.15});

reveals.forEach(el=>revealObserver.observe(el));




/* ===========================
MOUSE GLOW EFFECT
=========================== */

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});




/* ===========================
PARALLAX
=========================== */

window.addEventListener("scroll",()=>{

const y=window.pageYOffset;

const hero=document.querySelector(".hero-image img");

const future=document.querySelector(".future-background img");

const community=document.querySelector(".community-bg img");

if(hero){

hero.style.transform=`translateY(${y*0.18}px) scale(1.1)`;

}

if(future){

future.style.transform=`translateY(${y*0.10}px) scale(1.08)`;

}

if(community){

community.style.transform=`translateY(${y*0.08}px) scale(1.08)`;

}

});




/* ===========================
COIN HOVER EFFECT
=========================== */

const coin=document.querySelector(".hero-coin");

if(coin){

document.addEventListener("mousemove",e=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

coin.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

}




/* ===========================
ACTIVE MENU
=========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});




/* ===========================
RANDOM FLOATING EFFECT
=========================== */

document.querySelectorAll(".floating-card").forEach(card=>{

setInterval(()=>{

const x=(Math.random()*12)-6;

const y=(Math.random()*12)-6;

card.style.transform=`translate(${x}px,${y}px)`;

},3000);

});




/* ===========================
CONSOLE MESSAGE
=========================== */

console.log("%c🇹🇷 TÜRKİYE TOKEN","font-size:28px;color:#d4af37;font-weight:bold;");
console.log("%cBuilt with ❤️ for the Community","font-size:14px;color:white;");
