// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
// Initialize Firebase
var config = {
   apiKey: "AIzaSyAtNOf2Eg8JdWa7zOREMfk3J0bZv2Np8B4",
   authDomain: "contactulatorupdates.firebaseapp.com",
   databaseURL: "https://contactulatorupdates.firebaseio.com",
   projectId: "contactulatorupdates",
   storageBucket: "contactulatorupdates.appspot.com",
   messagingSenderId: "892728559770"
 };




// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the recommendations object in your Firebase database
var updates = firebase.database().ref("updates");

// Save a new recommendation to the database, using the input in the form
var submitRecommendation = function () {

  // Get input values from each of the form elements
  var name = $("#updatesName").val();
  var email = $("#updatesEmail").val();
  var link = $("#updatesLink").val();
  var phone =$("#updatesPhone").val();
  var address = $("#updatesAddress").val();
  var customerid = $("#updatesCustomerid").val();
  var notes = $("#updatesNotes").val();
  // Push a new recommendation to the database using those values
  updates.push({
    "name": name,
    "email": email,
    "link": link,
    "phone": phone,
    "address": address,
    "customerid": customerid,
    "notes": notes
  });
};

// Get the single most recent recommendation from the database and
// update the table with its values. This is called every time the child_added
// event is triggered on the recommendations Firebase reference, which means
// that this will update EVEN IF you don't refresh the page. Magic.
updates.limitToLast(1).on('child_added', function(childSnapshot) {
  // Get the recommendation data from the most recent snapshot of data
  // added to the recommendations list in Firebase
  update = childSnapshot.val();

  // Update the HTML to display the recommendation text
//  $("#customerid").html(recommendation.customerid)
  $("#name").html(update.name)
  $("#email").html(update.email)
  $("#link").html(update.link)
  $("#phone").html(update.phone)
  $("#address").html(update.address)
  // Make the link actually work and direct to the URL provided
  $("#link").attr("href", update.link)
  $("#notes").html(update.notes)
});

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id updatesForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#updatesForm").submit(submitRecommendation);

});
