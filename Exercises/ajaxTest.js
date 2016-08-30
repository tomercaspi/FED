
var xhr = new XMLHttpRequest();
xhr.open('GET', 'ajax.txt');
// Track the state changes of the request
xhr.onreadystatechange = function () {

// Ready state 4 means the request is done
    if (xhr.readyState === 4) {
// 200 is a successful return
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            console.log(xhr.responseType);
            document.querySelector('#heading').innerHTML = xhr.responseText;

        } else {
            console.log('Error: ' + xhr.status);
        }
    }
}

// Send the request
xhr.send(null);