let menu = document.querySelector('.menu')                      
let list = document.querySelector('.list')      
const classOfList = list.classList;                


  


menu.addEventListener("click" ,function menuList(){
    classOfList.toggle("max-md:hidden");menuList();

});