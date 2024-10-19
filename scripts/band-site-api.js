const apiKey = "8eb3eebf-5e76-465c-8fb1-e9151d0ac00b";


class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseurl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseurl}/comments?api_key=${this.apiKey}`, {
                name: comment.name,
                comment: comment.comment
            });
            return response.data;

        } catch (error) {
            console.log("there was an error posting comment", error);
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseurl}/comments?api_key=${this.apiKey}`);

            const comments = response.data;

            comments.sort((a,b) => b.timestamp - a.timestamp);
            return comments;

        } catch (error) {
            console.log("there was an error getting comments", error);
        }
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseurl}/showdates?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.log("there was an error getting shows", error);
        }

    }

//     async likeComment(commentId) {
//         const response = await fetch(`/comments/${commentId}/like`, {
//             method: 'PUT',
//         });

//         // const updatedComment = await response.json();
//         // return updatedComment;
//         return await response.json();
//     }

    async likeComment(commentId) {
        const response = await fetch(`${this.baseurl}/comments/${commentId}/like?api_key=${apiKey}`, {
            method: 'PUT',
        });

        // Log the response status
        console.log('Response Status:', response.status);

        // If the response is not OK, throw an error
        if (!response.ok) {
            const errorText = await response.text(); // Get the error response text
            console.error('Error response:', errorText); // Log the error text for debugging
            throw new Error(`Failed to like comment: ${response.status} - ${errorText}`);
        }

        // If the response is OK, parse it as JSON
        return await response.json();
    }
}



const bandApi = new BandSiteApi(apiKey);

export default BandSiteApi;
