//Mettre le code JavaScript lié à la page photographer.html
const contact = document.getElementById("contact_modal");

function displayModal() {
    contact.style.display = "block";
}

async function getPhotographer() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    // Récupere tous les photographes
    const photographersData = await fetch("../data/photographers.json").then((data) => data.json());
    const photographers = photographersData.photographers;
    // Récupere le photographe demandé
    const photographer = photographers.find((photographer) => photographer.id == id);
    return photographer;
}

async function getMediasOfSelectedPhotographer() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const mediaData = await fetch("../data/photographers.json").then((data) => data.json());
    const media = mediaData.media;
    console.log(media);

    const mediaPhotographer = media.filter((media) => media.photographerId == id);
    console.log(mediaPhotographer);
    return mediaPhotographer;
}

function calculTotalLikes(medias) {
    total = 0;
    for (let i = 0; i < medias.length; i++) {
        let media = medias[i];
        let likes = media.likes;
        total = likes + total;
    }
    return total;
}

// Ajoute les likes au total des likes
let totalLikeNumber = 0;
async function ajoutLikes() {
    totalLikeNumber = totalLikeNumber + 1;
    const nombresLikes = document.querySelector(".nombres_likes");
    nombresLikes.innerText = totalLikeNumber;
}

async function init() {
    const photographer = await getPhotographer();
    const photographerModel = photographerTemplate(photographer);
    const photographCardDom = photographerModel.getPhotographerDom();
    const photographHeader = document.querySelector(".photograph-header");
    photographHeader.appendChild(photographCardDom);

    const medias = await getMediasOfSelectedPhotographer();

    const template = photographerMediasTemplate(photographer, medias);

    const mediaDom = template.getMediasDom();
    const mediaMain = document.querySelector(".photograph-pictures");
    mediaMain.appendChild(mediaDom);

    const lightboxDom = template.getMediaLightboxDom();
    const lightBoxContainer = document.querySelector(".container_lightbox");
    lightBoxContainer.appendChild(lightboxDom);

    totalLikeNumber = calculTotalLikes(medias);

    const nombresLikes = document.querySelector(".nombres_likes");
    nombresLikes.innerText = totalLikeNumber;

    const prix = document.querySelector(".prix");
    prix.innerText = photographer.price + "€/jour";
}

init();
