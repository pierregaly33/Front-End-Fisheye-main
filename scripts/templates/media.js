function mediaTemplate(folder, data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const MediaPicture = `assets/images/${folder}/${image}`;
    const mediaVideo = `assets/images/${folder}/${video}`;

    function getVideoDom() {
        const video = document.createElement("video");
        const source = document.createElement("source");
        video.appendChild(source);
        source.setAttribute("src", mediaVideo);
        source.setAttribute("type", "video/mp4");
        return video;
    }

    function getPictureDom() {
        const img = document.createElement("img");
        img.setAttribute("src", MediaPicture);
        return img;
    }

    function getLightboxDom() {
        if (data.image) {
            return getPictureDom();
        } else {
            return getVideoDom();
        }
    }

    function getMediaDom() {
        const section = document.createElement("section");
        const lienLightbox = document.createElement("div");
        lienLightbox.addEventListener("click", () => {
            openLightbox(id);
        });
        const div = document.createElement("div");
        const p = document.createElement("p");
        const divLike = document.createElement("div");
        const like = document.createElement("p");
        const imgLike = document.createElement("img");

        lienLightbox.setAttribute("style", "cursor:pointer");

        section.appendChild(lienLightbox);
        section.appendChild(div);
        div.appendChild(p);
        div.appendChild(divLike);
        divLike.appendChild(like);
        divLike.appendChild(imgLike);

        const mediaDom = getLightboxDom();
        lienLightbox.appendChild(mediaDom);

        p.textContent = title;
        like.textContent = likes;

        return section;
    }

    return { id, photographerId, title, image, likes, date, price, getMediaDom, getLightboxDom };
}
