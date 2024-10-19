
import BandSiteApi from './band-site-api.js';

const apiKey = "8eb3eebf-5e76-465c-8fb1-e9151d0ac00b";

const bandApi = new BandSiteApi(apiKey);


async function loadShows() {
    try {
        const shows = await bandApi.getShows();
        renderShows(shows);
    } catch (error) {
        console.log("Error loading shows", error);
    }
}

const getShows = document.querySelector('.shows__container');

function renderShows(showsArray) {
    getShows.innerHTML=" ";

    showsArray.forEach(show => {
        const showContainer = document.createElement('div');
        showContainer.classList.add('show__container');

        const dateValue = new Date(show.date).toLocaleDateString();


    
        const dateBlock = document.createElement('div');
        dateBlock.classList.add('block');
    
        const dateLabel = document.createElement('div');
        dateLabel.classList.add('label');
        dateLabel.innerText = "DATE";
    
        const dateElement = document.createElement('div');
        dateElement.classList.add('date-value');
        dateElement.innerText = dateValue;
    
        dateBlock.appendChild(dateLabel);
        dateBlock.appendChild(dateElement);
    
        const venueBlock = document.createElement('div');
        venueBlock.classList.add('block');
    
        const venueLabel = document.createElement('div');
        venueLabel.classList.add('label');
        venueLabel.innerText= "VENUE";
    
        const venueValue = document.createElement('div');
        venueValue.classList.add('venue-value');
        venueValue.innerText = show.place;
    
        venueBlock.appendChild(venueLabel);
        venueBlock.appendChild(venueValue);
    
        const locationBlock = document.createElement('div');
        locationBlock.classList.add('block');
    
        const locationLabel = document.createElement('div');
        locationLabel.classList.add('label');
        locationLabel.innerText = "LOCATION";
    
        const locationValue = document.createElement('div');
        locationValue.classList.add('location-value');
        locationValue.innerText = show.location;
    
        locationBlock.appendChild(locationLabel);
        locationBlock.appendChild(locationValue);
    
        const button = document.createElement('button');
        button.classList.add('button');
        button.innerText = "BUY TICKETS";
    
    
        showContainer.appendChild(dateBlock);
        showContainer.appendChild(venueBlock);
        showContainer.appendChild(locationBlock);
        showContainer.appendChild(button);
    
    
        const dividerLine = document.createElement('div');
        dividerLine.classList.add('divider');
        showContainer.appendChild(dividerLine);
    
        getShows.appendChild(showContainer);
    
    
        
        showContainer.addEventListener('click', () => {
            
            const allShows = document.querySelectorAll('.show__container');
            allShows.forEach(item => item.classList.remove('selected'));
    
            showContainer.classList.add('selected');
    
        });
    
    });

}

document.addEventListener('DOMContentLoaded', loadShows);



