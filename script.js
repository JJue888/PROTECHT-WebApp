let userNamer = document.querySelector("#namer");
let socailer = document.querySelector("#socailer");
let placer = document.querySelector("#IPaddreser");
let submiterButton = document.querySelector("#submiter-button");
let database = firebase.database().ref();
let uservalue = document.querySelector("#username");
let submitForm = document.querySelector("#sub");
let submitButton = document.querySelector("#submit-button");
let todoList = document.querySelector("#todo-list");
submitButton.onclick = function (event) {
    event.preventDefault();
    let newTask = document.createElement("li");
    let userName = document.queryCommandValue = "value";
    newTask.innerHTML = userInput.value;
    todoList.appendChild(newTask);
}
let home = document.getElementById("homeButton");
let storedInfo = document.getElementById("infoButton");
let randomInfo = document.getElementById("randomInfoButton");
let addInfo = document.getElementById("storeDataButton");
let login = document.getElementById("loginButton");
home.onclick = function(event) {
    event.preventDefault();
    document.getElementById("homeScreen").style.display = "block";
    document.getElementById("infoScreen").style.display = "none";
    document.getElementById("randomScreen").style.display = "none";
    document.getElementById("storeScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("logo").style.display = "block";
}
storedInfo.onclick = function(event) {
    event.preventDefault();
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("infoScreen").style.display = "block";
    document.getElementById("randomScreen").style.display = "none";
    document.getElementById("storeScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "none";
}
randomInfo.onclick = function(event) {
    event.preventDefault();
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("infoScreen").style.display = "none";
    document.getElementById("randomScreen").style.display = "block";
    document.getElementById("storeScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "none";
}
addInfo.onclick = function(event) {
    event.preventDefault();
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("infoScreen").style.display = "none";
    document.getElementById("randomScreen").style.display = "none";
    document.getElementById("storeScreen").style.display = "block";
    document.getElementById("loginScreen").style.display = "none";        
    submiterButton.onclick = function DataBase(event){
        event.preventDefault();
        console.log("works")
        let  Namerer = userNamer.value;
        let Socailers = socailer.value;
        let Ipers = placer.value;
        let valuer ={
            fullNames: Namerer,
            SocialSecurity:Socailers,
            IP_Adress: Ipers
        }
         database.push(valuer);    
         userNamer.value = "";
         socailer.value = "";
         placer.value = "";
    }
}
login.onclick = function(event) {
    event.preventDefault();
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("infoScreen").style.display = "none";
    document.getElementById("randomScreen").style.display = "none";
    document.getElementById("storeScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "block";
}
let randomCollection = document.querySelector("#randomCollection");
let randomButton = document.querySelector("#randomButton");
let otherButton = document.getElementsByClassName("otherButton");
let saveButton = document.getElementById("saveButton");
let newButton = document.getElementById("newButton");
randomButton.onclick = function(event) {
    event.preventDefault();
    document.getElementById("randomButton").style.display = "none"; 
    document.getElementById("saveButton").style.display = "block";
    document.getElementById("newButton").style.display = "block"; 
    document.getElementById("someButtons").style.display = "block";    
    fetch("https://randomuser.me/api")
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            console.log("Success");
            console.log(myJson);
            let firstName = myJson.results[0].name.first;
            let lastName = myJson.results[0].name.last;
            let email = myJson.results[0].email;
            let city = myJson.results[0].location.city;
            let country = myJson.results[0].location.country;
            let state = myJson.results[0].location.state;
            let streetNum = myJson.results[0].location.street.number;
            let streetName = myJson.results[0].location.street.name;
            let zip = myJson.results[0].location.postcode;            
            let fullName = firstName + " " + lastName;
            let address = streetNum + " " + streetName + ", " + city + " " + state + ", " + country + " " + zip + ".";
            let newP = document.createElement("p");            
            newP.innerHTML = "Name: " + fullName + "<br>" + "Email: " + email + "<br>" + "Address: " + address;
            newP.style.color = "white";
            randomCollection.appendChild(newP);        
            newButton.onclick = function(event) {
                event.preventDefault();
                randomCollection.innerHTML = ""
                document.getElementById("randomButton").style.display = "block";
                document.getElementById("saveButton").style.display = "none";
                document.getElementById("newButton").style.display = "none";
                document.getElementById("someButtons").style.display = "none";
            }
            saveButton.onclick = function(event) {     
                document.getElementById("randomButton").style.display = "block";
                document.getElementById("saveButton").style.display = "none";
                document.getElementById("newButton").style.display = "none";
                document.getElementById("someButtons").style.display = "none";
                let value = {
                    Name: fullName,
                    Email: email,
                    Address: address
                }
                database.push(value);
                randomCollection.innerHTML = ""
            }
        });
}