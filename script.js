// let copy = (text) => {
//     document.getElementById("text").select();
//     document.execCommand("copy");
// };

const copyIcon = document.querySelectorAll(".copyIcon");
const copyText = document.querySelectorAll(".copyText");

    for(let i=0; i < copyIcon.length; i++){
        copyIcon[i].addEventListener("click", function message(){
            copyText[i].style.display = ("inline");
            copyText[i].textContent = "Copied...";

            setTimeout(function message(){
                copyText[i].style.display = ("none");
            },1500);
        });
        
    };

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let ProgressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;

    let calcHeight = 
     document.documentElement.scrollHeight -
     document.documentElement.clientHeight;

     let scrollValue = Math.round((pos * 100)/calcHeight);

     if(pos > 100){
        scrollProgress.style.display = "grid";
     }
     else{
        scrollProgress.style.display = "none";
     }
     scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = "0";
     });

     scrollProgress.style.background = `conic-gradient(#ffcc00 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


    
