const showsArray = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco CA"
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco CA"
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco CA"
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco CA"
    }
];


const getShows = document.querySelector('.shows__container');

showsArray.forEach(show => {
    const showContainer = document.createElement('div');
    showContainer.classList.add('show__container');

    const dateBlock = document.createElement('div');
    dateBlock.classList.add('block');

    const dateLabel = document.createElement('div');
    dateLabel.classList.add('label');
    dateLabel.innerText = "DATE";

    const dateValue = document.createElement('div');
    dateValue.classList.add('date-value');
    dateValue.innerText = show.date;

    dateBlock.appendChild(dateLabel);
    dateBlock.appendChild(dateValue);

    const venueBlock = document.createElement('div');
    venueBlock.classList.add('block');

    const venueLabel = document.createElement('div');
    venueLabel.classList.add('label');
    venueLabel.innerText= "VENUE";

    const venueValue = document.createElement('div');
    venueValue.classList.add('venue-value');
    venueValue.innerText = show.venue;

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