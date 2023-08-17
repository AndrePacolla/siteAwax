document.querySelector('.menu .mobile').addEventListener('click',()=>{
   if(document.querySelector('nav').style.display == 'flex'){
      document.querySelector('nav').style.display = 'none'
   }else{
      document.querySelector("nav").style.display = 'flex';
   }
})
