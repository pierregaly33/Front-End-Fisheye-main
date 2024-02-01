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
        const divImg = document.createElement("div");

        //Affichage des éléments
        article.appendChild(lien);
        lien.appendChild(divImg);
        divImg.appendChild(img);
        lien.appendChild(h2);
        lien.appendChild(h3);
        lien.appendChild(aTagline);
        lien.appendChild(aPrice);

        //Attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        divImg.setAttribute("class", "container_img");

        h2.setAttribute("class", "nom_photographe");
        h2.setAttribute("aria-label", name);

        h3.setAttribute("class", "ville_pays");
        h3.setAttribute("aria-label", city + ", " + country);

        aTagline.setAttribute("class", "tagline");
        aTagline.setAttribute("aria-label", tagline);

        aPrice.setAttribute("class", "price");
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
        //création DOM
        const header = document.createElement("div");
        const img = document.createElement("img");
        const aTagline = document.createElement("p");
        const aPrice = document.createElement("p");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const button = document.getElementById("contact");
        const photo = document.createElement("div");
        const photographHeader = document.querySelector(".photograph-header");
        const contactButton = document.querySelector(".button_container");

        //Affichage des éléments
        photographHeader.appendChild(photo);
        header.appendChild(h1);
        header.appendChild(h2);
        header.appendChild(aTagline);
        header.appendChild(aPrice);
        photographHeader.appendChild(contactButton);
        photo.appendChild(img);

        //Attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        h1.setAttribute("class", "nom_fiche_photographer");
        h1.setAttribute("aria-label", name);

        h2.setAttribute("class", "origine_fiche_photographer");
        h2.setAttribute("aria-label", city + ", " + country);

        aTagline.setAttribute("class", "tagline_fiche_photographer");
        aTagline.setAttribute("aria-label", tagline);

        aPrice.setAttribute("class", "prix_fiche_photographer");
        aPrice.setAttribute("aria-label", price + "€/jour");

        button.setAttribute("aria-label", "Contactez-moi");

        photo.setAttribute("class", "photo_photographer");

        header.setAttribute("class", "presentation_photographer");

        //Texte afficher
        h1.textContent = name;
        aTagline.textContent = tagline;
        h2.textContent = country + ", " + city;

        return header;
    }

    return {
        name,
        picture,
        city,
        country,
        tagline,
        price,
        portrait,
        getUserCardDOM,
        getPhotographerDom,
    };
}
