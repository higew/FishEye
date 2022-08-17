// Open the Modal
function openModalPic() {
    const mediaId = document.querySelectorAll('.media-container article');
    for (let i = 0; i <= mediaId.length - 1; i++) {
        //const imgMedia = document.querySelectorAll('.media-container article img');
        mediaId[i].addEventListener("click", (event) => {
            event.preventDefault();
            //Getting all the info from the targeted article
            let i = event.currentTarget.getAttribute("data-index");
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
        });
    }
    // for (let y = 0; y <= imgMedia.length - 1; y++) {
    //     imgMedia[y].addEventListener("click", (event) =>  {
    //         event.preventDefault();
    //         modal.open = true;
    //     })
    // }
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
}

function nextMedia() {
    const targetModal = document.getElementById('myModal');
    const targetDiv = targetModal.querySelector('.modal-content');
    const getMediaIndex = targetDiv.getAttribute('data-index');
    console.log("Next data-index is " + (getMediaIndex + 1));
}

// Close the Modal
function closeModal() {
    console.log("close modal called");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelectorAll('close');
    modal.close();
    modal.parentElement.removeChild(modal);
}