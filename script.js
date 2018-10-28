function req() {
    var user = {
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value
    };
    var json = JSON.stringify(user);
    var request = new XMLHttpRequest();
    request.open("POST", "https://us-central1-mercdev-academy.cloudfunctions.net/login");
    request.setRequestHeader("Content-type", "application/json");
    request.send(json);
    request.onreadystatechange = function() {
        if (request.status==400) {
            document.getElementById("error").className = "Rectangle";
            document.getElementById("error").innerHTML="<span class =\"E-Mail-or-password-i\">" +
                "E-Mail or password is incorrect<span>";
        }
        else {

            var user = JSON.parse(request.responseText);
            var img = document.getElementById("user");
            document.getElementById("error").className = "";
            document.getElementById("error").innerHTML = "";
            var save = document.getElementById("rec").cloneNode(true)
            img.className = "Oval-2";
            img.src = user.photoUrl;
            document.getElementById("log").remove();
            document.getElementById("email").remove();
            document.getElementById("pass").remove();
            var but = document.getElementById("button");
            but.innerHTML = "<span class =\"Text\">Logout</span>";
            but.onclick = function(){
                document.getElementById("rec").remove();
                document.body.appendChild(save);
            }
            document.getElementById("username").innerText = user.name;
            document.getElementById("username").className = "Helena-Joseph"
        }
    }
}