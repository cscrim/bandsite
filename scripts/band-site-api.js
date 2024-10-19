

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseurl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async postComment (comment) {
        try {
            const response = await axios.post(`${this.baseurl}/comments`, comment);
            return response.data;

        } catch (error) {
            console.log("there was an error posting comment", error);
        }
    }

    async getComment () {
        try {
            const response = await axios.get(`${this.baseurl}/comments`);
            return response.data;
        } catch (error) {
            console.log("there was an error getting comments", error);
        }
    }
}