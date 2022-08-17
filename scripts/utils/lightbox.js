// Open the Modal
function openModalPic() {
    const mediaId = document.querySelectorAll('.media-container article');
    for (let i = 0; i <= mediaId.length - 1; i++) {
        mediaId[i].addEventListener("click", (event) => {
            event.preventDefault();
            let i = event.currentTarget.getAttribute("data-index");
            let mediaSrc = event.target.getAttribute("src");
            let mediaAlt = event.target.getAttribute("alt");
            const mediaContainer = document.querySelector('.media-container');
            const mediaCard = document.createElement('dialog');
            mediaCard.id = "myModal";
            mediaCard.className = "img-modal";
            console.log("data-index " + i + " selected");
            console.log(mediaId[i]);
            console.log(mediaSrc);
            let modalTemplate = `
                <span class="close cursor" onClick="closeModal();">&times;</span>
                <div class="modal-content">
                    <div class="mySlides">
                        <img class='imgModal' src='${mediaSrc}' alt='${mediaAlt}'>
                        <p class='caption-container'>${mediaAlt}</p>
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

// Close the Modal
function closeModal() {
    console.log("close modal called");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelectorAll('close');
    modal.close();
    modal.parentElement.removeChild(modal);
}