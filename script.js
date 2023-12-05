// script.js
document.addEventListener('DOMContentLoaded', () => {
	const fetchDataButton = document.getElementById('fetch-data');
	const dogDataContainer = document.getElementById('dog-data');
  
	fetchDataButton.addEventListener('click', fetchData);
  
	function fetchData() {
	  const apiUrl = 'https://api.thedogapi.com/v1/breeds';
  
	  fetch(apiUrl)
		.then(response => {
		  if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		  }
		  return response.json();
		})
		.then(data => {
		  const randomBreed = data[Math.floor(Math.random() * data.length)];
		  console.log('API Response:', randomBreed);
		  dogDataContainer.innerHTML = `
			<p><strong>Breed:</strong> ${randomBreed.name}</p>
			<p><strong>Temperament:</strong> ${randomBreed.temperament}</p>
		  `;
		})
		.catch(error => console.error('Error fetching data:', error));
	}
  });
  