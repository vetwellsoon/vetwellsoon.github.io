document.getElementById('login-submit').onclick = function(){
  envKey = "tempApi";
  data = {
    "password": document.getElementById('login-password').value
  }

  var site = "https://vet-backend-3.herokuapp.com";
  // var site = "http://localhost:5000"

  var email = document.getElementById('login-email').value;
  var payload = site + "/api/user/" + email + "?apiKey=" + envKey;
  // console.log(payload);
  const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      // ready state is last state with response?
      if (xhr.readyState == 4) {
        if(xhr.status == 200) {
          console.log(JSON.parse(xhr.response));
          localStorage.setItem("email", email);
          document.getElementById('profileImg').style.display = "block";
          document.getElementById('login-nav').style.display = "none";
        } else {
          console.log(xhr)
        }
      }
    };
    xhr.open("GET", payload, true);
    xhr.send();

  // console.log(data);
}
