const modal = document.querySelector(".modal");
const btn = document.querySelector(".delete");
const span = document.getElementsByClassName("close")[0];
const no = document.querySelector(".modal-delete-no-btn");
const yes = document.querySelector(".modal-delete-btn"); 
const userComments = document.querySelector(".user-comments");


btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
}
no.onclick = function() {
  modal.style.display = "none";
}
yes.onclick = function() {
  modal.style.display = "none";
  userComments.innerHTML = '';
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
