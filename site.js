const mb=document.querySelector(".menu-btn"),nav=document.getElementById("nav");
if(mb){mb.addEventListener("click",()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
nav.addEventListener("click",e=>{if(e.target.tagName==="A"){nav.classList.remove("open");mb.setAttribute("aria-expanded","false")}});}
