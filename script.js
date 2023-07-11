"use strict";

const wrapperElement = $('#card');
const searchPokemon = $('.pakemon-search');
const selectWrapper = $('.selectiku');
const letterSelector = $('.sortingku');


let allPokemons = pokemons.map((pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.img,
    type: pokemon.type,
    weight: pokemon.weight,
    height: pokemon.height,
  };
});


// function renderAllMovies(data)
// {
//     if (data.length)
//     {
//         data.forEach((e)=>
//         {

//         })
//     }
// }
// renderAllMovies(allMovies)

const div=createElement('div',"hello world nimadur")
console.log(div)




let ATOZ = allPokemons.sort((prevElement, nextElement) => {
  return prevElement.name.localeCompare(nextElement.name);
});

let ZATO = [...ATOZ].reverse()

let collectingSelections = [];


renderingPokemons(allPokemons, wrapperElement);
sortingSelectingPokemons(allPokemons);
createSelectItems(collectingSelections, selectWrapper);

function renderingPokemons(pokemonsArray, wrapperElement) {
  pokemonsArray.forEach((pokemon) => {
    const content = `
      <div class="card-img text-center">
        <img src="${pokemon.image}" class="img-fluid" alt="img" width="157px "height="157px">
      </div>
      <span class="line"></span>
      <div class="card-body">
        <div class="card-like"> 
          <i class="fa-regular fa-heart"></i>
        </div>
        <div class="card-title">
          <p>${pokemon.name}</p>
        </div>
        <div class="card-category">
          <p>${pokemon.type}</p>
        </div>
        <div class="card-info">
          <div class="d-flex">
            <h5 class="card-info-kg">${pokemon.weight}</h5>
            <h5 class="card-info-age">${pokemon.height} height</h5>                                   
          </div>                              
        </div>
      </div>
   `;
    const createdElement = createElement(
      'div',
      'card col-lg-3 col-md-6 col-sm-12 mr-1',
      content
    );
    wrapperElement.appendChild(createdElement);
  });
}

function createSelectItems(selectArray, wrapperElement) {
  selectArray.forEach((select) => {
    const createdSelectElement = createElement('option', 'option', select);
    wrapperElement.appendChild(createdSelectElement);
  });
}

function sortingSelectingPokemons(pokemons) {
  return pokemons.map((pokemon) => {
    pokemon.type.forEach((type) => {
      if (!collectingSelections.find((element) => element == type)) {
        collectingSelections.push(type);
        collectingSelections.sort();
      }
    });
  });
}

searchPokemon.addEventListener('input', (searchPokemon) => {
  const searchByName = searchPokemon.target.value.trim().toLowerCase();
  wrapperElement.innerHTML = null;
  const filteredFilmsByType = allPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchByName);
  });
  renderingPokemons(filteredFilmsByType, wrapperElement);
});

selectWrapper.addEventListener('input', () => {
  const selectValue = selectWrapper.value;

  wrapperElement.innerHTML = null;
  const filteredBySelecting = allPokemons.filter((pokemon) => {
    return pokemon.type.includes(selectValue);
  });

  selectValue == 'All'
    ? renderingPokemons(allPokemons, wrapperElement)
    : renderingPokemons(filteredBySelecting, wrapperElement);
});

letterSelector.addEventListener('change', () => {
  if (letterSelector.value === 'A-Z') {
    wrapperElement.innerHTML = null;
    renderingPokemons(ATOZ, wrapperElement);
  }else{
    wrapperElement.innerHTML = null;
    renderingPokemons(ZATO, wrapperElement)
  }
});



