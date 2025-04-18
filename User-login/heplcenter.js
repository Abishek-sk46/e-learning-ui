function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    const allFaqItems = document.querySelectorAll('.faq-item');

    allFaqItems.forEach(item => item.classList.remove('active'));

    if (!isActive) {
        faqItem.classList.add('active');
    }
}

function showFaq(category) {
    const faqItems = document.querySelectorAll('.faq-item');
    const buttons = document.querySelectorAll('.filter-section button');

    buttons.forEach(button => button.classList.remove('active'));

    if (category === 'all') {
        faqItems.forEach(item => item.style.display = 'block');
        document.querySelector('.filter-section button:nth-child(1)').classList.add('active');
    } else {
        faqItems.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        document.querySelector(`.filter-section button:nth-child(${['all', 'courses', 'accounts', 'payments', 'services', 'general', 'contact'].indexOf(category) + 1})`).classList.add('active');
    }
}
