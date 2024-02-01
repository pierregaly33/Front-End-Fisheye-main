function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function getFormData() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let yourMessage = document.querySelector(".your_message").value;
    let data = { firstName, lastName, email, yourMessage };
    resetFormData();
    return data;
}

function resetFormData() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.querySelector(".your_message").value = "";
}

const boutonForm = document.querySelector(".button_form");
boutonForm.addEventListener("click", (event) => {
    console.log(getFormData());
    closeModal();
    event.preventDefault();
});
