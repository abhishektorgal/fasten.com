    // Add drag-and-scroll behavior
    const scrollableMenu = document.querySelector('.scrollable-menu');

    let isMouseDown = false;
    let startX;
    let scrollLeft;

    scrollableMenu.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - scrollableMenu.offsetLeft;
        scrollLeft = scrollableMenu.scrollLeft;
    });

    scrollableMenu.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });

    scrollableMenu.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    scrollableMenu.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - scrollableMenu.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the scrolling speed
        scrollableMenu.scrollLeft = scrollLeft - walk;
    });


    function openRichPage(audioSrc, imageSrc) {
        // Open a new window with rich.html
        const richPage = window.open('rich.html', '_blank');

        // When the new window is loaded, dynamically set the content
        richPage.onload = function () {
            const audioElement = richPage.document.getElementById('audio');
            const albumCover = richPage.document.getElementById('album-cover');

            // Set audio source and album cover image
            audioElement.src = audioSrc;
            albumCover.src = imageSrc;

            // Notify the parent window to update its content
            window.opener.location.reload();
        };
    }

    