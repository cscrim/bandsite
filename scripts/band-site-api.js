const apiKey = "8eb3eebf-5e76-465c-8fb1-e9151d0ac00b";


class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseurl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async postComment (comment) {
        try {
            const response = await axios.post(`${this.baseurl}/comments?api_key=${this.apiKey}`, comment);
            return response.data;

        } catch (error) {
            console.log("there was an error posting comment", error);
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseurl}/comments?api_key=${this.apiKey}`);

            const comments = response.data;

            comments.sort((a,b) => new Date(b.date) - new Date(a.date));
            return comments;

        } catch (error) {
            console.log("there was an error getting comments", error);
        }
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseurl}/shows?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.log("there was an error getting shows", error);
        }

    }
}

const bandApi = new BandSiteApi(apiKey);
