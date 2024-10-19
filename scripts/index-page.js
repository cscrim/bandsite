// creating an array of objects for the 3 existing comments

// const commentsArray = [
//     {
//         name: "Victor Pinto", 
//         timestamp: " ",
//         text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for waht it is and what it contains."
//     },
//     {
//         name: "Christina Cabrera",
//         timestamp: " ",
//         text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {
//         name: "Isaac Tadesse",
//         timestamp: " ",
//         text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough"
//     }
// ];

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



// function renderComments(commentsArray) {
//     console.log("Rendering comments:", commentsArray);
//     const commentsContainer = document.querySelector('.comments__container');
//     commentsContainer.innerHTML = " ";

//     commentsArray.forEach(comment => {
//         displayComment(comment);
//     });
// }

// renderComments();


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

