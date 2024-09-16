
const boxList =document.querySelectorAll(".box-list");


boxList.forEach(boxlis =>{
    const BoxY = boxlis.querySelector(".y-box");
    const ListY = boxlis.querySelector(".Ylist");

    boxlis.addEventListener("click",()=>{
        ListY.classList.toggle("active")
        BoxY.classList.toggle("active")
        
    })
    
});


