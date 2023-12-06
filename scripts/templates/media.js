function mediaTemplate(folder, data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const mediaPicture = `assets/images/${folder}/${image}`;
    const mediaVideo = `assets/images/${folder}/${video}`;

    function getVideoDom() {
        const video = document.createElement("video");
        const source = document.createElement("source");
        video.appendChild(source);
        video.dataset.id = data.id;
        source.setAttribute("src", mediaVideo);
        source.setAttribute("type", "video/mp4");
        return video;
    }

    function getPictureDom() {
        const img = document.createElement("img");
        img.setAttribute("src", mediaPicture);
        img.dataset.id = data.id;
        return img;
    }

    function getMediaDom() {
        if (data.image) {
            const pictureDom = getPictureDom();
            pictureDom.setAttribute("class", "media_lightbox");
            return pictureDom;
        } else {
            const videoDom = getVideoDom();
            videoDom.setAttribute("class", "media_lightbox");
            return videoDom;
        }
    }

    function getMediaForPhotographerPortfolioDom() {
        const section = document.createElement("section");
        const lienLightbox = document.createElement("div");
        lienLightbox.addEventListener("click", () => {
            openLightbox(data);
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

        const mediaDom = getMediaDom();
        lienLightbox.appendChild(mediaDom);

        p.textContent = title;
        like.textContent = likes;

        return section;
    }

    return {
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price,
        getMediaDom: getMediaForPhotographerPortfolioDom,
        getLightboxDom: getMediaDom,
    };
}
