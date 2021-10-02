
var firebaseConfig = {
      apiKey: "AIzaSyD2AXc9XQfZA1GrLWG5xNDlCPWxjuuQIKo",
      authDomain: "siddhartha-qbny.firebaseapp.com",
      databaseURL: "https://siddhartha-qbny-default-rtdb.firebaseio.com",
      projectId: "siddhartha-qbny",
      storageBucket: "siddhartha-qbny.appspot.com",
      messagingSenderId: "634954634570",
      appId: "1:634954634570:web:96f2b56eef0347baff1db3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = " Welcome -" + user_name;

function addroom(){
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
localStorage.setItem( "room_name", room_name );

window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id ="+Room_names+" onclick ='redirecttoroomname(this.id)' > #" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location.replace("kwitter.html");
      }
      
      