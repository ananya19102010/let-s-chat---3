 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBPREXb7Yac8HYeuTS4Uk88hHKsmSJKzvg",
    authDomain: "project-44-a7e64.firebaseapp.com",
    databaseURL: "https://project-44-a7e64-default-rtdb.firebaseio.com",
    projectId: "project-44-a7e64",
    storageBucket: "project-44-a7e64.appspot.com",
    messagingSenderId: "863119522087",
    appId: "1:863119522087:web:a542cdfc6ad8c9981d5102"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
      function addRoom(){
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location = "kwitter_room.html";
      }
      
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  console.log("room Name -"+Room_names);
  row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function redirectToRoomname(name){
  console.log(name);
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_room.html";
  }