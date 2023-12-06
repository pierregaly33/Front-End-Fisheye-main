//Mettre le code JavaScript lié à la page photographer.html
const contact = document.getElementById("contact_modal");

function displayModal() {
    contact.style.display = "block";
}

async function getPhotographer() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const photographersData = await fetch("../data/photographers.json").then((data) => data.json());
    const photographers = photographersData.photographers;

    const photographer = photographers.find((photographer) => photographer.id == id);
    return photographer;
}

async function getMedias() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const mediaData = await fetch("../data/photographers.json").then((data) => data.json());
    const media = mediaData.media;
    console.log(media);

    const mediaPhotographer = media.filter((media) => media.photographerId == id);
    console.log(mediaPhotographer);
    return mediaPhotographer;
}

async function init() {
    const photographer = await getPhotographer();
    const photographerModel = photographerTemplate(photographer);
    const photographCardDom = photographerModel.getPhotographerDom();
    const photographHeader = document.querySelector(".photograph-header");
    photographHeader.appendChild(photographCardDom);

    const medias = await getMedias();

    const template = photographerMediaTemplate(photographer, medias);

    const mediaDom = template.getMediasDom();
    const mediaMain = document.querySelector(".photograph-pictures");
    mediaMain.appendChild(mediaDom);

    const lightboxDom = template.getMediaLightboxDom();
    const lightBoxContainer = document.querySelector(".container_lightbox");
    lightBoxContainer.appendChild(lightboxDom);
}

init();
