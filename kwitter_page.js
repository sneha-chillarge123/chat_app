// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDL49mkodXbL63t0XRbvDbLMYndf0HfpnA",
    authDomain: "chat-app-b9fc2.firebaseapp.com",
    databaseURL: "https://chat-app-b9fc2-default-rtdb.firebaseio.com",
    projectId: "chat-app-b9fc2",
    storageBucket: "chat-app-b9fc2.appspot.com",
    messagingSenderId: "886152681573",
    appId: "1:886152681573:web:57c32f2f67a623b7a00e8c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

var user_name  = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name , 
          message: msg ,
          like: 0
    });
    document.getElementById("msg").value = "";
}
