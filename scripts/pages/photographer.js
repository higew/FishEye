import addIndex from "../factories/photographer.js";
//import filter from "../utils/filter.js";

let getURL = new URLSearchParams(window.location.search);
let getId = getURL.get("id");
let photographerId = parseInt(getId);

//Get all the photographer then get the one with the same ID as URL
import dataApi from "../utils/fetchdata.js";
new dataApi()
.getData().then((data) => {
    data.photographer.map((photographer) => {
        if(photographer.id == photographerId) {
            const photographerContainer = document.querySelector('.photograph-header');
            const photographerCard = document.createElement('article');
            photographerCard.className += 'photographer-container';
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
    })

    //Filter button
    const filterLinks = document.querySelectorAll(".filter_link");
    const buttonOpenMenu = document.querySelector("#button_open_menu button");
    Array.from(filterLinks).forEach((filter) => {
        filter.addEventListener("click", handleFunctionFilterEvent);
        function handleFunctionFilterEvent(event) {
            let value = "default";
            const type = event.target.getAttribute("data-filter-type");
            if (type === "date") {
                buttonOpenMenu.innerHTML = "Date";
                return value = "date"
            } 
            else if (type === "popularity") {
                buttonOpenMenu.innerHTML = "Popularité";
                return value = "popularity"
            } 
            else if (type === "title") {
                buttonOpenMenu.innerHTML = "Titre";
                return value = "title"
            }
            console.log(value);
            return value
        }
    })

    //Get all the medias then only get medias = to the photographer ID from URL
    const arrayMedia = data.media.filter(media => {
        if(media.photographerId == photographerId) {
            console.log("Id photo du photographe : " + media.id);
            const mediaContainer = document.querySelector('.media-container');
            const mediaCard = document.createElement('article');
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
            }
            else {
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
        return media.photographerId === photographerId
    })
    console.log(arrayMedia);
    //console.log(filter(value, arrayMedia));
    //console.log(filter(value, media));

    // const closeModal = document.getElementById('myModal');
    // //const closeBtn = document.querySelectorAll('close');
    // window.addEventListener('keydown', (event) => {
    //     if (event.key === "Escape") {
    //         closeModal.close();
    //     }
    // });

    //Total likes and price area
    console.log("total Likes for this photographer : " + totalLikeCount());
    data.photographer.filter(photographer => {
        if(photographer.id == photographerId) {
            const likesAndPriceArea = document.getElementById("totalLikeAndPrice");
            const likesAndPriceCard = document.createElement('div');
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
    })

    //Calling the functions
    openModalPic();
    totalLikeCount();
    like();
})

function filter(value, media) {
    switch(value) {
        case "popularity":
            media.sort((a, b) => {
                return b.likes - a.likes
            });
        break;

        case "date":
            media.sort((a, b) => {
                return b.date - a.date
            });
        break;

        case "title":
            media.sort((a, b) => {
                return b.title - a.title
            });
        break;

        default : 
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