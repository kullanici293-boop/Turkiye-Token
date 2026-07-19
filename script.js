// =====================================
// TÜRKİYE TOKEN WEBSITE JAVASCRIPT
// =====================================



// CONTRACT COPY SYSTEM

function copyCA(){

const ca = "5W9fU1hab4titQighG9x1m4c995379JZ2wjM4Ypdpump";


navigator.clipboard.writeText(ca);


alert(
"Contract address copied!\n\n" + ca
);


}






// =====================================
// HERO COIN 3D MOUSE EFFECT
// =====================================


const coin = document.querySelector(".coin");


document.addEventListener(
"mousemove",
(e)=>{


if(!coin) return;


let x =
(e.clientX / window.innerWidth - .5) * 20;


let y =
(e.clientY / window.innerHeight - .5) * 20;



coin.style.transform =
`
rotateY(${x}deg)
rotateX(${-y}deg)
`;



});







// =====================================
// SMOOTH REVEAL ANIMATIONS
// =====================================



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},

{

threshold:.15

}



);



document
.querySelectorAll(
".card,.phase,.steps div,.vault-box"
)
.forEach(
(el)=>{


el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition=
"1s ease";


observer.observe(el);


});









// =====================================
// COMMUNITY POWER COUNTERS
// =====================================


function animateNumber(element,target){


let current=0;


let speed=target/100;



let interval=setInterval(()=>{


current+=speed;


if(current>=target){


current=target;

clearInterval(interval);


}



element.innerHTML=
Math.floor(current).toLocaleString();



},20);



}



const counters =
document.querySelectorAll(".stat-card h3");



counters.forEach((counter,index)=>{


if(index===0){

animateNumber(counter,1000000000);

}



});









// =====================================
// AI GUARDIAN INTERACTION
// =====================================


const ai =
document.querySelector(".ai");



if(ai){


ai.addEventListener(
"click",
()=>{


alert(
"🦅 Bozkor Guardian:\n\nWelcome explorer 🇹🇷\n\nTogether we build the future of Turkish Web3."
);


}

);


}







// =====================================
// SECRET EASTER EGG
// =====================================


let clicks=0;



if(coin){


coin.addEventListener(
"click",
()=>{


clicks++;



if(clicks===5){


document.body.style.animation=
"secretGlow 2s";



alert(
"🇹🇷 SECRET UNLOCKED\n\nThe Guardian recognizes an early explorer."
);



clicks=0;


}


});


}







// =====================================
// ADD SECRET STYLE
// =====================================



const style =
document.createElement("style");


style.innerHTML=`

@keyframes secretGlow{

0%{

filter:none;

}

50%{

filter:
drop-shadow(0 0 80px gold);

}


100%{

filter:none;

}

}


`;



document.head.appendChild(style);








// =====================================
// NAVBAR SCROLL EFFECT
// =====================================


window.addEventListener(
"scroll",
()=>{


const header =
document.querySelector("header");



if(window.scrollY>50){


header.style.background=
"rgba(0,0,0,.9)";


}

else{


header.style.background=
"rgba(0,0,0,.65)";


}



});






// =====================================
// WELCOME MESSAGE
// =====================================


setTimeout(()=>{


console.log(
`
🇹🇷 TÜRKİYE TOKEN

United by Culture.
Powered by Blockchain.

Contract:
5W9fU1hab4titQighG9x1m4c995379JZ2wjM4Ypdpump

Welcome to the Web3 movement.
`
);


},3000);
