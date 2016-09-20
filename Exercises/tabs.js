

function asTabs(node) {
    node.addEventListener('click', displayDiv);

    var childTabs = node.querySelectorAll("[data-tabname]");

    for (var i=0; i<childTabs.length; i++){
        var childElement = childTabs[i];
        childElement.setAttribute("class", "hdn");

        // Create a new button element, and append it to the end of the document body
        var btn = document.createElement("button");
        btn.innerText = childElement.innerText;
        btn.setAttribute("id",childElement.getAttribute("data-tabname"));

        node.insertBefore(btn, childTabs[0]);
    }
}

/**
 * Function that gets an event and add the css class of display: none / block
 */
function displayDiv(e){
    var element = document.querySelector("div[data-tabname=" + "\"" +e.target.attributes[0].value+ "\"");
    if (element.classList.contains("hdn")){
        element.classList.toggle("hdn", false);
    }else {
        element.classList.toggle("hdn", true);
    }
}

asTabs(document.querySelector("#wrapper"));