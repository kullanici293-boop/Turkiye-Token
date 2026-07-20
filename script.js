// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loading-screen");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

        }, 800);

    }

});




// ==========================
// COPY CONTRACT ADDRESS
// ==========================


function copyCA(){


    const ca =
    "5W9fU1hab4titQighG9x1m4c995379JZ2wjM4Ypdpump";



    navigator.clipboard.writeText(ca)
    .then(()=>{


        showToast(
        "✅ Contract Address Copied"
        );


    });


}






// ==========================
// TOAST MESSAGE
// ==========================


function showToast(message){


    const toast =
    document.createElement("div");


    toast.className =
    "toast-message";


    toast.innerHTML =
    message;



    document.body.appendChild(toast);




    setTimeout(()=>{


        toast.classList.add("show");


    },100);




    setTimeout(()=>{


        toast.classList.remove("show");



        setTimeout(()=>{

            toast.remove();

        },500);



    },3000);



}







// ==========================
// MOBILE MENU
// ==========================


const menuBtn =
document.querySelector(".mobile-menu-btn");

const nav =
document.querySelector(".navbar nav");



if(menuBtn){


menuBtn.addEventListener("click",()=>{


    nav.classList.toggle("active");


});


}









// ==========================
// SCROLL REVEAL ANIMATION
// ==========================



const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


}


});


},
{
threshold:0.15
}

);




document.querySelectorAll(
"section, .eco-card, .token-card, .road-card, .security-card"
)
.forEach((el)=>{


el.classList.add("reveal");


observer.observe(el);


});









// ==========================
// SMOOTH NAVIGATION
// ==========================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});


});








// ==========================
// HERO PARALLAX EFFECT
// ==========================


window.addEventListener(
"scroll",
()=>{


const heroBg =
document.querySelector(".hero-bg");


if(heroBg){


heroBg.style.transform =
"scale(1.08) translateY("+
window.scrollY * 0.15+
"px)";


}



});
 
/* =====================
 EXTRA SECTIONS
===================== */



.why-section,
.achievements-section,
.movement-banner {

    background:#050505;

}





.why-grid {


    display:grid;

    grid-template-columns:

    repeat(4,1fr);


    gap:25px;


}





.why-card {


    padding:35px 25px;


    text-align:center;


    border-radius:25px;


    background:

    rgba(255,255,255,.05);


    border:

    1px solid rgba(212,175,55,.2);


    transition:.4s;


}





.why-card div {


    font-size:45px;

    margin-bottom:20px;


}





.why-card h3 {


    color:var(--gold);

    margin-bottom:15px;


}





.why-card p {


    color:#aaa;

    line-height:1.7;


}





.why-card:hover {


    transform:translateY(-10px);


    border-color:var(--gold);


}









/* =====================
 ACHIEVEMENTS
===================== */


.achievement-grid {


    display:grid;

    grid-template-columns:

    repeat(4,1fr);

    gap:25px;


}




.achievement-card {


    padding:35px;


    text-align:center;


    border-radius:25px;


    background:

    linear-gradient(
    145deg,
    rgba(217,4,41,.15),
    rgba(212,175,55,.08)
    );


    border:

    1px solid rgba(212,175,55,.3);


}





.achievement-card strong {


    display:block;


    font-size:40px;


    color:var(--gold);


    font-family:'Orbitron';


}





.achievement-card span {


    color:#ddd;


}









/* =====================
 MOVEMENT BANNER
===================== */


.movement-box {


    text-align:center;


    padding:80px 30px;


    border-radius:40px;


    background:


    linear-gradient(
    135deg,
    rgba(217,4,41,.35),
    rgba(212,175,55,.15)
    );


    border:

    1px solid rgba(212,175,55,.4);


}





.movement-box h2 {


    font-size:50px;


    margin-bottom:20px;


}





.movement-box p {


    color:#ddd;


    margin-bottom:35px;


}





.movement-buttons {


    display:flex;


    justify-content:center;


    gap:20px;


    flex-wrap:wrap;


}









/* =====================
 REVEAL ANIMATION
===================== */


.reveal {


    opacity:0;


    transform:translateY(40px);


    transition:1s ease;


}





.reveal.visible {


    opacity:1;


    transform:translateY(0);


}









/* =====================
 TOAST
===================== */


.toast-message {


    position:fixed;


    bottom:30px;


    left:50%;


    transform:
    translateX(-50%)
    translateY(100px);


    background:#111;


    color:white;


    padding:15px 30px;


    border-radius:50px;


    border:

    1px solid var(--gold);


    z-index:99999;


    transition:.4s;


}





.toast-message.show {


    transform:
    translateX(-50%)
    translateY(0);


}









/* =====================
 MOBILE MENU
===================== */


.mobile-menu-btn {


    display:none;


    background:none;


    border:none;


    color:white;


    font-size:28px;


}





@media(max-width:900px){



.mobile-menu-btn {


    display:block;


}




.navbar nav {


    position:absolute;


    top:80px;


    left:0;


    width:100%;


    background:#050505;


    flex-direction:column;


    align-items:center;


    padding:30px;


    display:none;


}





.navbar nav.active {


    display:flex;


}





.why-grid,
.achievement-grid {


    grid-template-columns:1fr;


}





.movement-box h2 {


    font-size:32px;


}



}
