
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig ={    apiKey:"AIzaSyBtM9PKWHl14he8Pjs-0lG6ZnwlDE4rlvM",
authDomain:"kwitter-88fb2.firebaseapp.com",
    databaseURL:"https://kwitter-88fb2.firebaseio.com " ,
projectId: "kwitter-88fb2",
storageBucket: "kwitter-88fb2.appspot.com",
messagingSenderId: "1068084729920",
appId: "1:1068084729920:web:b9b719c92a7789e85a27a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom(){
      var room_name=document.getElementById("room_name").value;
      localStorage.setItem("Room name",room_name);
      
}
function load(){
      document.getElementById("welcome_name").innerHTML="Welcome "+localStorage.getItem("user_name")+"!";
}

