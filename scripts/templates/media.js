function mediaTemplate(folder, data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
    const mediaPicture = `assets/images/${folder}/${image}`;
    const mediaVideo = `assets/images/${folder}/${video}`;

    function getVideoDom() {
        const video = document.createElement("video");
        const source = document.createElement("source");
        video.appendChild(source);
        video.dataset.id = data.id;
        source.setAttribute("class", "video");
        source.setAttribute("src", mediaVideo);
        source.setAttribute("type", "video/mp4");
        video.setAttribute("controls", "controls");
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
        const likesHeart = "assets/icons/likes.svg";
        const section = document.createElement("section");
        const lienLightbox = document.createElement("div");
        lienLightbox.addEventListener("click", () => {
            openLightbox(data);
        });
        const div = document.createElement("div");
        const p = document.createElement("p");
        const headerLike = document.createElement("div");
        const like = document.createElement("p");
        const imgLike = document.createElement("img");

        div.setAttribute("class", "card_media_footer");
        p.setAttribute("class", "card_media_title");
        lienLightbox.setAttribute("class", "pictures");
        lienLightbox.setAttribute("style", "cursor:pointer");
        headerLike.setAttribute("class", "header_like");
        like.setAttribute("class", "compteur_like");
        imgLike.setAttribute("src", likesHeart);
        imgLike.setAttribute("style", "cursor:pointer");

        section.appendChild(lienLightbox);
        section.appendChild(div);
        div.appendChild(p);
        div.appendChild(headerLike);
        headerLike.appendChild(like);
        headerLike.appendChild(imgLike);

        const mediaDom = getMediaDom();
        lienLightbox.appendChild(mediaDom);

        p.textContent = title;
        like.textContent = likes;

        imgLike.addEventListener("click", () => {
            ajoutLikes();
            like.textContent = likes + 1;
        });

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
