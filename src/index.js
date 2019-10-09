console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {

   let dropDown = document.getElementById('breed-dropdown');
   dropDown.addEventListener('change', function(){
       fetchBreeds();
   })
  })

function fetchDogs(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderDogs(json));
}

function renderDogs(json){
    let dogContainer = document.getElementById('dog-image-container');
    json.message.forEach(dog =>{
        let dogItem = document.createElement('img');
        dogItem.src = `${dog}`
        dogContainer.appendChild(dogItem)
    })
}
  
function fetchBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json){
    let breedList = document.getElementById('dog-breeds');
    while (breedList.firstChild) {
        breedList.firstChild.remove();
    }
    let dropDownLetter = document.getElementById('breed-dropdown').value
    for(const breed in json.message){
        if (breed[0] === dropDownLetter){
            let dogBreedLi = document.createElement('li');
            dogBreedLi.innerText = `${breed}`
            breedList.addEventListener('click', function(event){
            if (event.target.tagName === "LI"){
                event.target.style.color = "red"
            }
        });
        breedList.appendChild(dogBreedLi)
    }
    }
    fetchDogs()
}