
var list = [1,2,3,4,5];

// forEach runs in an a-syncronic way
list.forEach(function(element, index, array){
    element.addEventListener('click', function(e){
        e.preventDefault();
    })
})
