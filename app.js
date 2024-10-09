const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const preloader = document.querySelector("#preloader")
const img_dev = document.querySelector("#img-dev")
const btn_top = document.querySelector("#btn-top")

const moon = document.querySelector("#controller_theme")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  moon.classList.toggle("text-white");
  body.classList.toggle("dark")
})




var txtyear=document.querySelector('#year');
txtyear.innerHTML=new Date().getFullYear();


window.addEventListener('load',()=>{
document.querySelector('body').classList.remove('overflow-hidden');
document.querySelector('body').classList.add('overflow-x-hidden');   
preloader.classList.add('hidden');

});

btn_top.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Isso cria um efeito de rolagem suave
  });
});




