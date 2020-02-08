document.getElementById('duration-toggle').onclick = function(){
  if (document.getElementsByClassName("annual-sub")[0].style.display == "none") {
    var cardHide = document.getElementsByClassName("monthly-sub");
    var cardShow = document.getElementsByClassName("annual-sub");
    document.getElementById('title-toggle').innerHTML = "Pay Monthly";
  } else {
    var cardHide = document.getElementsByClassName("annual-sub");
    var cardShow = document.getElementsByClassName("monthly-sub");
    document.getElementById('title-toggle').innerHTML = "Pay Annually";    
  }

  for (var i=0; i<3; i++) {
    cardHide[i].style.display = "none";
    cardShow[i].style.display = "block";
  }
};

// Not sure to use PHP or Javascript here
// A $( document ).ready() block.

// document.getElementById("plan-container").style.display = "block"
// document.getElementsByTagName("body")[0].style.backgroundColor = "#10316B";
// document.getElementById("main-plan-page").style.display = "none";

// don't want to use ?id=, since we're doing a javascript request
if (window.location.hash == "#find-plan") {
  document.getElementById("plan-container").style.display = "block"
  document.getElementsByTagName("body")[0].style.backgroundColor = "#10316B";
  document.getElementById("main-plan-page").style.display = "none";
}
document.getElementById('plan-helper').onclick = function(){
  document.getElementById("plan-container").style.display = "block"
  document.getElementsByTagName("body")[0].style.backgroundColor = "#10316B";
  document.getElementById("main-plan-page").style.display = "none";
};

document.getElementById('find-plan-submit').onclick = function(){
  var petType = "";
  if (document.getElementById("type-dog").checked) {
    petType = "dog"
  } else if (document.getElementById("type-cat").checked) {
    petType = "cat"
  }

  data = {
    "petName": document.getElementById('pet-name').value,
    "petAge": document.getElementById('pet-age').value,
    "petBreed": document.getElementById('pet-breed').value,
    "petType": petType
  }

  console.log(data);

  // set proper plan type here
  // href link blocks the show
  document.getElementById("plan-container").style.display = "none";
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  document.getElementById("main-plan-page").style.display = "block";
};

/* Sample http call from previous project
  HTTP.call(
  "POST", 'http://138.68.235.109:146/socialmedia/api/v0.1/twitter',
  {data: {
    "pet-name": message,
    "slug": highlightSlug,
    "consumer_key": twitterConsumerKey,
    "consumer_secret": twitterConsumerSecret,
    "access_token": u.access_token,
    "access_token_secret": u.access_token_secret,
  }},
   function(error, response) {
    if (response && response.statusCode == 200) {
      var res = JSON.parse(response.content);
    }
  }
);*/
