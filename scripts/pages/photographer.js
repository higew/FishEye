let getURL = new URLSearchParams(window.location.search);
let getId = getURL.get("id");
let photographerId = parseInt(getId);

import dataApi from "../utils/fetchdata.js";
new dataApi()
.getData().then((data) => {
    data.photographer.map((photographer) => {
        if(photographer.id == photographerId) {
            const photographerContainer = document.querySelector('.photograph-header');
            const photographerCard = document.createElement('article');
            photographerCard.className += 'photographer-container';
            let htmlTemplate = `
            <div>
                <img src='../../assets/photographers/${photographer.portrait}' alt='Portrait de ${photographer.name}'>
                <div class="photographer-info">
                    <h2 class="photographer_name">${photographer.name}</h2>
                    <h3 class="city">${photographer.city}</h3>
                    <h5 class="tagline">${photographer.tagline}</h5>
                    <!-- <h4 class="price">${photographer.price}€/jour</h4> -->
                </div>
            </div>
            `;
            photographerContainer.appendChild(photographerCard);
            photographerCard.innerHTML += htmlTemplate;
            console.log("L'id du photographe est " + photographer.id);
        }
    })
    data.media.map((media) => {
        if(media.photographerId == photographerId) {
            console.log("Id photo du photographe : " + media.id);
            let htmlTemplate = `
            <div>
                <img src='../../assets/images/${media.image}' alt='${media.title}'>
            </div>
            `;
        }
    })
}) 