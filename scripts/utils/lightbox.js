// Open the Modal
function openModalPic() {
    const mediaId = document.querySelectorAll('article');
    const imgMedia = document.querySelectorAll('img');
    const modal = document.getElementById("myModal");
    for (let i = 0; i <= mediaId.length - 1; i++) {
        mediaId[i].addEventListener("click", (event) => {
            event.preventDefault();
            let i = event.currentTarget.getAttribute("data-index");
            console.log("data-index " + i + " selected");
            console.log(mediaId[i]);
            //modal.open;
        });
    }
    for (let y = 0; y <= imgMedia.length - 1; y++) {
        imgMedia[y].addEventListener("click", (event) =>  {
            event.preventDefault();
            modal.open = true;
        })
    }
    //console.log(mediaId);
    //console.log(mediaId.item(1));
    //document.getElementById("myModal").style.display = "block";
    //document.querySelector(".mySlides").style.display = "block";
}

// Close the Modal
function closeModal() {
    console.log("close modal called");
    const modal = document.getElementById("myModal");
    modal.removeAttribute(open);
}