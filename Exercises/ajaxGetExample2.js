
/*
 API URL:
 http://jsonplaceholder.typicode.com/

 Tasks:
 - Get al posts and print their `title` in the HTML as a list of items
 - Make a POST request to `/posts` and log the `id` of the added post to the console
 - Make a DELETE request to `/posts/1`, what do you get in the response?
 - Make a PUT request to edit an existing POST

 */

// GET request
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://hidden-headland-7200.herokuapp.com/');

function getListItems(titles) {
    var result = '';

    for (var i = 0; i < titles.length; i++) {
        var name = titles[i].name || "";
        var id = titles[i]._id || "";
        var message = titles[i].message || "";

        if (titles[i].name || titles[i].message)
            result += '<tr><td>' + name + '</td>' + '<td>' + id + '</td>' + '<td>' + message + '</td></tr>';
    }
    return result;
}

function getID(obj){
    console.log(obj);
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

    divElm.innerHTML = '<tr>' +
        '<th>name</th>' +
        '<th>ID</th>' +
        '<th>Message</th>' +
        '</tr>' + listItems;
});

xhr.send();



// Post request
var xhr1 = new XMLHttpRequest();
xhr1.open('POST', 'https://hidden-headland-7200.herokuapp.com/new');

var newObj = {
    name: "Tomer",
    message: "New Post"
}

xhr1.setRequestHeader('Content-Type', 'application/json');
// xhr1.send(JSON.stringify(newObj));


// Delete request
var xhr2 = new XMLHttpRequest();
xhr2.open('DELETE', 'https://hidden-headland-7200.herokuapp.com/delete/5788a5e2783195030085d2e8');// + getID(result));

xhr2.send();



// PUT request - Edit a message
var xhr3 = new XMLHttpRequest();
xhr3.open('PUT', 'https://hidden-headland-7200.herokuapp.com/edit/5788a3957831950' +
    '30085d2c7');// + getID(result));

xhr3.setRequestHeader('Content-Type', 'application/json');

var editObj = {
    name: "Tomer",
    message: "New Edited Post"
}

xhr3.send(JSON.stringify(editObj));


// Delete All POSTS per a given name

xhr.addEventListener('load', function () {
    var data2 = JSON.parse(xhr.response);

    for (var i = 0; i < data2.length; i++) {
        if (data2[i].name === 'Tomer') {
            var xhr4 = new XMLHttpRequest();
            xhr4.open('DELETE', 'https://hidden-headland-7200.herokuapp.com/delete/' + data2[i]._id);// + getID(result));
           // xhr4.send();
        }
    }
});

/*document.querySelector('form').addEventListener('submit', function (e) {
 e.preventDefault();

 var formElm = e.target;
 var formData = new FormData(formElm);*/

/*
 xhr.setRequestHeader('Content-Type', 'application/json');

 xhr.send(JSON.stringify({

 //name: formData.get('user-name')
 }));*/

/*
xhr1.addEventListener('load', function () {
    result = JSON.parse(xhr1.response);
}*/
