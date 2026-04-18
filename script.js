document.addEventListener('DOMContentLoaded', () => {
  const services = ['Consulting', 'Design', 'Development'];
  const ul = document.getElementById('services');
  services.forEach(service => {
    const li = document.createElement('li');
    li.textContent = service;
    ul.appendChild(li);
  });
});   
