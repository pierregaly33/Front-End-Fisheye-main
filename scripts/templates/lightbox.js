let indexGlobal = 0;
let mediasInLightbox;
function openLightbox(selectedMedia) {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "flex";
    mediasInLightbox = lightbox.getElementsByClassName("container_media_lightbox");
    for (let item of mediasInLightbox) {
        item.style.display = "none";
    }
    const selectedMediaId = selectedMedia.id;

    function findIndex() {
        let index;
        for (let i = 0; i < mediasInLightbox.length; i++) {
            if (mediasInLightbox[i].dataset.id == selectedMediaId) {
                index = i;
                break;
            }
        }
        return index;
    }
    indexGlobal = findIndex();

    const selectedPictureOrVideo = lightbox.querySelector(`[data-id="${selectedMediaId}"]`);
    selectedPictureOrVideo.style.display = "flex";

    document.addEventListener("keydown", (event) => {
        if (event.code == "ArrowLeft") {
            previous();
        } else if (event.code == "ArrowRight") {
            next();
        } else if (event.code == "Escape") {
            close();
        }
    });
}

function close() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

const closeButton = document.getElementById("close");
closeButton.addEventListener("click", close);

function previous() {
    const mediaEnCours = mediasInLightbox[indexGlobal];
    mediaEnCours.style.display = "none";

    indexGlobal = indexGlobal - 1;

    if (indexGlobal < 0) {
        indexGlobal = mediasInLightbox.length - 1;
    }

    const mediaPrecedant = mediasInLightbox[indexGlobal];
    mediaPrecedant.style.display = "flex";
}

function next() {
    const mediaEnCours = mediasInLightbox[indexGlobal];
    mediaEnCours.style.display = "none";

    indexGlobal = indexGlobal + 1;

    if (indexGlobal >= mediasInLightbox.length) {
        indexGlobal = 0;
    }

    const mediaSuivant = mediasInLightbox[indexGlobal];
    mediaSuivant.style.display = "flex";
}
const previousButton = document.getElementById("previous");
previousButton.addEventListener("click", previous);

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", next);
