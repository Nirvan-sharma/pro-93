
//ADD YOUR FIREBASE LINKS HERE
const config={
    apiKey: "AIzaSyDCR5-vNuzsNpTnO8sofL-63iY4M3W-hSQ",
  authDomain: "chat-app-733dc.firebaseapp.com",
  databaseURL: "https://chat-app-733dc-default-rtdb.firebaseio.com",
  projectId: "chat-app-733dc",
  storageBucket: "chat-app-733dc.appspot.com",
  messagingSenderId: "281455331778",
  appId: "1:281455331778:web:6dec33da11a048a2706e5b",
}

firebase.initializeApp(config);
user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
