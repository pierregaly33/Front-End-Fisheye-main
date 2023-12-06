function photographerMediaTemplate(photographer, medias) {
    const prenom = photographer.name.split(" ");
    const folder = prenom[0].replace("-", " ");

    function getMediasDom() {
        const parent = document.createDocumentFragment();
        medias.forEach((media) => {
            const mediaModel = mediaTemplate(folder, media);
            const mediaCardDom = mediaModel.getMediaDom();
            parent.appendChild(mediaCardDom);
        });

        return parent;
    }

    function getMediaLightboxDom() {
        const parent = document.createDocumentFragment();
        medias.forEach((media) => {
            const mediaModel = mediaTemplate(folder, media);
            const mediaCardDom = mediaModel.getLightboxDom();
            parent.appendChild(mediaCardDom);
        });

        return parent;
    }
    return { getMediasDom, getMediaLightboxDom };
}
