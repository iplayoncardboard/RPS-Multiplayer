$('body').append('<h1>Hello again</h1>');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWItlcx2UWmOaCQc2eBeZ11-ukqgsEeng",
    authDomain: "rockpaperscissorslizards-7cc87.firebaseapp.com",
    databaseURL: "https://rockpaperscissorslizards-7cc87.firebaseio.com",
    projectId: "rockpaperscissorslizards-7cc87",
    storageBucket: "rockpaperscissorslizards-7cc87.appspot.com",
    messagingSenderId: "766555808002"
  };
  firebase.initializeApp(config);


  let db = firebase.database();
  db.ref().on('value', function(snapshot){
      ss= snapshot.val().player1
    $('body').append('<h1>'+ss+'</h1>');
  });
