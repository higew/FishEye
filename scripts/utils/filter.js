export default function filter(value, media) {
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