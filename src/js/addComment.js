const sendBtn = document.querySelector(".wc-btn");
const addComment = document.querySelector(".add-comment");
const commentInput = document.querySelector(".wc-input-txt");
const userComments = document.querySelector(".user-comments");
const returnHere = document.querySelector(".return-here");
const writeCom = document.querySelector(".write-comment");

sendBtn.addEventListener("click" , () => {
    const div = document.createElement("div");
    
    div.innerHTML = `<div class="user-comment-sections">
                        <div class="voice">
                            <div class="volume-up-down">
                                <div class="up no-cursor"><img src="./images/icon-plus.svg" alt="plus"></div>
                                <div class="point"><h3>0</h3></div>
                                <div class="down no-cursor"><img src="./images/icon-minus.svg" alt="minus"></div>
                            </div>
                        </div>
                        <div class="comment">
                            <div class="user-reply-small">
                                <div class="user-name-date">
                                    <div class="image"> <img class="user-image" src="./images/avatars/image-juliusomo.png"></div>
                                    <div class="user-name"><p><strong>juliusomo</strong></p></div>
                                    <div class="date"><p>Now</p></div>
                                </div>
                                <div class="delete-edit">
                                    <div class="delete added" id="Delete">
                                        <img class="delete-svg" src="./images/icon-delete.svg">
                                        <p class="delete-svg">Delete</p>
                                    </div>
                                    <div class="edit">
                                        <img class="edit-svg" src="./images/icon-edit.svg">
                                        <p class="edit-svg">Edit</p>
                                    </div>
                                </div>
                            </div>
                            <div class="content-small">
                                <p class="content-p">${commentInput.value}</p>
                            </div>
                        </div>
                    </div>`;

            
    addComment.append(div);
    commentInput.value = '';
    commentInput.style.color = "black";


    returnHere.append(writeCom);

    // if(sendBtn.textContent == "Reply"){
    //     console.log(sendBtn.parentElement);
    // }

    // ---------------------------------------____________________------------------------- //

    const edits = document.querySelectorAll(".edit");
    const input = document.querySelector(".wc-input-txt");


    edits.forEach(edit => {
        edit.addEventListener("click",() => {
            const MainDiv = edit.parentElement.parentElement.parentElement.parentElement;
            MainDiv.remove();
            const content = edit.parentElement.parentElement.parentElement.children[1].children[0];
            input.value = content.textContent;    
        })
    });

    // ---------------------------------------____________________------------------------- //
    
    const dlts = document.querySelectorAll(".added");

    dlts.forEach(dlt => {
        dlt.addEventListener("click", () => {
            const deletedDiv = dlt.parentElement.parentElement.parentElement.parentElement.parentElement;
            deletedDiv.innerHTML = "";
        });
    });

});


