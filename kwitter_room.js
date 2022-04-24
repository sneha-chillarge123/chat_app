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
  
  var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome  "  + user_name + "  !!";

  function add_room(){
     var room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose: "adding roomname"
     });
     localStorage.setItem("room_name" , room_name);
     window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
   console.log("Room name- " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}
