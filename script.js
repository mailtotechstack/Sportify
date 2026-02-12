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

let dd = true
document.getElementsByClassName("library-toggle")[0].addEventListener("click", ()=>{
    if(dd){
        document.getElementsByClassName("left-main")[0].style.display = "block";
        dd=false;
    }
    else{
        document.getElementsByClassName("left-main")[0].style.display = "none";
        dd=true;
    }
});