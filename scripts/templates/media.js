function mediaTemplate(folder, data) {
    const { id, photographerId, title, image, likes, date, price } = data;
    const picture = `assets/images/${folder}/${image}`;

    function getPictureDom() {
        const article = document.createElement("article");
        const section = document.createElement("section");
        const img = document.createElement("img");

        article.appendChild(section);
        section.appendChild(img);

        img.setAttribute("src", picture);

        return article;
    }

    return { id, photographerId, title, image, likes, date, price, getPictureDom };
}
