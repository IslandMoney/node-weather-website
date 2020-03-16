console.log("JS Loaded");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

message1.textContent = '';
message2.textContent = '';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    message1.textContent = 'Loading...';
    message2.textContent = '';

    const location = search.value;
    const fetchUrl = '/weather?address=' + location;

    fetch(fetchUrl).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error;
            } else {
                message1.textContent = data.location;
                message2.textContent = data.forecast;
            }
        })
    })
})