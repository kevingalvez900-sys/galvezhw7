
document.querySelector('#fetchBtn').addEventListener('click', () => {
  const user = document.querySelector('#username').value.trim();
  if (!user) return;

  fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#avatar').innerHTML = `<img src="${data.avatar_url}" alt="Avatar" width="120">`;
      const table = document.querySelector('#profile');
      table.innerHTML = '<tr><th>Name</th><th>Blog</th><th>Created At</th></tr>';
      const row = document.createElement('tr');
      row.innerHTML = `<td>${data.name || 'N/A'}</td><td>${data.blog || 'N/A'}</td><td>${data.created_at}</td>`;
      table.appendChild(row);
    })
    .catch(error => console.error('Error fetching profile:', error));
});