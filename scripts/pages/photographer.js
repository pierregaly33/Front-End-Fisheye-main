//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    // Récupere tous les photographes
    const photographersData = await fetch("./data/photographers.json").then((data) => data.json());
    const photographers = photographersData.photographers;
    // Récupere le photographe demandé
    const photographer = photographers.find((photographer) => photographer.id == id);
    return photographer;
}

async function getMediasOfSelectedPhotographer() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const mediaData = await fetch("./data/photographers.json").then((data) => data.json());
    const media = mediaData.media;

    const mediaPhotographer = media.filter((media) => media.photographerId == id);
    return mediaPhotographer;
}

function calculTotalLikes(medias) {
    let total = 0;
    for (let i = 0; i < medias.length; i++) {
        let media = medias[i];
        let likes = media.likes;
        total = likes + total;
    }
    return total;
}

// Ajoute les likes au total des likes
let totalLikeNumber = 0;
async function updateTotalLikes() {
    const nombreLikesPhoto = document.querySelectorAll(".nombre_likes_photo");
    const nombresLikes = document.querySelector(".nombres_likes_total");
    totalLikeNumber = 0;
    nombreLikesPhoto.forEach((like) => {
        totalLikeNumber += parseInt(like.textContent);
    });
    nombresLikes.textContent = totalLikeNumber;
}

function triParDates(tableau) {
    function compareDate(a, b) {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        if (aDate < bDate) {
            return 1;
        }
        if (aDate > bDate) {
            return -1;
        }
        return 0;
    }
    tableau.sort(compareDate);
}

function triParLikes(tableau) {
    function compareLikes(a, b) {
        if (a.likes < b.likes) {
            return 1;
        }
        if (a.likes > b.likes) {
            return -1;
        }
        return 0;
    }
    tableau.sort(compareLikes);
}

function triParTitle(tableau) {
    function compareTitle(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.tilte) {
            return 1;
        }
        return 0;
    }
    tableau.sort(compareTitle);
}

async function init() {
    const photographer = await getPhotographer();
    const photographerModel = photographerTemplate(photographer);
    const photographCardDom = photographerModel.getPhotographerDom();
    const photographHeader = document.querySelector(".photograph-header");
    photographHeader.appendChild(photographCardDom);

    const medias = await getMediasOfSelectedPhotographer();
    triParLikes(medias);

    const mediaMain = document.querySelector(".photograph-pictures");

    const template = photographerMediasTemplate(photographer, medias);
    const mediaDom = template.getMediasDom();
    mediaMain.appendChild(mediaDom);

    const lightboxDom = template.getMediaLightboxDom();
    const lightBoxContainer = document.querySelector(".container_lightbox");
    lightBoxContainer.appendChild(lightboxDom);

    totalLikeNumber = calculTotalLikes(medias);

    const nombresLikes = document.querySelector(".nombres_likes_total");
    nombresLikes.innerText = totalLikeNumber;

    const prix = document.querySelector(".prix");
    prix.innerText = photographer.price + "€/jour";

    const photographer_modal = document.querySelector(".photographer_modal");
    const namePhotographerModal = document.querySelector(".name_photographer_modal");
    namePhotographerModal.setAttribute("aria-labal", `contact me ${photographer.name}`);
    photographer_modal.innerText = photographer.name;
}
init();
