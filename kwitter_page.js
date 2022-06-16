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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("mmsg").Value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location="index.html";
  }