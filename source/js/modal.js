var openModaldecline = document.querySelector(".form__button");
var modalDecline = document.querySelector(".modal-decline");
var formList = document.querySelector(".form__list");
var modalAccept = document.querySelector(".modal-accept");
var userName = formList.querySelector(".form__input");
var userEmail = formList.querySelector(".form__input");
var closeButtondecline = document.querySelector(".modal-decline__button");
var closeButtonaccept = document.querySelector(".modal-accept__button");

formList.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
      evt.preventDefault();
      modalDecline.classList.add("modal-decline--show"); }
      else {
        modalAccept.classList.add("modal-accept--show"); }
  });

  closeButtondecline.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalDecline.classList.remove("modal-decline--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalDecline.classList.contains("modal-decline--show")) {
            evt.preventDefault();
            modalDecline.classList.remove("modal-decline--show");
      }
    }
  });

  closeButtonaccept.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAccept.classList.remove("modal-accept--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalDecline.classList.contains("modal-accept--show")) {
            evt.preventDefault();
            modalDecline.classList.remove("modal-accept--show");
      }
    }
  });



