var loginButton = document.getElementById("loginButton");
var textbox = document.querySelectorAll(".textbox");
var input = document.getElementsByClassName("input");

var members = [
  {
    username: "UgrOztrk",
    password: "ugr1234",
    role: "admin",
  },
  {
    username: "SbrOztrk",
    password: "sbr1234",
  },
];

function login() {
  var username = document.getElementById("usernameİnput").value;
  var password = document.getElementById("passwordİnput").value;

  const user = members.find(
    (member) => member.username === username && member.password === password
  );

  if (user) {
    if (user.role === "admin") {
      window.location.href = "../Map/Map.html";
    } else {
      window.location.href = "../Guest/guest.html";
    }
  } else {
    for (var i = 0; i < textbox.length; i++) {
      textbox[i].classList.add("inputAnimate");
      input[i].classList.add("inputColor");
    }

    addEventListener("animationend", function () {
      for (var i = 0; i < textbox.length; i++) {
        textbox[i].classList.remove("inputAnimate");
        input[i].classList.remove("inputColor");
      }
    });

    document.getElementById("usernameİnput").value = "";
    document.getElementById("passwordİnput").value = "";
    document.getElementById("errMsg").style.display = "block";
  }

  /*
  for (i = 0; i < members.length; i++) {
    if (username == members[i].username && password == members[i].password) {
      window.location.href = "../Map/Map.html";
      console.log(username + "Giriş Yaptı");
      return;
    }
  }
  */
}
