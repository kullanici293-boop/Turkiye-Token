// ======================================================
// TÜRKİYE TOKEN
// PREMIUM SCRIPT
// PART 1
// ======================================================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");
menuBtn.classList.toggle("active");

});

}

// Header Scroll

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// Scroll To Top

const scrollTopBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTopBtn.classList.add("show");

}else{

scrollTopBtn.classList.remove("show");

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// FAQ

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(f=>{

if(f!==item){

f.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

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

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(

".card,.stat,.token-card,.timeline-content,.live-box,.community-btn,.faq-item,.partner"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});
// ======================================================
// TÜRKİYE TOKEN
// PREMIUM SCRIPT
// PART 2
// ======================================================

// Animated Counters

function animateCounter(id,end,duration=2000){

const element=document.getElementById(id);

if(!element) return;

let start=0;

const increment=end/(duration/16);

function update(){

start+=increment;

if(start>=end){

element.textContent=end.toLocaleString();

return;

}

element.textContent=Math.floor(start).toLocaleString();

requestAnimationFrame(update);

}

update();

}

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter("holders",12000);

animateCounter("telegram",8500);

animateCounter("counter1",25000);

animateCounter("counter2",980000);

animateCounter("counter4",72);

entry.target.classList.add("loaded");

counterObserver.unobserve(entry.target);

}

});

},{threshold:.3});

const stats=document.querySelector(".hero-stats");

if(stats){

counterObserver.observe(stats);

}

// Market Cap Animation

function animateMoney(id,target,prefix="$"){

const el=document.getElementById(id);

if(!el) return;

let value=0;

const speed=target/180;

function run(){

value+=speed;

if(value>=target){

el.textContent=prefix+target.toLocaleString();

return;

}

el.textContent=prefix+Math.floor(value).toLocaleString();

requestAnimationFrame(run);

}

run();

}

const moneyObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateMoney("marketcap",4200000);

animateMoney("volume",890000);

moneyObserver.unobserve(entry.target);

}

});

},{threshold:.35});

const hero=document.querySelector(".hero");

if(hero){

moneyObserver.observe(hero);

}

// Active Navigation

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

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
// ======================================================
// TÜRKİYE TOKEN
// PREMIUM SCRIPT
// PART 3 (FINAL)
// ======================================================

// Floating Effect

const coin=document.querySelector(".coin");

window.addEventListener("mousemove",(e)=>{

if(!coin) return;

const x=(window.innerWidth/2-e.clientX)/35;
const y=(window.innerHeight/2-e.clientY)/35;

coin.style.transform=
`translate(${x}px,${y}px)`;

});

// Parallax Background

window.addEventListener("scroll",()=>{

const particles=document.getElementById("particles");

if(particles){

particles.style.transform=
`translateY(${window.scrollY*0.15}px)`;

}

});

// Particles.js

if(typeof particlesJS!=="undefined"){

particlesJS("particles",{

particles:{

number:{
value:60,
density:{
enable:true,
value_area:900
}
},

color:{
value:["#d4af37","#c8102e","#ffffff"]
},

shape:{
type:"circle"
},

opacity:{
value:.35,
random:true
},

size:{
value:3,
random:true
},

line_linked:{
enable:true,
distance:170,
color:"#d4af37",
opacity:.15,
width:1
},

move:{
enable:true,
speed:1.8,
direction:"none",
random:false,
straight:false,
out_mode:"out"
}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
},

resize:true

},

modes:{

grab:{
distance:160,
line_linked:{
opacity:.35
}
},

push:{
particles_nb:4
}

}

},

retina_detect:true

});

}

// Current Year

const yearElement=document.getElementById("year");

if(yearElement){

yearElement.textContent=new Date().getFullYear();

}

console.log("%cTÜRKİYE TOKEN",
"color:#d4af37;font-size:28px;font-weight:bold;");

console.log("%cPremium Website Loaded Successfully.",
"color:#ffffff;font-size:15px;");

// ======================================================
// END OF PREMIUM SCRIPT
// ======================================================
