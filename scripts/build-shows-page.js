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

    const dateLabel = document.createElement('div');
    dateLabel.classList.add('label');
    dateLabel.innerText = "DATE";

    const dateValue = document.createElement('div');
    dateValue.classList.add('date-value');
    dateValue.innerText = show.date;

    const venueLabel = document.createElement('div');
    venueLabel.classList.add('label');
    venueLabel.innerText= "VENUE";

    const venueValue = document.createElement('div');
    venueValue.classList.add('venue-value');
    venueValue.innerText = show.venue;

    const locationLabel = document.createElement('div');
    locationLabel.classList.add('label');
    locationLabel.innerText = "LOCATION";

    const locationValue = document.createElement('div');
    locationValue.classList.add('location-value');
    locationValue.innerText = show.location;

    const button = document.createElement('button');
    button.classList.add('button');
    button.innerText = "BUY TICKETS";

    const dividerLine = document.createElement('div');
    dividerLine.classList.add('divider');



    showContainer.appendChild(dateLabel);
    showContainer.appendChild(dateValue);
    showContainer.appendChild(venueLabel);
    showContainer.appendChild(venueValue);
    showContainer.appendChild(locationLabel);
    showContainer.appendChild(locationValue);
    showContainer.appendChild(button);
    showContainer.appendChild(dividerLine);

    getShows.appendChild(showContainer);

});