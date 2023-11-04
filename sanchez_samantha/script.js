let nameInput = document.getElementById("name_input");
let commentInput = document.getElementById("comment_input");
let submitButton = document.getElementById("submit_comment");

nameInput.addEventListener("input", SubmitButton);
commentInput.addEventListener("input", SubmitButton);

function SubmitButton() {
    
    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "disabled");
    }
}