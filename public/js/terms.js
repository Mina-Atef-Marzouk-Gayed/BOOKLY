const acceptButton = document.getElementById('acceptButton');
const termsCheckbox = document.getElementById('termsCheckbox');

// Close the tab when the user clicks "Accept"
acceptButton.addEventListener('click', () => {
    window.close();
});