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


    