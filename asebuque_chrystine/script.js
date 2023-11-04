document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const commentButton = document.getElementById("comment-button");

    nameInput.addEventListener("input", updateCommentButtonState);
    commentInput.addEventListener("input", updateCommentButtonState);

    function updateCommentButtonState() {
        if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
            commentButton.disabled = false;
        } else {
            commentButton.disabled = true;
        }
    }
});