// Not sure to use PHP or Javascript here
// A $( document ).ready() block.

// don't want to use ?id=
if (window.location.hash == "#find-plan") {
  document.getElementById("plan-container").style.display = "block"
  document.getElementsByTagName("body")[0].style.backgroundColor = "#10316B";
  document.getElementById("main-plan-page").style.display = "none";
}
console.log(window.location.hash)
document.getElementById('plan-helper').onclick = function(){
  document.getElementById("plan-container").style.display = "block"
  document.getElementsByTagName("body")[0].style.backgroundColor = "#10316B";
  document.getElementById("main-plan-page").style.display = "none";
};

document.getElementById('find-plan-submit').onclick = function(){
  data = {
    "pet-name": document.getElementById('pet-name').value,
    "pet-age": document.getElementById('pet-age').value,
    "pet-breed": document.getElementById('pet-breed').value
  }
  console.log(data)
  document.getElementById("plan-container").style.display = "none"
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
