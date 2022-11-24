let upBtns = document.querySelectorAll(".up");
let downBtns = document.querySelectorAll(".down");

upBtns.forEach(upBtn => {
    upBtn.addEventListener("click", () => {
        const userName = upBtn.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[1].textContent;
        if(userName == "juliusomo"){
            return true;
        }
        let point = upBtn.parentElement.children[1].children[0];
        let pointIncrement = Number(point.textContent) + 1;
        point.textContent = pointIncrement;   
    });
});

downBtns.forEach(downBtn => {
    downBtn.addEventListener("click", () => {
        const userName = downBtn.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[1].textContent;
        if(userName == "juliusomo"){
            return true;
        }
        let point = downBtn.parentElement.children[1].children[0];
        let pointIncrement = Number(point.textContent) - 1;
        point.textContent = pointIncrement;   
    });
});
 




