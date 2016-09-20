
console.log(getElementByTagName(document.body, "h1"));

console.log(getElementByTagName(document.body, "h1").length);
// → 1
console.log(getElementByTagName(document.body, "span").length);
// → 3
var para = document.querySelector("p");
console.log(getElementByTagName(para, "span").length);
// → 2

console.log(talksAbout(document.body,"politics"))


function getElementByTagName(node, tagName){
    var elements = [];

    // Normalize the `tagName` for later comparison
    tagName = tagName.toLowerCase();

    // Init the children lookup on the first node
    searchNode(node);

    return elements;

    // Setup recursive function to be able to search down the children of the children
    function searchNode(node){

        for (var i=0; i< node.childNodes.length;i++){
            var child = node.childNodes[i];

            // Make sure we are dealing with an Element node, Element node is number "1" in nodeType
            if (child.nodeType == Node.ELEMENT_NODE ){
                // If the `tagName` matches, add to the results array
                if (child.nodeName.toLowerCase() === tagName){
                    elements.push(child);
                }
            }
            // Search through it's children as well (recurse)
            searchNode(child);
        }
    }
}



// 1. Function that returns an array of elements where the str exists in them.
// 2. Function that returns true/false if the node has a str in one of its elements

function talksAbout(node, str){
    // var elements = [];
    var result = false;
    // Normalize the `tagName` for later comparison
    str = str.toLowerCase();

    // Init the children lookup on the first node
    searchString(node);

    return result;

    // Setup recursive function to be able to search down the children of the children
    function searchString(node) {

        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];

            // Make sure we are dealing with an Element node, Element node is number "1" in nodeType
            if (child.nodeType == Node.TEXT_NODE) {
                // If the `tagName` matches, add to the results array
                if ((child.nodeValue.toLowerCase()).indexOf(str) !== -1) {
                    //elements.push(child);
                    result = true;
                }
            }

            // Search through it's children as well (recurse)
            searchString(child);
        }
    }
}

