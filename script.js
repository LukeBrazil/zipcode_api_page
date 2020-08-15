// Listen for submit
document.querySelector('#zipForm').addEventListener('submit', getLocationInfo);

function getLocationInfo(e) {
    // Get zip value from input
    const zip = document.querySelector('.zip').value;
    // Make request
    fetch(`http://api.zippopotam.us/us/${zip}`)
        .then(response => {
            if (response.status != 200) {

                document.querySelector('#output').innerHTML =
                    `
                    <article class='message is-danger'> <div class='message-body'> Invalid Zipcode please try again!</div></article>
                `;
                throw Error(response.statusText)
            } else {

                return response.json();
            }
        })
        .then(data => {
            // show location info
            var output = ''
            data.places.forEach(place => {
                output += `
                <article class="message is-primary">
                <div class="message-header">
                    <p>Location Info</p>
                    <button class="delete"></button>
                </div>
                <div class="message-body">
                    <ul>
                        <li>City: <strong>${place['place name']}</strong></li>
                        <li>State: <strong>${place['state']}</strong></li>
                        <li>Longitude: <strong>${place['longitude']}</strong></li>
                        <li>Latitude: <strong>${place['latitude']}</strong></li>
                    </ul>
                </div>
            </article>
                `;
            })
            // insert into output div
            document.querySelector('#output').innerHTML = output;
        })
        .catch(err => console.log(err))
    e.preventDefault();

}