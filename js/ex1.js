
fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
  .then(response => response.json())
  .then(data => {
    const table = document.querySelector('#paintings');
    data.forEach(painting => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${painting.name}</td><td>${painting.year}</td><td>${painting.artist}</td>`;
      table.appendChild(row);
    });
  })
  .catch(error => console.error('Error loading paintings:', error));