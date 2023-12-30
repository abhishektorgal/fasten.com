// Loader script
function initLoader() {
    // Hide preloader
    setTimeout(function () {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = 0;
            preloader.style.pointerEvents = 'none'; // Disable mouse events on the preloader
        }

        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.display = 'block';
        }
    }, 1000); // Adjust the time as needed
}