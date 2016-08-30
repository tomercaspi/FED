
/*
 API URL:
 http://jsonplaceholder.typicode.com/

 Tasks:
 - Get al posts and print their `title` in the HTML as a list of items
 - Make a POST request to `/posts` and log the `id` of the added post to the console
 - Make a DELETE request to `/posts/1`, what do you get in the response?

 */



var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');

function getListItems(titles) {
    var result = '';
  //  console.log(titles);
    for (var i = 0; i < titles.length; i++) {
        result += '<li>' + titles[i].title + '</li>';
    }
    return result;
}

function getID(obj){
    return obj.id;
}

xhr.addEventListener('load', function () {
    var data;
    if (xhr.getResponseHeader('content-type').indexOf('application/json') > -1) {
        data = JSON.parse(xhr.response);
    } else {
        data = xhr.response;
    }

    var listItems = getListItems(data);
    var divElm = document.querySelector('#listItem');

    divElm.innerHTML = '<ol>' + listItems + '</ol>';
});

xhr.send();


var xhr1 = new XMLHttpRequest();
xhr1.open('POST', 'http://jsonplaceholder.typicode.com/posts');

var newObj = {
    "userId": 1,
    "id": 666,
    "title": "Back to the Future",
    "body": "Go see the movie, forget the book"
}

xhr1.addEventListener('load', function (){
    var result = JSON.parse(xhr1.response);
    getID(result);
})

xhr1.send(JSON.stringify(newObj));











/*document.querySelector('form').addEventListener('submit', function (e) {
 e.preventDefault();

 var formElm = e.target;
 var formData = new FormData(formElm);*/

/*
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(JSON.stringify({

    //name: formData.get('user-name')
}));*/
