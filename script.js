const openBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
openBtn.addEventListener("click",()=>{
    document.getElementById("menu").style.display ="block";
})
closeBtn.addEventListener("click",()=>{
    document.getElementById("menu").style.display ="none";

})