const dropdownDiv = document.querySelector(".dropdown_div");
const dropdownDivLi = document.querySelectorAll(".dropdown_div > li");
const buttonDropdown = document.querySelector(".button_dropdown");
let ouvert = false;

dropdownClose();

function dropdownOpen() {
    dropdownDiv.style.display = "block";
    ouvert = true;

    dropdownDivLi.forEach((element) => {
        if (element.dataset.value == dropdownDiv.dataset.selectedvalue) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}

function dropdownClose() {
    dropdownDiv.style.display = "none";
    ouvert = false;
}

function dropdownToggle() {
    if (ouvert) {
        dropdownClose();
    } else {
        dropdownOpen();
    }
}

function onSelected(event) {
    dropdownClose();

    buttonDropdown.innerText = event.target.innerText;

    dropdownDiv.dataset.selectedvalue = event.target.dataset.value;
}
