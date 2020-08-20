var openModalaccept = document.querySelector(".form__button");
var modalAcceptshow = document.querySelector(".modal__decline");

openModalAccept.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAcceptshow.classList.add("modal-decline--show");
});
