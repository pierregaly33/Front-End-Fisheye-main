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
        //création DOM
        const header = document.createElement("div");
        const img = document.createElement("img");
        const aTagline = document.createElement("p");
        const aPrice = document.createElement("p");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const button = document.getElementById("contact");
        console.log();

        //Affichage des éléments
        header.appendChild(img);
        header.appendChild(h1);
        header.appendChild(h2);
        header.appendChild(aTagline);
        header.appendChild(aPrice);
        header.appendChild(button);

        //Attributs des éléments
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        h1.setAttribute("aria-label", name);
        h2.setAttribute("aria-label", city + ", " + country);
        aTagline.setAttribute("aria-label", tagline);
        aPrice.setAttribute("aria-label", price + "€/jour");
        button.setAttribute("aria-label", "Contactez-moi");

        //Texte afficher
        h1.textContent = name;
        aTagline.textContent = tagline;
        aPrice.textContent = price + "€/jour";
        h2.textContent = country + ", " + city;

        return header;
    }
    return { name, picture, city, country, tagline, price, portrait, getUserCardDOM, getPhotographerDom };
}
