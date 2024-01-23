const dropdownDiv = document.querySelector(".dropdown_div");
const dropdownDivLi = document.querySelectorAll(".dropdown_div > li");
const buttonDropdown = document.querySelector(".button_dropdown");
let ouvert = false;

dropdownClose();

function dropdownOpen() {
    buttonDropdown.classList.add("dropdown_open");
    buttonDropdown.setAttribute("aria-expanded", "true");

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
    buttonDropdown.classList.remove("dropdown_open");
    buttonDropdown.setAttribute("aria-expanded", "false");

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

async function onSelected(event) {
    dropdownClose();

    buttonDropdown.innerText = event.target.innerText;
    const img = document.createElement("img");
    buttonDropdown.appendChild(img);
    img.setAttribute("src", "assets/icons/expand_more-24px 4.svg");
    img.setAttribute("class", "dropdown_arrow");

    dropdownDiv.dataset.selectedvalue = event.target.dataset.value;
    dropdownDivLi.forEach((element) => {
        element.setAttribute("aria-selected", element == event.target);
    });
    await triSelectionne(dropdownDiv.dataset.selectedvalue);
}

async function triSelectionne(selectedValue) {
    const mediaMain = document.querySelector(".photograph-pictures");
    mediaMain.innerHTML = "";
    const photographer = await getPhotographer();
    const medias = await getMediasOfSelectedPhotographer();

    if (selectedValue == "popularity") {
        triParLikes(medias);
    }
    if (selectedValue == "date") {
        triParDates(medias);
    }
    if (selectedValue == "title") {
        triParTitle(medias);
    }
    const template = photographerMediasTemplate(photographer, medias);
    const mediaDom = template.getMediasDom();
    mediaMain.appendChild(mediaDom);

    const lightBoxContainer = document.querySelector(".container_lightbox");
    lightBoxContainer.innerHTML = "";
    const lightboxDom = template.getMediaLightboxDom();
    lightBoxContainer.appendChild(lightboxDom);
}
