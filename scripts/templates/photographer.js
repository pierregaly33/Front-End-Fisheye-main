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

        //Affichage des éléments
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(aTagline);
        article.appendChild(aPrice);

        //Attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        h2.setAttribute("aria-label", name);
        h3.setAttribute("aria-label", city + ", " + country);
        aTagline.setAttribute("aria-label", tagline);
        aPrice.setAttribute("aria-label", price + "€/jour");

        //Texte afficher
        h2.textContent = name;
        aTagline.textContent = tagline;
        aPrice.textContent = price + "€/jour";
        h3.textContent = country + ", " + city;

        return article;
    }
    return { name, picture, city, country, tagline, price, portrait, getUserCardDOM };
}
