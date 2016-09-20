
// This is an option to wait for the DOM to finish his page reading and then run your scripts
document.addEventListener("DOMContentLoaded", onDomReady);

function onDomReady() {

    addEvent("click", "button", foo);
    addEvent("keyup", "button", foo);

    var nodes = document.getElementsByTagName("button");
    nodes[1].addEventListener('click', foo);

    var className = document.getElementsByClassName("Button1");
    console.log(typeof className + className)
    //className.addEventListener("mouseover", foo);

    var test = document.querySelector("button");
    test.addEventListener('click', foo);

    addEvent("keypress", "Input", removeCharsByCharCode);
    addEvent("keydown", "Input", removeCharsByKeyCode);

 //   addEvent("keydown", "fieldset", showBadKey);

function foo(e){
    alert("press button1");
    console.log(e.type + " just Happened", e);
}


}

/*function showBadKey (e) {
    e.currentTarget.classList.toggle("error", isBadKey(e.key));
}*/


function removeCharsByCharCode(e){
    var forbiddenKeys = ["a", "b", "c"];

    if (forbiddenKeys.indexOf(e.key) >= 0){
        console.log(e);
        console.error("User pressed '" + e.key + "'");
        e.preventDefault();
    }

    if (e.charCode == 113 || e.charCode == 110 || e.charCode == 100){
        // prevent from typing the characters, it stops the default action functionality of entering a character
        e.preventDefault();
    }
}

function removeCharsByKeyCode(e){
    if (e.keyCode == 81 || e.keyCode == 70 || e.keyCode == 69){

        e.target.classList.toggle("error", true);

        e.preventDefault();
    } else {
        e.target.classList.toggle("error", false);
    }
}

function addEvent(eventType,itemToSearch, callback){
    var node = document.querySelector(itemToSearch);
    node.addEventListener(eventType, callback);
}
