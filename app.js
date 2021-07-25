"use strict";

let tableEl = document.getElementById("cart");
let options = document.querySelector("form");
let totalPlace = document.getElementById("total");
let books = [];

function Book(bookName, price) {
  this.name = bookName;
  this.price = price;
  books.push(this);
}

function getFromLocal() {
  let reData = localStorage.getItem("data");

  if (reData !== null) {
    let newData = JSON.parse(reData);
    books = newData;
  }
}

getFromLocal();

function pushToLocal() {
  let pushData = JSON.stringify(books);

  localStorage.setItem("data", pushData);
}

options.addEventListener("submit", showData);

function showData(event) {
  event.preventDefault();
  let bName = event.target[1].value;

  let bPrice = event.target[2].value;

  new Book(bName, bPrice);

  pushToLocal();
  render();
}

function generateRandomFloatInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render() {
  tableEl.innerHTML = "";
  tableHead();
  for (let i = 0; i < books.length; i++) {
    let trEl = document.createElement("tr");

    let thEl0 = document.createElement("th");
    thEl0.textContent = `${books[i].name}`;
    trEl.appendChild(thEl0);
    let thEl1 = document.createElement("th");

    thEl1.textContent = generateRandomFloatInRange(1, 500);
    trEl.appendChild(thEl1);
    let thEl2 = document.createElement("th");
    thEl2.textContent = `${books[i].price}`;
    trEl.appendChild(thEl2);
    tableEl.appendChild(trEl);
  }
}

render();

function tableHead() {
  let trEl = document.createElement("tr");

  let thEl0 = document.createElement("th");
  thEl0.textContent = `Book Name`;
  trEl.appendChild(thEl0);
  let thEl1 = document.createElement("th");
  thEl1.textContent = `Book Pages`;
  trEl.appendChild(thEl1);
  let thEl2 = document.createElement("th");
  thEl2.textContent = `Book Price`;
  trEl.appendChild(thEl2);
  tableEl.appendChild(trEl);
}



function calculateTotal() {

    books.price++
}


totalPlace.textContent = `Total: ${calculateTotal()}`;
