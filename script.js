let commentContainer = document.getElementById("commentContainer");

function createInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "comment__submit__wrap");
  div.innerHTML = `<input type="text" placeholder="type your comment here">
<button class='submit_btn'>Submit</button>
  `;
  return div;
}

function createComment(value) {
  let div = document.createElement("div");
  div.setAttribute("class", "mono__comment__wrap");
  div.innerHTML = `
    <div class="comment_card">
    <div class="text">${value}</div>
    <button id="add_reply_btn" class="add_reply_btn">Add Reply</button>
  </div>
    `;

  return div;
}

commentContainer.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("add_reply_btn");
  let submitCliked = e.target.classList.contains("submit_btn");
  let closestComment = e.target.closest(".mono__comment__wrap");

  if (replyClicked) {
    closestComment.appendChild(createInputBox());
  }

  if (submitCliked) {
    let closestInput = e.target.closest(".comment__submit__wrap");
    if (closestInput.children[0].value.trim().length > 0) {
      closestComment.appendChild(
        createComment(closestInput.children[0].value.trim())
      );
      closestInput.remove();
    }
  }
});
