//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location.replace("index.html");
}

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });

      document.getElementById("msg").value = "";

}

