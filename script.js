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


    

