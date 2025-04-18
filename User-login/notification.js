
    document.querySelectorAll('.notification').forEach(notification => {
        notification.addEventListener('click', () => {
            const title = notification.querySelector('.notification-title').textContent;
            alert(`You clicked on: ${title}`);
            // You can add further actions here, like navigation or AJAX calls
        });
    });
