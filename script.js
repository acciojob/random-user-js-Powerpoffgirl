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

ageId.addEventListener("click", showAge);
emailId.addEventListener("click", showEmail);
phoneId.addEventListener("click", showPhone);

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    fullName = data.results[0].name.first + " " + data.results[0].name.last;
    console.log(fullName);
    console.log(data.results);
    fullNameId.innerText = fullName;
  });

function showAge() {
  age = data.results[0].dob.age;
  console.log(age);
  result.innerText = age;
}

function showEmail() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      email = data.results[0].email;
      console.log(email);
      result.innerText = email;
    });
}

function showPhone() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      phone = data.results[0].phone;
      console.log(phone);
      result.innerText = phone;
    });
}
