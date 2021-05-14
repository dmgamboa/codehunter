"use strict";

var LocationsList = document.querySelector("locationsList");

const renderHistoryList = (list) => {
    LocationsList.innerHTML = "";
    list.map(item => {
        const {name, date, points} = item;
        const location = document.createElement("div");
        location.setAttribute("class", "location");
        location.innerHTML = `
            <p>
                <span class="location-name">${name}</span>
                <span class="location-date">${date}</span>
                <span class="location-points">${points}</span>
            <p>
        `;
        LocationsList.appendChild(location);

    });
    
}

//user axios here