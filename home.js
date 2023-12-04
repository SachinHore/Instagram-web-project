
function menuDisplayBlockNoneToggle() {
  var a = document.getElementById("menu");
  if (a.style.display == "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}
genereteProfile();


function genereteProfile(){
    for (let i = 0; i < 2; i++) {
        document.getElementById("suggestionsBox").innerHTML +=
          '<div class="profileCard">' +
          '<img src="assets/profilephoto.jpeg"></img>' +
          '<div class="names">' +
          '<a class="userId" href="">sachin_hore</a>' +
          '<div class="userName">Sachin Hore</div>' +
          "</div>" +
          '<a class="action" href="">Follow</a>' +
          "</div>";
      }
}

Func();
function Func() {
    fetch("./suggestions.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}

Func2();
function Func2() {
    const a=[];
    fetch("./suggestions.json").then((res) => {return res.json();})
    .then((data) => {
        console.log("b" + data);
        a.push(data.at(0));
        console.log(a.at(0));
    });
    
    
}

