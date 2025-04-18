function showContent(section) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(function(content) {
      content.classList.add('hidden');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(function(tab) {
      tab.classList.remove('active');
    });

    // Show the selected content section
    document.getElementById(section).classList.remove('hidden');

    // Add active class to the clicked tab
    document.querySelector('.tab[onclick="showContent(\'' + section + '\')"]').classList.add('active');
  }

  // Initialize by showing the first tab content
  document.addEventListener('DOMContentLoaded', function() {
    showContent('requirements');
  });