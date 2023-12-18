
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");
var burger = document.getElementById("burger");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
    sidemenu.style.right = "0px";
    burger.style.display = "none";
}

function closemenu(){
    sidemenu.style.right = "-200px";
    burger.style.display = "block";
}
