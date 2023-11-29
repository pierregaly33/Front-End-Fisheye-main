function photographerMediaTemplate(photographer, medias) {
    const prenom = photographer.name.split(" ");
    const folder = prenom[0].replace("-", " ");

    function getMediasDom() {
        const parent = document.createElement("div");
        medias.forEach((media) => {
            const mediaModel = mediaTemplate(folder, media);
            const mediaCardDom = mediaModel.getPictureDom();
            parent.appendChild(mediaCardDom);
        });

        return parent;
    }
    return { getMediasDom };
}
