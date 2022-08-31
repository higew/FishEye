import addIndex from "../factories/photographer.js";
//import filter from "../utils/filter.js";

let getURL = new URLSearchParams(window.location.search);
let getId = getURL.get("id");
let photographerId = parseInt(getId);

//Get all the photographer then get the one with the same ID as URL
import dataApi from "../utils/fetchdata.js";
new dataApi().getData().then((data) => {
data.photographer.map((photographer) => {
    if (photographer.id == photographerId) {
      const photographerContainer =
        document.querySelector(".photograph-header");
      const photographerCard = document.createElement("article");
      photographerCard.className += "photographer-container";
      let htmlTemplate = `
            <div class="photographer-info">
                <div class="photographer-text-info">
                    <h2 class="photographer_name">${photographer.name}</h2>
                    <h3 class="city">${photographer.city}</h3>
                    <h5 class="tagline">${photographer.tagline}</h5>
                </div>
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                <img src='../../assets/photographers/${photographer.portrait}' alt='Portrait de ${photographer.name}'>
            </div>
            `;
      photographerContainer.appendChild(photographerCard);
      photographerCard.innerHTML += htmlTemplate;
      console.log("L'id du photographe est " + photographer.id);
    }
  });

    //Get all the medias then only get medias = to the photographer ID from URL
    const arrayMedia = data.media.filter((media) => {
      if (media.photographerId == photographerId) {
        console.log("Id photo du photographe : " + media.id);
        const mediaContainer = document.querySelector(".media-container");
        const mediaCard = document.createElement("article");
        if (media.image) {
          let htmlTemplate = `
                      <img data-id="${media.id}" src='../../assets/images/${media.image}' alt='${media.title}'>
                      <div class='media-info'>
                          <p>${media.title}</p>
                          <p><span class="like-count">${media.likes}</span> <i class="fa-regular fa-heart heart"></i></p>
                      </div>
                  `;
          mediaContainer.appendChild(mediaCard);
          mediaCard.innerHTML += htmlTemplate;
          addIndex();
        } else {
          let htmlTemplate = `
                      <video controls src='../../assets/images/${media.video}' type="video/mp4" alt='${media.title}' ></video>
                      <div class='media-info'>
                          <p>${media.title}</p>
                          <p><span class="like-count">${media.likes}</span> <i class="fa-regular fa-heart heart"></i></p>
                      </div>
                  `;
          mediaContainer.appendChild(mediaCard);
          mediaCard.innerHTML += htmlTemplate;
        }
      }
      return media.photographerId === photographerId;
    });

  //Filter button
  const btnFilter = document.querySelector(".dropdown-content");
  console.log(btnFilter);
  //const filterLinks = document.querySelectorAll(".filter_link");
  const buttonOpenMenu = document.querySelector("#button_open_menu button");
  const mediaContainer = document.querySelector(".media-container");
  let value = "default";
  btnFilter.addEventListener("click", (event) => {
    const type = event.target.getAttribute("data-filter-type");
    console.log(type);
    if (type === "date") {
      buttonOpenMenu.innerHTML = "Date";
      value = "date";
      filter(value, arrayMedia);
      mediaContainer.innerHTML = "";
      arrayMedia.forEach((arrayMedia) => {
        if (arrayMedia.photographerId == photographerId) {
          const mediaContainer = document.querySelector(".media-container");
          const mediaCard = document.createElement("article");
          if (arrayMedia.image) {
            let htmlTemplate = `
                        <img data-id="${arrayMedia.id}" src='../../assets/images/${arrayMedia.image}' alt='${arrayMedia.title}'>
                        <div class='media-info'>
                            <p>${arrayMedia.title}</p>
                            <p><span class="like-count">${arrayMedia.likes}</span> <i class="fa-regular fa-heart heart"></i></p>
                        </div>
                    `;
            mediaContainer.appendChild(mediaCard);
            mediaCard.innerHTML += htmlTemplate;
            addIndex();
          } else {
            let htmlTemplate = `
                        <video controls src='../../assets/images/${arrayMedia.video}' type="video/mp4" alt='${arrayMedia.title}' ></video>
                        <div class='media-info'>
                            <p>${arrayMedia.title}</p>
                            <p><span class="like-count">${arrayMedia.likes}</span> <i class="fa-regular fa-heart heart"></i></p>
                        </div>
                    `;
            mediaContainer.appendChild(mediaCard);
            mediaCard.innerHTML += htmlTemplate;
            addIndex();
          }
        }
        return arrayMedia.photographerId === photographerId;
      });
      openModalPic();
      totalLikeCount();
      like();
    } else if (type === "popularity") {
      buttonOpenMenu.innerHTML = "Popularité";
      value = "popularity";
      filter(value, arrayMedia);
      mediaContainer.innerHTML = "";
      arrayMedia.forEach((arrayMedia) => {
        if (arrayMedia.photographerId == photographerId) {
          const mediaContainer = document.querySelector(".media-container");
          const mediaCard = document.createElement("article");
          if (arrayMedia.image) {
            let htmlTemplate = `
                        <img data-id="${arrayMedia.id}" src='../../assets/images/${arrayMedia.image}' alt='${arrayMedia.title}'>
                        <div class='media-info'>
                            <p>${arrayMedia.title}</p>
                            <p><span class="like-count">${arrayMedia.likes}</span> <i class="fa-regular fa-heart heart"></i></p>
                        </div>
                    `;
            mediaContainer.appendChild(mediaCard);
            mediaCard.innerHTML += htmlTemplate;
            addIndex();
          } else {
            let htmlTemplate = `
                        <video controls src='../../assets/images/${arrayMedia.video}' type="video/mp4" alt='${arrayMedia.title}' ></video>
                        <div class='media-info'>
                            <p>${arrayMedia.title}</p>
                            <p><span class="like-count">${arrayMedia.likes}</span> <i class="fa-regular fa-heart heart"></i></p>
                        </div>
                    `;
            mediaContainer.appendChild(mediaCard);
            mediaCard.innerHTML += htmlTemplate;
            addIndex();
          }
        }
        return arrayMedia.photographerId === photographerId;
      });
      openModalPic();
      totalLikeCount();
      like();
    } else if (type === "title") {
      buttonOpenMenu.innerHTML = "Titre";
      value = "title";
      filter(value, arrayMedia);
      mediaContainer.innerHTML = "";
      arrayMedia.forEach((arrayMedia) => {
        if (arrayMedia.photographerId == photographerId) {
          const mediaContainer = document.querySelector(".media-container");
          const mediaCard = document.createElement("article");
          if (arrayMedia.image) {
            let htmlTemplate = `
                        <img data-id="${arrayMedia.id}" src='../../assets/images/${arrayMedia.image}' alt='${arrayMedia.title}'>
                        <div class='media-info'>
                            <p>${arrayMedia.title}</p>
                            <p><span class="like-count">${arrayMedia.likes}</span> <i class="fa-regular fa-heart heart"></i></p>
                        </div>
                    `;
            mediaContainer.appendChild(mediaCard);
            mediaCard.innerHTML += htmlTemplate;
            addIndex();
          } else {
            let htmlTemplate = `
                        <video controls src='../../assets/images/${arrayMedia.video}' type="video/mp4" alt='${arrayMedia.title}' ></video>
                        <div class='media-info'>
                            <p>${arrayMedia.title}</p>
                            <p><span class="like-count">${arrayMedia.likes}</span> <i class="fa-regular fa-heart heart"></i></p>
                        </div>
                    `;
            mediaContainer.appendChild(mediaCard);
            mediaCard.innerHTML += htmlTemplate;
            addIndex();
          }
        }
        return arrayMedia.photographerId === photographerId;
      });
      openModalPic();
      totalLikeCount();
      like();
    }
  });

  console.log(arrayMedia);
  //console.log(filter(value, media));

  //Total likes and price area
  console.log("total Likes for this photographer : " + totalLikeCount());
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

function filter(value, media) {
  switch (value) {
    case "popularity":
      media.sort((a, b) => {
        return b.likes - a.likes;
      });
      break;

    case "date":
      media.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
      });
      break;

    case "title":
      media.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      });
      break;

    default:
      break;
  }
  return media;
}

// const arrayMedia = await new dataApi().getData().then((data) => data.media.filter(media => {
//     return media.photographerId === photographerId
// }));

// console.log(arrayMedia);
// let value = "popularity";
// console.log(filter(value, arrayMedia));
