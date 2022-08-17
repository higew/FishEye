export default function addIndex() {
    const article = document.querySelectorAll('.media-container article');
    const img = document.querySelectorAll('img');
    for (let i = 0; i <= article.length - 1; i++) {
        article[i].setAttribute("data-index", i);
        img[i].setAttribute("img-index", i);
    }
}

// export function addImgIndex(){
//     const img = document.querySelectorAll('img');
//     for (let i = 0; i <= img.length - 1; i++) {
//         img[i].setAttribute("img-index", i);
//     }
// }