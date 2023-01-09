//your code here
const fullNameId = document.getElementById("fullNameId");
const ageId = document.getElementById("ageId");
const emailId = document.getElementById("emailId");
const phoneId = document.getElementById("phoneId");
const result = document.getElementById("result");
let fullName = "";
let age = "";
let email = "";
let phone = "";
let user = {};

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    user = data.results[0];
    fullName = data.results[0].name.first + " " + data.results[0].name.last;
    console.log(fullName);
    console.log(user);
    fullNameId.innerText = fullName;
  });

ageId.addEventListener("click", showAge);
emailId.addEventListener("click", showEmail);
phoneId.addEventListener("click", showPhone);

function showAge() {
  age = user.dob.age;
  console.log(age);
  result.innerText = age;
}

function showEmail() {
  email = user.email;
  console.log(email);
  result.innerText = email;
}

function showPhone() {
  phone = user.phone;
  console.log(phone);
  result.innerText = phone;
}
