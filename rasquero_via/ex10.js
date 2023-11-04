function onTextChange() {
    let myInput = document.getElementById("my_input");
    let Name = document.getElementById("name");
    let submitButton = document.getElementById("submit_button");

    if (myInput.value.trim() !== "" && Name.value.trim() !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}