var button = document.querySelectorAll(".b");
var icon = document.querySelectorAll(".icon");
var setting = document.querySelectorAll(".settings");

function kaydet() {
  const radioInputs = document.querySelectorAll(".input");
  let seciliRenk = null;

  for (const input of radioInputs) {
    if (input.checked) {
      seciliRenk = input.value;
      break;
    }
  }

  if (seciliRenk === "blue") {
    button.forEach((b) => {
      b.classList.remove("redButton");
      b.classList.remove("greenButton");
      b.classList.add("blueButton");
      //  b.style.border = "1px solid #142d4c";
    });
    icon.forEach((i) => {
      i.style.backgroundColor = "#142d4c";
      //  b.style.border = "1px solid #142d4c";
    });
    setting.forEach((s) => {
      s.style.backgroundColor = "#142d4c";
      //  b.style.border = "1px solid #142d4c";
    });
  } else if (seciliRenk === "red") {
    button.forEach((b) => {
      b.classList.remove("blueButton");
      b.classList.remove("greenButton");
      b.classList.add("redButton");
      // b.style.border = "1px solid #4c1414";
    });
    icon.forEach((i) => {
      i.style.backgroundColor = "#4c1414";
      //  b.style.border = "1px solid #142d4c";
    });
    setting.forEach((s) => {
      s.style.backgroundColor = "#4c1414";
      //  b.style.border = "1px solid #142d4c";
    });
  } else if (seciliRenk === "green") {
    button.forEach((b) => {
      b.classList.remove("redButton");
      b.classList.remove("blueButton");
      b.classList.add("greenButton");
      //    b.style.border = "1px solid #1c4c14";
    });
    icon.forEach((i) => {
      i.style.backgroundColor = "#1c4c14";
      //  b.style.border = "1px solid #142d4c";
    });
    setting.forEach((s) => {
      s.style.backgroundColor = "#1c4c14";
      //  b.style.border = "1px solid #142d4c";
    });
  }
  modal.style.visibility = "hidden";
  modalContainer.style.top = "40%";
  modalContainer.style.opacity = "0";
}
// Modal

var settings = document.querySelector(".settings");
var modal = document.querySelector(".modal");
var modalContainer = document.querySelector(".modal-container");
var close = document.querySelector("#closeButton");

settings.addEventListener("click", function () {
  modal.style.visibility = "visible";
  modalContainer.style.top = "50%";
  modalContainer.style.opacity = "1";
});
close.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  modalContainer.style.top = "40%";
  modalContainer.style.opacity = "0";
});

//Navbar
var nav = document.querySelector(".nav");
var icon = document.querySelector("#icon");
var iconid = document.querySelector("#iconid");

icon.addEventListener("click", function () {
  if (nav.style.transform == "translateY(-100px)") {
    nav.style.transform = "translateY(0px)";
    iconid.className = "fa fa-arrow-up";
  } else {
    nav.style.transform = "translateY(-100px)";
    iconid.className = "fa fa-arrow-down";
  }
});
