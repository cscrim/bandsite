
import BandSiteApi from './band-site-api.js';

const apiKey = "8eb3eebf-5e76-465c-8fb1-e9151d0ac00b";

const bandApi = new BandSiteApi(apiKey);


async function loadComments() {
    try {
        const comments = await bandApi.getComments();
        console.log("Fetched comments:", comments);
        renderComments(comments);
    } catch (error) {
        console.log("Error loading comments", error);
    }
}

function renderComments(fetchedComments) {
    console.log("Rendering comments", fetchedComments);
    const commentsContainer = document.querySelector('.comments__container');
    commentsContainer.innerHTML = " ";

    if (fetchedComments) {
        fetchedComments.forEach(comment => {
            displayComment(comment);
        });
    } else {
        console.log("no comments to display");
    }
}


const getForm = document.getElementById('comments__form');

getForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('nameInput').value;
    const commentInput = document.getElementById('commentInput').value;

    const newComment = {
        name: nameInput,
        // timestamp: " ",
        comment: commentInput
    };

    try {
        await bandApi.postComment(newComment);
        await loadComments();
    } catch (error) {
        console.log("Error posting comments", error);
    }

    getForm.reset();

});


function displayComment (myComment) {

    const commentsContainer = document.querySelector('.comments__container');

    const individualComment = document.createElement('div');
    individualComment.classList.add('individual-comment');

    const profilePic = document.createElement('div');
    profilePic.classList.add("pic-placeholder");
    

    const textContainer = document.createElement('div');
    textContainer.classList.add("text-container");

    const nameElement = document.createElement('span');
    nameElement.innerText = myComment.name;

    //const timestampElement = document.createElement('span');
    // timestampElement.textContent = myComment.timestamp

    const textElement = document.createElement('p');
    textElement.innerText = myComment.comment;
    

    individualComment.appendChild(profilePic);

    textContainer.appendChild(nameElement);

    textContainer.appendChild(textElement);

    individualComment.appendChild(textContainer)

    commentsContainer.appendChild(individualComment);

}

document.addEventListener('DOMContentLoaded', loadComments);

