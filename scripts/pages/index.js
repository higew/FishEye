// "use strict";
import dataApi from "../utils/fetchdata.js";
// new dataApi()
//   .getData()
//   .then((data) => {
//     console.log(data.media);
//     console.log(data.photographer[2].name);
//   })
//   .catch(() => {
//     alert("Erreur de chargement.");
//   });
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
        <h2 class="photographer_name">${photographer.name}</h2>
        <h3 class="city">${photographer.city}</h3>
        <h5 class="tagline">${photographer.tagline}</h5>
        <h4 class="price">${photographer.price}€/jour</h4>
      </div>
    </a>
    `;
    photographerContainer.appendChild(photographerCard);
    photographerCard.innerHTML += htmlTemplate;
  })
}) 
  //async function getPhotographers() {
    // const response = await fetch("data/photographers.json");
    // const data = await response.json();
    // const photographers = [{
    //   "name": data.photographers[0].name,
    //   "id": data.photographers[0].id,
    //   "city": data.photographers[0].city,
    //   "country": data.photographers[0].country,
    //   "tagline": data.photographers[0].tagline,
    //   "price": data.photographers[0].price,
    //   "portrait": data.photographers[0].portrait
    // }]

    // for (let i = 0; i <= data.photographers.length - 1; i++) {  
    //   photographers[i] = data.photographers[i];
    // }
    // return ({
    //   photographers: [...photographers]
    // })
//}

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

//async function init() {
  // Récupère les datas des photographes
  //const { photographers } = await getPhotographers();
  //displayData(photographers);
//}

//init();
