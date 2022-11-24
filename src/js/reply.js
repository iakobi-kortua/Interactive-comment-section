const reply = document.querySelectorAll(".reply");
const writeReply = document.querySelector(".write-comment")
const input = document.querySelector(".wc-input-txt");

reply.forEach(rep => {
    rep.addEventListener("click", () => {
        const mainDiv = rep.parentElement.parentElement.parentElement.parentElement;
        mainDiv.append(writeReply);
        const uName = rep.parentElement.children[0].children[1].children[0].textContent;
        input.value = `@${uName},`;
        input.style.color = "hsl(238, 40%, 52%)";
        let sendBtn = writeReply.children[2].children[0];
        sendBtn.textContent = "Reply";
    })
});