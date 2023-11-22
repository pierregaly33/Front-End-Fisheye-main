//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);

    const photographersData = await fetch("../data/photographers.json").then((data) => data.json());
    const photographers = photographersData.photographers;
    console.log(photographers);
    console.log(photographersData);

    const photographer = photographers.find((photographer) => photographer.id == id);
    console.log(photographer);
}
getPhotographerId();
