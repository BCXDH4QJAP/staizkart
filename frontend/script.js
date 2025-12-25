const backendURL = "http://localhost:3000"; //we use this variable so we don;t repeat the urll again and again.

//sign up

function signup() {     //this run when useer click on the sign up button.
    const username = document.getElementById("signupUsername").value; //value denote what the user typed, and, store in the username.
    const password = document.getElementById("signupPassword").value;

    /*fetch() is used to send a request to the backend
    backendURL + "/signup" becomes:
    http://localhost:5000/signup
    This matches the signup API in server.js */
    fetch(backendURL + "/signup", {
        method: "POST",//post is used to creating new data.
        headers: {"content-Type": "application/json" },//tells backend that i am sending data in JSON format.
        body: JSON.stringify({username, password})/*convers JS object into json string, and sends this data to backend
    {
        "username": "user entered name",
        "password": "user entered password"
    } */
    })
        .then(response => response.json())//backend send the response in json format, this line converts response into js object. like{ "success": true, "message": "Signup successful" }

        .then(data => {
        document.getElementById("signupMsg").innerText = data.message;//display on screen
        });
}

//SIGN IN

function signin() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    fetch(backendURL + "/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {
        document.getElementById("loginMsg").innerText = data.message;
    });
}
