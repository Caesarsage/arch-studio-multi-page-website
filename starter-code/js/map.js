const mymap = L.map('mapid', {
        scrollWheelZoom: false,
    }).fitBounds([
    [35.952, -83.9919],
    [29.897, -97.827],
]);

const marker1 = L.marker([35.952, -83.9919]).addTo(mymap).bindPopup("<b>Main Office</b><br>1892 Chenoweth Drive, TN").openPopup();
const marker2 = L.marker([29.897, -97.827]).addTo(mymap).bindPopup("<b>Office II</b><br>3399 Wines Lane, TX");

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmluZ20iLCJhIjoiY2tldmt5OG9uMGJjNjMxcDlnZjBzMmpvdyJ9.nQhXDm6RL5FkeBb5_2aWPA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmluZ20iLCJhIjoiY2tldmt5OG9uMGJjNjMxcDlnZjBzMmpvdyJ9.nQhXDm6RL5FkeBb5_2aWPA'
}).addTo(mymap);
