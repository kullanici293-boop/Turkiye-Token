*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{

background:#050505;
color:white;
font-family:'Poppins',sans-serif;
overflow-x:hidden;

}


/* COLORS */

:root{

--red:#e50914;
--gold:#d4af37;
--dark:#050505;
--glass:rgba(255,255,255,0.08);

}




/* LOADER */


#loader{

position:fixed;
inset:0;
background:#000;
z-index:9999;

display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

animation:hideLoader 3s forwards;

}


.loader-symbol{

font-size:80px;

animation:pulse 1s infinite;

}


#loader h2{

font-family:Orbitron;
margin-top:20px;
color:var(--gold);

}


#loader p{

opacity:.7;

}



@keyframes hideLoader{

0%,85%{
opacity:1;
}

100%{

opacity:0;
visibility:hidden;

}

}



@keyframes pulse{

50%{

transform:scale(1.15);

}

}








/* NAVBAR */


header{

position:fixed;
top:0;
width:100%;
z-index:1000;

background:rgba(0,0,0,.65);
backdrop-filter:blur(15px);

}


nav{

height:90px;
display:flex;
align-items:center;
justify-content:space-between;

padding:0 7%;

}


.logo{

display:flex;
align-items:center;
gap:12px;

font-family:Orbitron;
font-size:22px;
font-weight:bold;

color:var(--gold);

}


.logo img{

width:45px;

}



.menu{

display:flex;
gap:30px;

}


.menu a{

color:white;
text-decoration:none;
font-size:14px;

transition:.3s;

}


.menu a:hover{

color:var(--gold);

}





.nav-buttons{

display:flex;
gap:10px;

}




.gold-btn,
.red-btn,
.outline-btn{

padding:14px 25px;
border-radius:30px;

text-decoration:none;
font-weight:bold;

cursor:pointer;

transition:.3s;

}



.gold-btn{

background:linear-gradient(
45deg,
#b8860b,
#ffd700
);

color:black;

}



.red-btn{

background:var(--red);
color:white;

}



.outline-btn{

border:1px solid var(--gold);
color:white;

}




.gold-btn:hover,
.red-btn:hover,
.outline-btn:hover{

transform:translateY(-5px);
box-shadow:0 0 30px var(--gold);

}








/* HERO */


.hero{

min-height:100vh;

display:flex;
align-items:center;

padding:120px 7% 50px;

position:relative;

overflow:hidden;

}



.hero-background{

position:absolute;
inset:0;

background:

linear-gradient(
rgba(0,0,0,.6),
rgba(0,0,0,.9)
),

url("assets/istanbul-future.png");

background-size:cover;
background-position:center;

z-index:-1;

}



.hero-content{

width:50%;

}


.hero h1{

font-size:60px;

font-family:Orbitron;

background:linear-gradient(
90deg,
white,
var(--gold)
);

-webkit-background-clip:text;
color:transparent;

}


.hero h2{

font-size:38px;
margin:20px 0;

}



.hero p{

font-size:18px;
opacity:.8;
max-width:600px;

}



.hero-buttons{

display:flex;
gap:15px;
margin-top:40px;

}




.stats{

display:flex;
gap:20px;
margin-top:50px;

}


.stat-card{

background:var(--glass);
border:1px solid rgba(255,255,255,.15);

padding:20px;
border-radius:20px;

backdrop-filter:blur(20px);

}


.stat-card h3{

color:var(--gold);
font-size:30px;

}






.hero-art{

width:50%;
position:relative;

}



.coin{

width:500px;

animation:float 5s infinite;

filter:drop-shadow(0 0 50px var(--gold));

}



.guardian{

position:absolute;

width:300px;

right:0;
bottom:0;

animation:float 4s infinite;

}





@keyframes float{


50%{

transform:translateY(-25px);

}


}










/* SECTIONS */


.section{

padding:120px 7%;

text-align:center;

}


.section h2{

font-family:Orbitron;

font-size:42px;

margin-bottom:30px;

color:var(--gold);

}




.center{

max-width:800px;
margin:auto;

opacity:.8;

}





/* CARDS */


.cards{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:25px;

margin-top:50px;

}



.card{

background:

linear-gradient(
145deg,
rgba(255,255,255,.1),
rgba(255,255,255,.03)
);

border:1px solid rgba(212,175,55,.3);

padding:35px;

border-radius:25px;

backdrop-filter:blur(20px);

transition:.4s;

}



.card:hover{

transform:translateY(-15px);

box-shadow:

0 0 40px rgba(212,175,55,.3);

}



.card h3{

color:var(--gold);

margin-bottom:15px;

}









/* DASHBOARD */


.dashboard-grid{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:20px;

}



.contract{

grid-column:span 2;

}



.contract button{

margin-top:15px;

padding:12px 20px;

border:none;

border-radius:20px;

background:var(--gold);

}








/* TOKENOMICS */


.tokenomics{

display:flex;

justify-content:center;
gap:80px;
align-items:center;

}



.circle{

width:250px;
height:250px;

border-radius:50%;

display:flex;
align-items:center;
justify-content:center;

font-size:40px;

background:

conic-gradient(
var(--gold),
var(--red),
black
);


box-shadow:0 0 50px var(--gold);

}



.token-list div{

margin:20px;
font-size:20px;

}





/* ROADMAP */


.timeline{

display:flex;
flex-direction:column;
gap:40px;

}


.phase{

padding:35px;

border-left:3px solid var(--gold);

background:var(--glass);

border-radius:20px;

}





/* COMMUNITY */


.community img{

width:70%;
border-radius:30px;

box-shadow:0 0 60px var(--red);

}







/* STEPS */


.steps{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:20px;

}


.steps div{

background:var(--glass);

padding:40px;

border-radius:20px;

font-size:20px;

}







/* VAULT */


.vault-box{

margin:40px auto;

padding:50px;

max-width:500px;

background:

linear-gradient(
135deg,
#3b2500,
#111
);

border:2px solid var(--gold);

border-radius:30px;

font-size:22px;

}








/* AI */


.ai{

position:fixed;

right:30px;
bottom:30px;

display:flex;
align-items:center;
gap:15px;

background:rgba(0,0,0,.8);

border:1px solid var(--gold);

padding:15px;

border-radius:30px;

z-index:999;

}


.ai img{

width:70px;

}





/* FOOTER */


footer{

padding:70px;

text-align:center;

border-top:1px solid rgba(255,255,255,.1);

}


footer img{

width:80px;

}









/* MOBILE */


@media(max-width:900px){


.menu{

display:none;

}


.hero{

flex-direction:column;

}



.hero-content,
.hero-art{

width:100%;

}



.hero h1{

font-size:40px;

}



.coin{

width:300px;

}



.cards,
.dashboard-grid,
.steps{

grid-template-columns:1fr;

}



.stats{

flex-direction:column;

}



}
