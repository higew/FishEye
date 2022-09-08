import addIndex from "../factories/photographer.js";
import filter from "../utils/filter.js";

let getURL = new URLSearchParams(window.location.search);
let getId = getURL.get("id");
let photographerId = parseInt(getId);

//Get all the photographer then get the one with the same ID as URL
import dataApi from "../utils/fetchdata.js";
new dataApi().getData().then((data) => {
data.photographer.map((photographer) => {
    if (photographer.id == photographerId) {
      const photographerContainer = document.querySelector(".photograph-header");
      const photographerCard = document.createElement("article");
      photographerCard.className += "photographer-container";
      let htmlTemplate = `
            <div class="photographer-info">
                <div class="photographer-text-info">
                    <h1 class="photographer_name" aria-label="Nom">${photographer.name}</h1>
                    <h2 class="city" aria-label="Ville">${photographer.city}</h2>
                    <h3 class="tagline" aria-label="Citation">${photographer.tagline}</h3>
                </div>
                <button class="contact_button" aria-label="Contact" onclick="displayModal()">Contactez-moi</button>
                <img src='assets/photographers/${photographer.portrait}' alt='Portrait de ${photographer.name}' tabindex="0">
            </div>
            `;
      photographerContainer.appendChild(photographerCard);
      photographerCard.innerHTML += htmlTemplate;
      const modalContainer = document.getElementById('modalTitle');
      modalContainer.innerHTML += ("<br>" + photographer.name);
    }
  });

    //Get all the medias then only get medias = to the photographer ID from URL
    const arrayMedia = data.media.filter((media) => {
      if (media.photographerId == photographerId) {
        const mediaContainer = document.querySelector(".media-container");
        const mediaCard = document.createElement("article");
        mediaCard.setAttribute('tabindex', 0);
        mediaCard.setAttribute('role', 'button');
        mediaCard.setAttribute('aria-label', "Ouvrir la Lightbox de " + media.title);
        if (media.image) {
          let htmlTemplate = `
                      <img data-id="${media.id}" src='assets/images/${media.image}' alt='${media.title}' role="button" tabindex="0">
                      <div class='media-info'>
                          <p>${media.title}</p>
                          <p><span class="like-count">${media.likes}</span> <i class="fa-regular fa-heart heart" alt="Bouton Like pour ${media.title}" tabindex="0"></i></p>
                      </div>
                  `;
          mediaContainer.appendChild(mediaCard);
          mediaCard.innerHTML += htmlTemplate;
          addIndex();
        } else {
          let htmlTemplate = `
                      <video src='assets/images/${media.video}' type="video/mp4" alt='${media.title}' role="button" tabindex="0"></video>
                      <div class='media-info'>
                          <p>${media.title}</p>
                          <p><span class="like-count">${media.likes}</span> <i class="fa-regular fa-heart heart" alt="Bouton Like pour ${media.title}" tabindex="0"></i></p>
                      </div>
                  `;
          mediaContainer.appendChild(mediaCard);
          mediaCard.innerHTML += htmlTemplate;
          addIndex();
        }
      }
      return media.photographerId === photographerId;
    });

  function mediaFiltered() {
    arrayMedia.forEach((arrayMedia) => {
      if (arrayMedia.photographerId == photographerId) {
        const mediaContainer = document.querySelector(".media-container");
        const mediaCard = document.createElement("article");
        mediaCard.setAttribute('tabindex', 0);
        mediaCard.setAttribute('role', 'button');
        mediaCard.setAttribute('aria-label', "Ouvrir la Lightbox de " + arrayMedia.title);
        if (arrayMedia.image) {
          let htmlTemplate = `
                      <img data-id="${arrayMedia.id}" src='assets/images/${arrayMedia.image}' alt='${arrayMedia.title}' tabindex="0">
                      <div class='media-info'>
                          <p>${arrayMedia.title}</p>
                          <p><span class="like-count">${arrayMedia.likes}</span> <i class="fa-regular fa-heart heart" alt="Bouton Like pour ${arrayMedia.title}" tabindex="0"></i></p>
                      </div>
                  `;
          mediaContainer.appendChild(mediaCard);
          mediaCard.innerHTML += htmlTemplate;
          addIndex();
        } else {
          let htmlTemplate = `
                      <video src='assets/images/${arrayMedia.video}' type="video/mp4" alt='${arrayMedia.title}' tabindex="0"></video>
                      <div class='media-info'>
                          <p>${arrayMedia.title}</p>
                          <p><span class="like-count">${arrayMedia.likes}</span> <i class="fa-regular fa-heart heart" alt="Bouton Like pour ${arrayMedia.title}" tabindex="0"></i></p>
                      </div>
                  `;
          mediaContainer.appendChild(mediaCard);
          mediaCard.innerHTML += htmlTemplate;
          addIndex();
        }
      }
      return arrayMedia.photographerId === photographerId;
    });
  }
  
  //Filter button
  const btnFilter = document.querySelector(".dropdown-content");
  const buttonOpenMenu = document.querySelector("#button_open_menu button");
  const mediaContainer = document.querySelector(".media-container");
  let value = "default";
  btnFilter.addEventListener("click", (event) => {
    const type = event.target.getAttribute("data-filter-type");
    if (type === "date") {
      buttonOpenMenu.innerHTML = "Date";
      value = "date";
      filter(value, arrayMedia);
      mediaContainer.innerHTML = "";
      mediaFiltered();
      openModalPic();
      totalLikeCount();
      like();
    } else if (type === "popularity") {
      buttonOpenMenu.innerHTML = "Popularité";
      value = "popularity";
      filter(value, arrayMedia);
      mediaContainer.innerHTML = "";
      mediaFiltered();
      openModalPic();
      totalLikeCount();
      like();
    } else if (type === "title") {
      buttonOpenMenu.innerHTML = "Titre";
      value = "title";
      filter(value, arrayMedia);
      mediaContainer.innerHTML = "";
      mediaFiltered();
      openModalPic();
      totalLikeCount();
      like();
    }
  });
  // btnFilter.addEventListener("keypress", (event) => {
  //   if (event.key === "Enter"){
  //   const type = event.target.getAttribute("data-filter-type");
  //   if (type === "date") {
  //     buttonOpenMenu.innerHTML = "Date";
  //     value = "date";
  //     filter(value, arrayMedia);
  //     mediaContainer.innerHTML = "";
  //     mediaFiltered();
  //     openModalPic();
  //     totalLikeCount();
  //     like();
  //   } else if (type === "popularity") {
  //     buttonOpenMenu.innerHTML = "Popularité";
  //     value = "popularity";
  //     filter(value, arrayMedia);
  //     mediaContainer.innerHTML = "";
  //     mediaFiltered();
  //     openModalPic();
  //     totalLikeCount();
  //     like();
  //   } else if (type === "title") {
  //     buttonOpenMenu.innerHTML = "Titre";
  //     value = "title";
  //     filter(value, arrayMedia);
  //     mediaContainer.innerHTML = "";
  //     mediaFiltered();
  //     openModalPic();
  //     totalLikeCount();
  //     like();
  //   }
  // }
  // });

  //Total likes and price area
  data.photographer.filter((photographer) => {
    if (photographer.id == photographerId) {
      const likesAndPriceArea = document.getElementById("totalLikeAndPrice");
      const likesAndPriceCard = document.createElement("div");
      likesAndPriceCard.className = "areaBottomRight";
      let likesAndPriceTemplate = `
                <div>
                    <span id="totalLike">${totalLikeCount()}</span> <i class="fa-solid fa-heart heart"></i>
                </div>
                <span>${photographer.price}€ / jour</span>
            `;
      likesAndPriceArea.appendChild(likesAndPriceCard);
      likesAndPriceCard.innerHTML += likesAndPriceTemplate;
    }
  });

  //Calling the functions
  openModalPic();
  totalLikeCount();
  like();
});