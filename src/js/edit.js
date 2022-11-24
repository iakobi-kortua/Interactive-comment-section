const edits = document.querySelectorAll(".edit");
const content = document.querySelector(".content-p");
const input = document.querySelector(".wc-input-txt");
const userComments = document.querySelector(".user-comments")

edits.forEach(edit => {
    edit.addEventListener("click",() => {
        userComments.remove();
        input.value = content.textContent;
    })
});