
const form = document.querySelector('#infoForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const table = document.querySelector('#output');
  table.innerHTML = '<tr><th>Key</th><th>Value</th></tr>';
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${key}</td><td>${value}</td>`;
    table.appendChild(row);
  }
});