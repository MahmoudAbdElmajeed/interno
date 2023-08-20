var closeOpenBtn = document.querySelector(".humburger");
var menu = document.querySelector(".nav-right");
var closeOpenStatus = 0;

// way1: by Inline style
// closeOpenBtn.addEventListener("click", () => {
//     if (closeOpenStatus == 0) {
//         menu.style.transform = "translateX(0)";
//         closeOpenStatus = 1;
//         console.log("menu was closed and now is open");
    
//     } else {
//         menu.style.transform = "translateX(110%)";
//         closeOpenStatus = 0;
//         console.log("menu was opened and now is close");
// }   
    
// })

// way2
closeOpenBtn.addEventListener("click", () => {
    menu.classList.toggle("open");    
})