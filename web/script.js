function check_active(div){
    const elem = document.getElementById(div.id);
    
    //elem.style.visibility = "hidden";
    
    if (elem.style.backgroundColor == "red") {
        elem.style.backgroundColor = "blue";
    } else {
        elem.style.backgroundColor = "red";
    }
}