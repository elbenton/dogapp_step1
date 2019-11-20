'use strict';

function getDogImage(numInput) {
  if (numInput < 3) {
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
} if (numInput > 50) {
    return alert("Invalid number");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }
}

function watchForm() {
  $("#formNumberOfDogsId").submit(e => {
    e.preventDefault();
    let userNumInput = $("#inputNumberOfDogsId").val();
    getDogImage(userNumInput);
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});