export default class dataApi {
    async getData () {
        let response = await fetch("data/photographers.json");
        let data = await response.json();

        let dataMedias = [...data.media];
        let dataPhotographers = [...data.photographers];

        return {
            photographer: dataPhotographers,
            media: dataMedias
        };
    }
}