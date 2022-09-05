import dataApi from "../utils/fetchdata.js";

new dataApi()
.getData().then((data) => {
  data.photographer.map((photographer) => {
    const photographerContainer = document.querySelector('.photographer_section');
    const photographerCard = document.createElement('article');
    photographerCard.className += 'photographer-container';
    let htmlTemplate = `
    <a href='photographer.html?id=${photographer.id}'>
      <div>
        <img src='../../assets/photographers/${photographer.portrait}' alt='Portrait de ${photographer.name}'>
        <h1 class="photographer_name">${photographer.name}</h1>
        <h2 class="city">${photographer.city}</h2>
        <h3 class="tagline">${photographer.tagline}</h3>
        <h4 class="price">${photographer.price}€/jour</h4>
      </div>
    </a>
    `;
    photographerContainer.appendChild(photographerCard);
    photographerCard.innerHTML += htmlTemplate;
  })
})