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
  
  var WerbBasket;
  var WerbVolley;
  var Werbbadmin;
  var LiviBasket;
  var LiviVolley;
  var CABasket;
  var CAvolley;
  var CookBasket;
  var CookVolley;

 if(werbBasket){
  database.ref('emails').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var email = childSnapshot.val().email;
        WerbBasketemailQueue.push(email);
      });
      console.log('Emails added to queue:', WerbBasketemailQueue);
    })
}
else if(WerbVolley){
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          WerbVolleyemailQueue.push(email);
        });
        console.log('Emails added to queue:', WerbVolleyemailQueue);
      })
  }
  else if(WerbBdmin){
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          WerbBadminemailQueue.push(email);
        });
        console.log('Emails added to queue:', WerbBadminemailQueue);
      })
  }
 else if(LiviBasket){
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          LiviBasketemailQueue.push(email);
        });
        console.log('Emails added to queue:', LiviBasketemailQueue);
      })
  }
  else if(LiviVolley){
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          LiviVolleyemailQueue.push(email);
        });
        console.log('Emails added to queue:', LiviVolleyemailQueue);
      })
  }
  else if(CABasket){
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          CAbasketemailQueue.push(email);
        });
        console.log('Emails added to queue:', CAbasketemailQueue);
      })
  }
  else if(CAvolley){
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          CAvolleyemailQueue.push(email);
        });
        console.log('Emails added to queue:', CAvolleyemailQueue);
      })
  }
  else if(CookBasket){
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          CookBasketemailQueue.push(email);
        });
        console.log('Emails added to queue:', CookBasketemailQueue);
      })
  }
 else if(CookVolley){
    database.ref('emails').once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var email = childSnapshot.val().email;
          CookVolleyemailQueue.push(email);
        });
        console.log('Emails added to queue:', CookVolleyemailQueue);
      })
  }    


