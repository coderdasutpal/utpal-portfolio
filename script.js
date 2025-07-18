// Sample script to handle contact form submit
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted (placeholder)');
  });
});
