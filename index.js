// const { config } = require("chai");

let userURL = "http://localhost:3000/users";

submitData = {
  userName: "Toshalala",
  email: "Nselvidge@gmail.com",
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(submitData),
};
fetch(userURL, configObj)
  .then(function (response) {
    return response.json();
  })
  .then(function (user) {
    console.log(user);
    let body = document.querySelector("body");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    h1.innerHTML = user.userName;
    h3.innerHTML = user.email;
    h2.innerHTML = user.id;
    body.appendChild(h2);
    h2.appendChild(h1);
    h1.appendChild(h3);
  })
  .catch(function (errors) {
    console.log(errors.message);
    alert("Oh no Bad things!");
    let body = document.querySelector("body");
    let h3 = document.createElement("h3");
    h3.innerHTML = errors.message;
    body.appendChild(h3);
  });

// This is the code along
//MY Code
// let destinationURL = "http://localhost:3000/dogs";
// fetch(destinationURL, configurationObject);

// configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "appliction/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// };

// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });

// ----- BOTH ARE THE SAME ------

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };
// fetch("http://localhost:3000/dogs", configObj)

//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });
