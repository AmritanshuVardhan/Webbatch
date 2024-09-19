var menu = document.getElementById('togle');
var sidenav = document.getElementById('sidenav');
sidenav.style.width="0px";

menu.onlick = function(){
    if(sidenav.style.width=="0px"){
        sidenav.style.width=="100%";
    }
    else{
        sidenav.style.width="0px";
    }
}