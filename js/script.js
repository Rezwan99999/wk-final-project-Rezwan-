// alert("welcome our alpha cars")
let toggler=document.querySelector("#toggler")
let navMenu=document.querySelector(".nav-menu")
let icon=document.querySelector(".fa-angle-down")
toggler.addEventListener("click",listDisplay)
function listDisplay(){
    navMenu.classList.toggle("showList")
    icon.classList.toggle("fa-angle-up")
    icon.classList.toggle("fa-angle-down")
}
function show(icon){
    const show_bar=icon.parentElement.nextElementSibling;
    if(show_bar.style.display==="none" || show_bar.style.display===""){
        show_bar.style.display="block"
        icon.classList.toggle("fa-angle-up")
        icon.classList.toggle("fa-angle-down")
    }
    else{
        show_bar.style.display="none"
        icon.classList.toggle("fa-angle-down")
        icon.classList.toggle("fa-angle-up")
    }
}
let navbar=document.querySelector(".navbar");
window.onscroll=function(){
    scrollFunction()
};
function scrollFunction(){
    console.log("scrolling",document.documentElement.scrollTop);
    
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        navbar.style.backgroundColor="black";
    }
    else{
        navbar.style.backgroundColor="";
    }
}
function show_filter() {
    const show = document.querySelector(".car-layout");

    if (show.style.display === "none" || show.style.display === "") {
        show.style.display = "flex"; 
        show.style.flexDirection = "column";
        show.style.justifyContent = "center";
        show.style.alignItems = "center";
    } else {
        show.style.display = "none"; 
    }
}
function booknow(){
    const show=document.querySelector('.banner-form')
    if (show.style.display === "none" || show.style.display === "") {
        show.style.display = "block"; 
        console.log("ok")

    } 
    // else {
    //     show.style.display = "none"; 
    // }
}
function submit(){
    const show=document.querySelector('.banner-form')
    if (show.style.display === "block") {
        show.style.display = "none"; 
    } 
}