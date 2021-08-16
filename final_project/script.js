



let userInput = document.querySelector("#input");
console.dir(userInput);
let submitForm = document.querySelector("sub");
let submitButton = document.querySelector("#submit-button");
let todoList = document.querySelector("#todo-list");

submitButton.onclick = function (event) {
    event.preventDefault();
    let newTask = document.createElement("li");


    newTask.innerHTML = userInput.value;
    todoList.appendChild(newTask);

if (value == "realname") {
    let outPut = document.createElement("text");
    outPut.innerHTML = "insert name"
};
if (value == "username") {
    let outPut = document.createElement("text");
    outPut.innerHTML = "insert username"
};
if (value == "Dob") {
    let outPut = document.createElement("text");
    outPut.innerHTML = "insert date"
};
if (value == "location") {
    let outPut = document.createElement("text");
    outPut.innerHTML = "insert location"
};

}


let home = document.querySelector("#homeButton");
let storedInfo = document.querySelector("#infoButton");
let randomInfo = document.querySelector("#randomInfoButton");
let addInfo = document.querySelector("#storeDataButton");
let login = document.querySelector("#loginButton");

home.onclick = function(event) {
    event.preventDefault();
    document.querySelector("#homeScreen").style.display = "block";
    document.querySelector("#infoScreen").style.display = "none";
    document.querySelector("#randomScreen").style.display = "none";
    document.querySelector("#storeScreen").style.display = "none";
    document.querySelector("#loginScreen").style.display = "none";
}

storedInfo.onclick = function(event) {
    event.preventDefault();
    document.querySelector("#homeScreen").style.display = "none";
    document.querySelector("#infoScreen").style.display = "block";
    document.querySelector("#randomScreen").style.display = "none";
    document.querySelector("#storeScreen").style.display = "none";
    document.querySelector("#loginScreen").style.display = "none";
}

randomInfo.onclick = function(event) {
    event.preventDefault();
    document.querySelector("#homeScreen").style.display = "none";
    document.querySelector("#infoScreen").style.display = "none";
    document.querySelector("#randomScreen").style.display = "block";
    document.querySelector("#storeScreen").style.display = "none";
    document.querySelector("#loginScreen").style.display = "none";
}

addInfo.onclick = function(event) {
    event.preventDefault();
    document.querySelector("#homeScreen").style.display = "none";
    document.querySelector("#infoScreen").style.display = "none";
    document.querySelector("#randomScreen").style.display = "none";
    document.querySelector("#storeScreen").style.display = "block";
    document.querySelector("#loginScreen").style.display = "none";
}

login.onclick = function(event) {
    event.preventDefault();
    document.querySelector("#homeScreen").style.display = "none";
    document.querySelector("#infoScreen").style.display = "none";
    document.querySelector("#randomScreen").style.display = "none";
    document.querySelector("#storeScreen").style.display = "none";
    document.querySelector("#loginScreen").style.display = "block";
}


let randInfoButton = document.querySelector("#randomInfoButton");
randInfoButton.onclick = function(event) {
    event.preventDefault();
}