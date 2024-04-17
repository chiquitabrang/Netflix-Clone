const dropdownBtn = document.querySelector('.drop-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

document.addEventListener('click', function(event) {
  if (!event.target.matches('.drop-btn') && !event.target.closest('.dropdown-content')) {
    dropdownContent.classList.remove('show');
  }
});
