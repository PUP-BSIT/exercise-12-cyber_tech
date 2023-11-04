document.addEventListener("DOMContentLoaded", function () {
    // Get the form elements
    const nameInput = document.getElementById("name");
    const commentText = document.getElementById("comment_text");
    const commentButton = document.getElementById("comment_button");
    const commentsList = document.getElementById("comments_list");

    // Function to check if both fields are filled and enable/disable the button
    function checkFields() {
        const name = nameInput.value.trim();
        const comment = commentText.value.trim();
        commentButton.disabled = !(name.length > 0 && comment.length > 0);
    }

    // Function to add a new comment at the top of the list
    function addComment() {
        const name = nameInput.value.trim();
        const comment = commentText.value.trim();

        if (name.length > 0 && comment.length > 0) {
            const li = document.createElement("li");
            li.classList.add("comment-item");

            // Create the user profile and comment content divs
            const userProfile = document.createElement("div");
            userProfile.classList.add("user-profile");

            const commentContent = document.createElement("div");
            commentContent.classList.add("comment-content");

            // Create the username and comment text paragraphs
            const username = document.createElement("p");
            username.classList.add("username");
            username.textContent = `${name}:`;

            const commentPara = document.createElement("p");
            commentPara.classList.add("comment-text");
            commentPara.textContent = comment;

            // Append paragraphs to the user profile and comment content divs
            userProfile.appendChild(username);
            commentContent.appendChild(commentPara);

            // Append user profile and comment content divs to the comment item div
            li.appendChild(userProfile);
            li.appendChild(commentContent);

            // Insert the new comment at the top of the list
            commentsList.insertBefore(li, commentsList.firstChild);

            // Clear the input fields
            nameInput.value = "";
            commentText.value = "";

            // Recheck and disable the button after adding the comment
            checkFields();
        }
    }

    // Add event listeners to input fields
    nameInput.addEventListener("input", checkFields);
    commentText.addEventListener("input", checkFields);

    // Add an event listener to the comment button
    commentButton.addEventListener("click", addComment);
});
