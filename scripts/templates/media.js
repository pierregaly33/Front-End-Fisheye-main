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

    function getMediaDom(nameClass) {
        if (data.image) {
            const pictureDom = getPictureDom();
            pictureDom.setAttribute("class", nameClass);
            return pictureDom;
        } else {
            const videoDom = getVideoDom();
            videoDom.setAttribute("class", nameClass);
            return videoDom;
        }
    }

    function getMediaForPhotographerPortfolioDom() {
        const likesHeart = "assets/icons/heart-regular.svg";
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
        like.setAttribute("class", "nombre_likes_photo");
        imgLike.setAttribute("class", "img_like");
        imgLike.setAttribute("src", likesHeart);
        imgLike.setAttribute("alt", "likes");
        imgLike.setAttribute("style", "cursor:pointer");
        section.setAttribute("tabindex", "0");

        section.appendChild(lienLightbox);
        section.appendChild(div);
        div.appendChild(p);
        div.appendChild(headerLike);
        headerLike.appendChild(like);
        headerLike.appendChild(imgLike);

        const mediaDom = getMediaDom("media_portfolio");
        lienLightbox.appendChild(mediaDom);

        p.textContent = title;
        like.textContent = likes;

        let dejaLikes = false;
        imgLike.addEventListener("click", () => {
            if (dejaLikes == false) {
                like.textContent = likes + 1;
                updateTotalLikes();
                imgLike.src = "assets/icons/likes.svg";
                dejaLikes = true;
            } else if (dejaLikes == true) {
                like.textContent = likes;
                updateTotalLikes();
                imgLike.src = "assets/icons/heart-regular.svg";
                dejaLikes = false;
            }
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
        getMediaForPhotographerPortfolioDom,
        getMediaDom,
    };
}
