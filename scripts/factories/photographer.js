//Add data-index to all the articles in media-container for the navigation
export default function addIndex() {
    const article = document.querySelectorAll('.media-container article');
    for (let i = 0; i <= article.length - 1; i++) {
        article[i].setAttribute("data-index", i);
        // if (i == 0) {
        //     console.log(article[i]);
        //     article[i].setAttribute("tabindex", i);
        // }
    }
}