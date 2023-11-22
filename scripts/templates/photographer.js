function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/images/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        //création DOM
        const article = document.createElement("article");
        const img = document.createElement("img");
        const aTagline = document.createElement("p");
        const aPrice = document.createElement("p");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const lien = document.createElement("a");
        const url = `./photographer.html?id=${id}`;

        //Affichage des éléments
        article.appendChild(lien);
        lien.appendChild(img);
        lien.appendChild(h2);
        lien.appendChild(h3);
        lien.appendChild(aTagline);
        lien.appendChild(aPrice);

        //Attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        h2.setAttribute("aria-label", name);
        h3.setAttribute("aria-label", city + ", " + country);
        aTagline.setAttribute("aria-label", tagline);
        aPrice.setAttribute("aria-label", price + "€/jour");
        lien.setAttribute("href", url);
        lien.setAttribute("aria-label", "lien vers la page du photographe" + " " + name);

        //Texte afficher
        h2.textContent = name;
        aTagline.textContent = tagline;
        aPrice.textContent = price + "€/jour";
        h3.textContent = country + ", " + city;

        return article;
    }

    function getPhotographerDom() {
        //creation DOM
        const header = document.createElement("div");
        const photographeCard = document.createElement("div");
        const img = document.createElement("img");
        img.setAttribute("src", picture);

        header.appendChild(photographeCard);
        header.appendChild(img);
        console.log("caca");
        return header;
    }
    return { name, picture, city, country, tagline, price, portrait, getUserCardDOM, getPhotographerDom };
}
