// creating an array of objects for the 3 existing comments

const commentsArray = [
    {
        name: "Victor Pinto", 
        timestamp: " ",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for waht it is and what it contains."
    },
    {
        name: "Christina Cabrera",
        timestamp: " ",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Isaac Tadesse",
        timestamp: " ",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough"
    }
];



function renderComments() {
    const commentsContainer = document.querySelector('.comments__container');
    commentsContainer.innerHTML = " ";

    commentsArray.forEach(comment => {
        displayComment(comment);
    });
}

renderComments();



const getForm = document.getElementById('comments__form');

getForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('nameInput').value;
    const commentInput = document.getElementById('commentInput').value;

    const newComment = {
        name: nameInput,
        timestamp: " ",
        text: commentInput
    };

    commentsArray.unshift(newComment);

    renderComments();

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
    textElement.innerText = myComment.text;
    

    individualComment.appendChild(profilePic);

    textContainer.appendChild(nameElement);

    textContainer.appendChild(textElement);

    individualComment.appendChild(textContainer)

    commentsContainer.appendChild(individualComment);

}

