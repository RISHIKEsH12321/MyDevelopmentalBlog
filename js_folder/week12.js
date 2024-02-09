const APIKEY = "65c4c159cb555e238d492a3d";

function Post(e){
    e.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    let data = {
        "name": name.value,
        "email": email.value,
        "message": message.value
    }
    console.log(data);
    let settings = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
        },
        body: JSON.stringify(data)
    };

    fetch("https://devblog-9663.restdb.io/rest/banana", settings)
    .then(respnse => respnse.json())
    .then(response => {console.log(response)})
    Load();
    document.getElementById("form").reset();
}

function Load(){
    let settings = {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
        }
    }
    var container = document.getElementById("get-data");
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    fetch("https://devblog-9663.restdb.io/rest/banana",settings)
    .then(respnse => respnse.json())
    .then(data => {
        data.forEach(x => {
            var row = document.createElement("tr");
            var name = document.createElement("td");
            name.innerText = x.name;
            var email = document.createElement("td");
            email.innerText = x.email;

            row.appendChild(name);
            row.appendChild(email);
            container.appendChild(row);
        });
    })

}

document.addEventListener("DOMContentLoaded", function(){
    Load();
})