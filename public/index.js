const API = "http://localhost:3000/api"

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

window.onload = function () {
    /* let version = httpGet(API + "/version")
    document.getElementById("page-title").innerHTML = version */
    httpGetAsync(API + "/version", (res) => {
        console.log(res)
        document.getElementById('page-title').innerHTML = JSON.parse(res).version
    })
}