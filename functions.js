const STYLESHEET_KEY = "stylesheet";
var num = 0; //global variable

function toggleStyleSheet(){
    const ele = document.getElementById("mainStyleSheet");

    var fileName = ele.getAttribute("href");

    var newFileName = "style.css";
    if(ele.getAttribute("href") == "style-2.css") {
        newFileName = "style.css"
    }
    else {
        newFileName = "style-2.css";
    }

    ele.setAttribute("href", newFileName);
    localStorage.setItem(STYLESHEET_KEY, newFileName);
}

window.onload = function(){
    var ss = localStorage.getItem(STYLESHEET_KEY) || "style.css";

    var ht = document.getElementById("mainStyleSheet");
    ht.setAttribute("href", ss);

    
}