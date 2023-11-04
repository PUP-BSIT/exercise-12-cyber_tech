let commentForm = document.getElementById("commentForm");
let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentButton = document.getElementById("addComment");



nameInput.addEventListener("input", updateCommentButtonState);
commentInput.addEventListener("input", updateCommentButtonState);

function updateCommentButtonState()
{
    let nameText = nameInput.value.trim();
    let commentText = commentInput.value.trim();
    commentButton.disabled = !(nameText && commentText);
}