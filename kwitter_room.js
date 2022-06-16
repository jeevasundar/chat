const firebaseConfig = {
      apiKey: "AIzaSyBl96iYPVgrXcDyoWrbHyq-cZljWVXp6NQ",
      authDomain: "kwitter-d0413.firebaseapp.com",
      databaseURL: "https://kwitter-d0413-default-rtdb.firebaseio.com",
      projectId: "kwitter-d0413",
      storageBucket: "kwitter-d0413.appspot.com",
      messagingSenderId: "701404469120",
      appId: "1:701404469120:web:cb6eb5c2d06350c8c09365"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            purpose : "adding room name"
      });

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

     console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById ("output").innerHTML+= row;       
      
      //End code

      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location ="kwitter_page.html";
  }
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location="index.html";
  }