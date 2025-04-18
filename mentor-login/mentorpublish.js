document.addEventListener('DOMContentLoaded', function () {
    const courseBuilder = document.getElementById('course-builder');
  
    // Add New Topic
    document.querySelector('.add-topic-btn').addEventListener('click', function () {
      const newTopicBox = document.createElement('div');
      newTopicBox.className = 'topic-box';
      newTopicBox.innerHTML = `
        <input type="text" value="New Topic" readonly>
        <div class="icon-buttons">
          <button><i class="bi bi-pencil"></i></button>
          <button><i class="bi bi-trash"></i></button>
        </div>
      `;
      courseBuilder.insertBefore(newTopicBox, this);
    });
  
    // Handle Edit and Delete Buttons
    courseBuilder.addEventListener('click', function (event) {
      if (event.target.closest('.bi-pencil')) {
        const input = event.target.closest('.topic-box').querySelector('input');
        input.removeAttribute('readonly');
        input.focus();
  
        // Reapply readonly on blur
        input.addEventListener('blur', function () {
          input.setAttribute('readonly', true);
        }, { once: true });
      } else if (event.target.closest('.bi-trash')) {
        const topicBox = event.target.closest('.topic-box');
        topicBox.remove();
      }
    });

    // Handle Badge Removal
    document.querySelectorAll('.bi-x-circle').forEach(function (icon) {
      icon.addEventListener('click', function () {
        this.closest('.badge').remove();
      });
    });

    // Handle Adding Badges
    const categoryInput = document.getElementById('category-input');
    categoryInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter' && categoryInput.value.trim() !== '') {
        event.preventDefault();
        const newBadge = document.createElement('span');
        newBadge.className = 'badge category-badge';
        newBadge.innerHTML = `${categoryInput.value.trim()} <i class="bi bi-x-circle ms-1"></i>`;
        document.querySelector('.category-tags').appendChild(newBadge);
        categoryInput.value = '';

        // Add event listener for the new badge's remove icon
        newBadge.querySelector('.bi-x-circle').addEventListener('click', function () {
          newBadge.remove();
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
