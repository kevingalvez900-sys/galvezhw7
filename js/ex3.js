
document.querySelector('#sendBtn').addEventListener('click', () => {
  const myData = {
    name: 'Kevin Galvez',
    countries: [
      { name: 'Mexico', year: 2023 },
      { name: 'Japan', year: 2024 },
      { name: 'USA', year: 2022 }
    ]
  };

  fetch('https://thejsway-server.herokuapp.com/api/countries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(myData)
  })
    .then(response => response.text())
    .then(result => console.log('Server response:', result))
    .catch(error => console.error('Error sending data:', error));
});