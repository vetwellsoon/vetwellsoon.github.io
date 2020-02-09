document.getElementById('login-submit').onclick = function(){
  envKey = "tempApi";
  data = {
    "password": document.getElementById('login-password').value
  }

  var payload = "https://vet-backend-3.herokuapp.com/api/user/" + document.getElementById('login-email').value + "?apiKey=" + envKey;
  console.log(payload);
  const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200) {
          console.log(xhr.responseText);
      }
    };
    xhr.open("GET", payload, true);
    xhr.send();

  console.log(data);
}
