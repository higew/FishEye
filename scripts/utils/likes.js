function like() {
    const likeSpan = document.querySelectorAll('.like-count');
    const heartIcon = document.querySelectorAll('.fa-heart');
    const totalLikeArea = document.getElementById('totalLike');
    //const totalLike = parseInt(totalLikeArea.textContent);
    for (let i = 0; i <= heartIcon.length - 1; i++) {
        heartIcon[i].addEventListener("click", (event) => {
            event.preventDefault();
            //If already liked, remove 1
            if (likeSpan[i].classList.contains('liked')) {
                heartIcon[i].classList.remove('fa-solid');
                heartIcon[i].classList.add('fa-regular');
                likeSpan[i].classList.remove('liked');
                likeSpan[i].innerHTML = parseInt(likeSpan[i].innerHTML) - 1;
                console.log(totalLikeArea);
                //Then remove it to the total
                totalLikeArea.innerHTML = (parseInt(totalLikeArea.innerHTML - 1));
            }
            //if not, add 1 
            else {
                likeSpan[i].classList.add('liked');
                heartIcon[i].classList.remove('fa-regular');
                heartIcon[i].classList.add('fa-solid');
                likeSpan[i].innerHTML = parseInt(likeSpan[i].innerHTML) + 1;
                console.log(totalLikeArea);
                //Then add it to the total
                totalLikeArea.innerHTML = parseInt(parseInt(totalLikeArea.innerHTML) + 1);
            }
        })
    }
}

//Get all the like and return the sum
function totalLikeCount() {
    const likeSpan = document.querySelectorAll('.like-count');
    let sum = 0;
    for (let i = 0; i <= likeSpan.length - 1; i++) {
        sum+= parseInt(likeSpan[i].textContent);
    }
    return sum;
}