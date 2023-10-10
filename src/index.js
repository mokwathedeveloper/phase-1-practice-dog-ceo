console.log('%c HI', 'color: firebrick')
// index.js

document.addEventListener('DOMContentLoaded', function () {
    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imageContainer.appendChild(imgElement);
        });
      })
      .catch(error => {
        console.error('Error fetching dog images:', error);
      });
  
    // Challenge 2
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('dog-breeds');
        Object.keys(data.message).forEach(breed => {
          const liElement = document.createElement('li');
          liElement.textContent = breed;
          breedList.appendChild(liElement);
        });
      })
      .catch(error => {
        console.error('Error fetching dog breeds:', error);
      });
  
    // Challenge 3
    document.getElementById('dog-breeds').addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'red'; // Change the color to red (or a color of your choosing)
      }
    });
  
    // Challenge 4
    const filterDropdown = document.getElementById('breed-dropdown');
    filterDropdown.addEventListener('change', function () {
      const selectedLetter = filterDropdown.value.toLowerCase();
  
      Array.from(document.getElementById('dog-breeds').children).forEach(liElement => {
        const breedName = liElement.textContent.toLowerCase();
  
        if (breedName.startsWith(selectedLetter)) {
          liElement.style.display = 'list-item';
        } else {
          liElement.style.display = 'none';
        }
      });
    });
  });
  