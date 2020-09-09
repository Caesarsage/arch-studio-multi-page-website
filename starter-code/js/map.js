
const mymap = L.map('mapid').setView([51.505, -0.09], 13);
const marker = L.marker([51.5, -0.09]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmluZ20iLCJhIjoiY2tldmt5OG9uMGJjNjMxcDlnZjBzMmpvdyJ9.nQhXDm6RL5FkeBb5_2aWPA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmluZ20iLCJhIjoiY2tldmt5OG9uMGJjNjMxcDlnZjBzMmpvdyJ9.nQhXDm6RL5FkeBb5_2aWPA'
}).addTo(mymap);