
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDe3VUTUcFa2uzwSToZQ8OeH8HtiELnIqc",
      authDomain: "kwitter-eb0b8.firebaseapp.com",
      databaseURL: "https://kwitter-eb0b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb0b8",
      storageBucket: "kwitter-eb0b8.appspot.com",
      messagingSenderId: "855757389659",
      appId: "1:855757389659:web:58011c660887516488247e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
      user_name = localStorage.getItem("user_name");
      document.getElementById("welcome").innerHTML = "Welcome "+user_name + " !";
      
      function add_room(){
            room_name = document.getElementById("add_room").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose : "Adding room name   "
                  });
                  localStorage.setItem("room_name",room_name);
                  window.location = "kwitter_page.html";

      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name"+Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

