function like() {
    const likeSpan = document.querySelector('.like-count');
    if (likeSpan.classList.contains('liked')) {
        likeSpan.classList.remove('liked');
        likeSpan.innerHTML = parseInt(likeSpan.innerHTML) - 1;
    } else {
        likeSpan.classList.add('liked');
        likeSpan.innerHTML = parseInt(likeSpan.innerHTML) + 1;
    }
}