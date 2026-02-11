let cc = true
document.getElementsByClassName("toggle")[0].addEventListener("click", ()=>{
    if(cc){
        document.getElementsByClassName("nav-container")[0].setAttribute("id", "hide");
        cc=false;
    }
    else{
        document.getElementsByClassName("nav-container")[0].removeAttribute("id", "hide");
        cc=true;
    }
});