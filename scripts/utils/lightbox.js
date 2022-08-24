// Open the Modal
function openModalPic() {
    const mediaId = document.querySelectorAll('.media-container article');
    for (let i = 0; i <= mediaId.length - 1; i++) {
        mediaId[i].firstElementChild.addEventListener("click", (event) => {
            event.preventDefault();
            //Getting all the info from the targeted article
            let i = event.target.parentNode.getAttribute("data-index");
            let mediaSrc = event.target.getAttribute("src");
            let mediaAlt = event.target.getAttribute("alt");
            
            const mediaContainer = document.querySelector('.media-container');
            //Creating the dialog box to show targeted article elements
            const mediaCard = document.createElement('dialog');
            mediaCard.id = "myModal";
            mediaCard.className = "img-modal";
            console.log("data-index " + i + " selected");
            console.log(mediaId[i]);
            console.log(mediaSrc);
            let mediaExtension = mediaSrc.split('.').pop();
            if(mediaExtension === "jpg") {
                let modalTemplate = `
                <span class="close cursor" onClick="closeModal();">&times;</span>
                <div class="modal-content" data-index="${i}">
                    <div class="mySlides">
                        <img class='imgModal' src='${mediaSrc}' alt='${mediaAlt}'>
                    </div>
                    <span class='prev' onClick='prevMedia();'>&#10094;</span>
                    <span class='next' onClick='nextMedia();'>&#10095;</span>
                    <div class='caption-container'>
                        <p class='caption'>${mediaAlt}</p>
                    </div>
                </div>
                `;
                mediaContainer.appendChild(mediaCard);
                mediaCard.innerHTML += modalTemplate;
                mediaCard.open = true;
            }
            else {
                let modalTemplate = `
                <span class="close cursor" onClick="closeModal();">&times;</span>
                <div class="modal-content" data-index="${i}">
                    <div class="mySlides">
                        <video class='imgModal' controls src='${mediaSrc}' type="video/mp4" alt='${mediaAlt}' ></video>
                    </div>
                    <span class='prev' onClick='prevMedia();'>&#10094;</span>
                    <span class='next' onClick='nextMedia();'>&#10095;</span>
                    <div class='caption-container'>
                        <p class='caption'>${mediaAlt}</p>
                    </div>
                </div>
                `;
                mediaContainer.appendChild(mediaCard);
                mediaCard.innerHTML += modalTemplate;
                mediaCard.open = true;
            }
        });
    }
}

function prevMedia() {
    const targetModal = document.getElementById('myModal');
    const targetDiv = targetModal.querySelector('.modal-content');
    const getMediaIndex = targetDiv.getAttribute('data-index');
    console.log("Prev data-index is " + (getMediaIndex - 1));

    //Delete Current img and caption opened on the dialog box
    const slide = targetDiv.querySelector('.imgModal');
    const captionSlide = targetDiv.querySelector('.caption');
    slide.parentElement.removeChild(slide);
    captionSlide.parentElement.removeChild(captionSlide);
    //Changing data-index
    targetDiv.setAttribute('data-index', (getMediaIndex - 1));

    //Getting the new data-index then charging new media
    const mediaId = document.querySelectorAll('.media-container article');
    for (let i = 0; i <= mediaId.length - 1; i++) {
        if ((getMediaIndex - 1) == mediaId[i].getAttribute('data-index')) {
            console.log(mediaId[i].childNodes);
            const newMedia = mediaId[i].childNodes[1].getAttribute('src');
            const newMediaAlt = mediaId[i].childNodes[1].getAttribute('alt');
            console.log('New media is ' + newMedia)

            //New Media included
            const modalContainer = document.querySelector('.modal-content');
            const modalCard = document.querySelector('.mySlides');
            let newMediaExtension = newMedia.split('.').pop();
            console.log("New media extension is " + newMediaExtension);
            if(newMediaExtension === "jpg") {
                let newMediaTemplate = `
                    <img class='imgModal' src='${newMedia}' alt='${newMediaAlt}'>
                `;
                modalContainer.appendChild(modalCard);
                modalCard.innerHTML += newMediaTemplate;
            }
            else {
                let newMediaTemplate = `
                    <video class='imgModal' controls src='${newMedia}' type="video/mp4" alt='${newMediaAlt}' ></video>
                `;
                modalContainer.appendChild(modalCard);
                modalCard.innerHTML += newMediaTemplate;
            }

            //New caption included
            const captionCard = document.querySelector('.caption-container');
            let newCaptionTemplate = `
                <p class='caption'>${newMediaAlt}</p>
            `;
            modalContainer.appendChild(captionCard);
            captionCard.innerHTML += newCaptionTemplate;
        }
    }
}

function nextMedia() {
    const targetModal = document.getElementById('myModal');
    const targetDiv = targetModal.querySelector('.modal-content');
    const getMediaIndex = targetDiv.getAttribute('data-index');
    console.log("Next data-index is " + (parseInt(getMediaIndex) + 1));

    //Delete Current img and caption opened on the dialog box
    const slide = targetDiv.querySelector('.imgModal');
    const captionSlide = targetDiv.querySelector('.caption');
    slide.parentElement.removeChild(slide);
    captionSlide.parentElement.removeChild(captionSlide);
    //Changing data-index
    targetDiv.setAttribute('data-index', (parseInt(getMediaIndex) + 1));
    
    //Getting the new data-index then charging new media
    const mediaId = document.querySelectorAll('.media-container article');
    for (let i = 0; i <= mediaId.length - 1; i++) {
        if ((parseInt(getMediaIndex) + 1) == mediaId[i].getAttribute('data-index')) {
            console.log(mediaId[i].childNodes);
            const newMedia = mediaId[i].childNodes[1].getAttribute('src');
            const newMediaAlt = mediaId[i].childNodes[1].getAttribute('alt');
            console.log('New media is ' + newMedia)

            //New Media included
            const modalContainer = document.querySelector('.modal-content');
            const modalCard = document.querySelector('.mySlides');
            let newMediaExtension = newMedia.split('.').pop();
            console.log("New media extension is " + newMediaExtension);
            if(newMediaExtension === "jpg") {
                let newMediaTemplate = `
                    <img class='imgModal' src='${newMedia}' alt='${newMediaAlt}'>
                `;
                modalContainer.appendChild(modalCard);
                modalCard.innerHTML += newMediaTemplate;
            }
            else {
                let newMediaTemplate = `
                    <video class='imgModal' controls src='${newMedia}' type="video/mp4" alt='${newMediaAlt}' ></video>
                `;
                modalContainer.appendChild(modalCard);
                modalCard.innerHTML += newMediaTemplate;
            }
            //New caption included
            const captionCard = document.querySelector('.caption-container');
            let newCaptionTemplate = `
                <p class='caption'>${newMediaAlt}</p>
            `;
            modalContainer.appendChild(captionCard);
            captionCard.innerHTML += newCaptionTemplate;
        }
    }
}

// Close the Modal
function closeModal() {
    console.log("close modal called");
    const modal = document.getElementById("myModal");
    //const closeBtn = document.querySelectorAll('close');
    modal.close();
    modal.parentElement.removeChild(modal);
}