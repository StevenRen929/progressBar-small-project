const progress = document.getElementById('progress');
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
//circles 拿的是array

let currentActive = 1;


next.addEventListener("click",()=>{
    currentActive++;
    
    if(currentActive>circles.length){
        currentActive = 4;
    }
    updataStyle();
})

prev.addEventListener("click",()=>{
    currentActive--;
    if(currentActive<1){
        currentActive = 1;
    }
    updataStyle();
})

function updataStyle(){
    circles.forEach((circle,index)=>{
        if(index<currentActive){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    })
    const active = document.querySelectorAll(".active");
    progress.style.width=((active.length-1)/(circles.length-1))*100 + '%';
    if(currentActive===1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled =false;
    }

}