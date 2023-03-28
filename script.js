document.querySelector(".btn_menu_mobile").addEventListener("click",()=>{
   document.querySelector(".main_header").classList.toggle("show-menu")

}
);

document.querySelector(".btn_close_menu_mobile").addEventListener("click",()=>{
   document.querySelector(".main_header").classList.toggle("show-menu")

}
);



// animate icons on screen

const item = document.querySelectorAll("[data-animate]");

const animateScroll = ()=>{
   const windownTop = window.pageYOffset + window.innerHeight * 0.85;
   item.forEach((element) =>{
      if(windownTop > element.offsetTop){
         element.classList.add('animate')
      }else{
         element.classList.remove('animate')

      }
   })

}
animateScroll()

window.addEventListener("scroll",()=>{
   animateScroll()
})
