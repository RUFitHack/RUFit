var firebaseConfig = {};
  firebase.initializeApp(firebaseConfig);
   
  // Get a reference to the database
  var database = firebase.database();
  
  // Initialize an empty queue
  var WerbBasketemailQueue = [];
  var WerbVolleyemailQueue = [];
  var WerbBadminemailQueue = [];
  var LiviBasketemailQueue = [];
  var LiviVolleyemailQueue = [];
  var CAbasketemailQueue = [];
  var CAvolleyemailQueue = [];
  var CookBasketemailQueue = [];
  var CookVolleyemailQueue = [];
  

  document.getElementById("werbBasket").addEventListener("click", myFunction1);
  document.getElementById("werbVolley").addEventListener("click", myFunction2);
  document.getElementById("CollegeBasket").addEventListener("click", myFunction3);
  document.getElementById("CollegeVolley").addEventListener("click", myFunction4);
  document.getElementById("LivingstonBasket").addEventListener("click", myFunction5);
  document.getElementById("LivingstonVolley").addEventListener("click", myFunction6);
  document.getElementById("Cook/Doug Basket").addEventListener("click", myFunction7);
  document.getElementById("Cook/Doug Volley").addEventListener("click", myFunction8);

  function myFunction1() {
    database.ref('emails').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        WerbBasketemailQueue.push(email);
      });
      alert('Emails added to queue:', WerbBasketemailQueue); 
    })
 
  }
  function myFunction2() {
    database.ref('emails').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        WerbVolleyemailQueue.push(email);
      });
     al('Emails added to queue:', WerbVolleyemailQueue);
    })
    }
 
  
  function myFunction3() {
    database.ref('emails').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        CAbasketemailQueue.push(email);
      });
      console.log('Emails added to queue:', CAbasketemailQueue);
    })
 
  }
  function myFunction4() {
    database.ref('emails').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        CAvolleyemailQueue.push(email);
      });
      console.log('Emails added to queue:', CAvolleyemailQueue);
    })
 
  }
  function myFunction5() {
    database.ref('emails').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        LiviBasketemailQueue.push(email);
      });
      console.log('Emails added to queue:', LiviBasketemailQueue);
    })
 
  }
  function myFunction6() {
    database.ref('emails').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        LiviVolleyemailQueue.push(email);
      });
      console.log('Emails added to queue:', LiviVolleyemailQueue);
    })
 
  }
  function myFunction7() {
    database.ref('emails').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        CookBasketemailQueue.push(email);
      });
      console.log('Emails added to queue:', CookBasketemailQueue);
    })
 
  }
  function myFunction8() {
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          CookVolleyemailQueue.push(email);
        });
        console.log('Emails added to queue:', CookVolleyemailQueue);
      })
 
  }

 


