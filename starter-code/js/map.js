const mymap = L.map('mapid')
    .fitBounds([
        [35.952, -83.9919],
        [29.897, -97.827],
    ]);

const popUpOne = L.popup({autoClose: false})
    .setLatLng([35.952, -83.9919])
    .setContent("<b>Main Office</b><br>1892 Chenoweth Drive, TN")
    .openOn(mymap);
const popUpTwo = L.popup({autoClose: false})
    .setLatLng([29.897, -97.827])
    .setContent("<b>Office II</b><br>3399 Wines Lane, TX")
    .openOn(mymap);

const mapPin = L.icon({
    iconUrl: '../assets/icons/map-pin.svg',
    iconSize: [28, 35],
    popupAnchor:  [0, -10],
})

const marker1 = L.marker([35.952, -83.9919], {icon: mapPin}).addTo(mymap).bindPopup(popUpOne).openPopup();
const marker2 = L.marker([29.897, -97.827], {icon: mapPin}).addTo(mymap).bindPopup(popUpTwo).openPopup();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmluZ20iLCJhIjoiY2tldmt5OG9uMGJjNjMxcDlnZjBzMmpvdyJ9.nQhXDm6RL5FkeBb5_2aWPA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmluZ20iLCJhIjoiY2tldmt5OG9uMGJjNjMxcDlnZjBzMmpvdyJ9.nQhXDm6RL5FkeBb5_2aWPA'
}).addTo(mymap);

const btnOne = document.querySelector('#mapBtnOne');
const btnTwo = document.querySelector('#mapBtnTwo');

btnOne.addEventListener('click', () => {
    mymap.setView([35.952, -83.9919], 12)
})

btnTwo.addEventListener('click', () => {
    mymap.setView([29.897, -97.827], 12);
})