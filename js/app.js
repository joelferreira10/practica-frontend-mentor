const navegacion=document.querySelector(".navegacion-sass");
let nav1=document.querySelector(".nav1")

console.log(navegacion)
navegacion.addEventListener("click",(e)=>{
   console.log(e.target.classList.contains("list-nav"))
})
// navegacion.addEventListener("mouseleave",()=>{
//     nav1.style.display="none";
// })