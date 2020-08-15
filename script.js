// Listen for submit
document.querySelector('#zipForm').addEventListener('submit', getLocationInfo);

function getLocationInfo(e) {
    console.log(123);

    e.preventDefault();
}