function photographerMediasTemplate(photographer, medias) {
    const prenom = photographer.name.split(" ");
    const folder = prenom[0].replace("-", " ");

    function getMediasDom() {
        const parent = document.createDocumentFragment();
        medias.forEach((media) => {
            const mediaModel = mediaTemplate(folder, media);
            const mediaCardDom = mediaModel.getMediaForPhotographerPortfolioDom();
            parent.appendChild(mediaCardDom);
        });

        return parent;
    }

    function getMediaLightboxDom() {
        const parent = document.createDocumentFragment();
        medias.forEach((media) => {
            const mediaModel = mediaTemplate(folder, media);

            const mediaCardDom = mediaModel.getMediaDom("media_lightbox");

            const divParent = document.createElement("div");
            divParent.setAttribute("class", "container_media_lightbox");
            divParent.dataset.id = media.id;
            const p = document.createElement("p");

            p.innerText = media.title;

            parent.appendChild(divParent);
            divParent.appendChild(mediaCardDom);
            divParent.appendChild(p);
        });

        return parent;
    }
    return { getMediasDom, getMediaLightboxDom };
}
