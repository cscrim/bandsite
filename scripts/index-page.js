
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

    const nameInput = e.target.nameInput.value;
    const commentInput = e.target.commentInput.value;

    const newComment = {
        name: nameInput,
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

    individualComment.setAttribute('data-id', myComment.id);

    const profilePic = document.createElement('div');
    profilePic.classList.add("pic-placeholder");
    

    const textContainer = document.createElement('div');
    textContainer.classList.add("text-container");


    const nameTimeContainer = document.createElement('div');
    nameTimeContainer.classList.add('name-time-container');


    const nameElement = document.createElement('span');
    nameElement.innerText = myComment.name;


    const timestampElement = document.createElement('span');
    
    const formattedStamp = new Date(myComment.timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    timestampElement.textContent = formattedStamp;
    

    nameTimeContainer.appendChild(nameElement);
    nameTimeContainer.appendChild(timestampElement);

    const textElement = document.createElement('p');
    textElement.innerText = myComment.comment;

    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    likeButton.innerText = 'Like';

    const likeCount = document.createElement('span');
    likeCount.classList.add('like-count');
    likeCount.innerText = myComment.likes || 0;



    textContainer.appendChild(nameTimeContainer);
    textContainer.appendChild(textElement);

    individualComment.appendChild(profilePic);

    individualComment.appendChild(textContainer)

    individualComment.appendChild(likeButton);
    individualComment.appendChild(likeCount);

    commentsContainer.appendChild(individualComment);

}


document.addEventListener('click', async(e) => {
    if (e.target.classList.contains('like-button')) {
        const commentElement = e.target.closest('.individual-comment');
        const commentId = commentElement.getAttribute('data-id');

        try {
            const updatedComment = await bandApi.likeComment(commentId);
            const likeCount = commentElement.querySelector('.like-count');
            likeCount.textContent = updatedComment.likes;
        } catch (error) {
            console.log("Error liking comment", error);
        }
    }
});


document.addEventListener('DOMContentLoaded', loadComments);

