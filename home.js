var currentProfile = {
  "imgSrc": "assets/profilephoto.jpeg",
  "userId": "sachin_hore",
  "userName": "Sachin Hore",
  "action": "switch"
}

var suggestionsArr = [];
var linksArr = [];
onload();


async function Func(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function onload() {
  linksArr = [...await Func("./links.json")];
  suggestionsArr = await Func("./suggestions.json");

  console.log(linksArr);

  console.log(suggestionsArr[0]);
  console.log("abc");
  console.log(genereteProfile(currentProfile))
  document.getElementById("profileCard").appendChild(genereteProfile(currentProfile));
  for (let x of linksArr) {

    console.log(x);
    document.getElementById("linksDiv").appendChild(genereteLink(x));
  }
  console.log("xyz");
  for (let i = 0; i < 5 && suggestionsArr.length > i; i++) {
      let profile = genereteProfile(suggestionsArr[i]);
      console.log(profile);
      document.getElementById("suggestionsBox").appendChild(profile);
  }

  for (let x of suggestionsArr) {
    document.getElementById("stories").appendChild(generateStory(x));
  }

}



function menuDisplayBlockNoneToggle() {
  var a = document.getElementById("menu");
  if (a.style.display == "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}

function genereteProfile(profile) {
  console.log(profile);
  const profileCard = document.createElement("div");
  profileCard.setAttribute("class", "profileCard");

  const profilephoto = document.createElement("img");
  profilephoto.setAttribute("src", profile.imgSrc);

  const names = document.createElement("div");
  names.setAttribute("class", "names");

  const userId = document.createElement("a");
  userId.setAttribute("class", "userId");
  userId.setAttribute("href", "#");
  userId.textContent = profile.userId;

  const userName = document.createElement("div");
  userName.setAttribute("class", "userName");
  userName.textContent = profile.userName;

  const action = document.createElement("a");
  action.setAttribute("class", "action");
  action.setAttribute("href", "#");
  action.innerHTML = profile.action;

  names.appendChild(userId);
  names.appendChild(userName);

  profileCard.appendChild(profilephoto);
  profileCard.appendChild(names);
  profileCard.appendChild(action);

  return profileCard;


}

function genereteLink(linksArry) {
  const link = document.createElement("a");
  link.setAttribute("class", "links");
  link.setAttribute("href", linksArry.href);

  const icon = document.createElement("img");
  icon.setAttribute("class", "icon");
  icon.setAttribute("src", linksArry.iconUrl);
  icon.setAttribute("alt", linksArry.value);

  const value = document.createElement("div");
  //value.innerHTML = linksArry.value;
  value.textContent = linksArry.value;

  link.appendChild(icon);
  link.appendChild(value);

  return link;

}

function generateStory(arry){
  const story = document.createElement("a");
  story.setAttribute("href","#");
  story.setAttribute("class","story");

  const storyCircle = document.createElement("div");
  storyCircle.setAttribute("class","storyCircle");

  const userProfilePhoto = document.createElement("img");
  userProfilePhoto.setAttribute("src",arry.imgSrc);
  //userProfilePhoto.setAttribute("alt","photo");

  const storyUserId = document.createElement("h5");
  storyUserId.setAttribute("class","storyUserId");
  storyUserId.innerHTML=arry.userId;

  storyCircle.appendChild(userProfilePhoto);
  story.appendChild(storyCircle);
  story.appendChild(storyUserId);

  return story;
  
}



