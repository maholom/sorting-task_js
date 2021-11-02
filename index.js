'use strict';

const dinnerArray = [
  'Steve Guttenberg',
  'Daniel Stern',
  'Mickey Rourke',
  'Kevin Bacon',
  'Tim Daly',
  'Ellen Barkin',
  'Paul Reiser',
  'Kathryn Dowling',
  'Michael Tucker',
  'Jessica James',
  'Colette Blonigan',
  'Kelle Kipp',
  'Clement Fowler',
];

const footlooseArray = [
  'Kevin Bacon',
  'Lori Singer',
  'Dianne Wiest',
  'John Lithgow',
  'Sarah Jessica Parker',
  'Chris Penn',
  'Frances Lee McCain',
  'Jim Youngs',
  'John Laughlin',
  'Lynne Marta',
  'Douglas Dirkson',
];

const flatlinersArray = [
  'Kiefer Sutherland',
  'Julia Roberts',
  'Kevin Bacon',
  'William Baldwin',
  'Oliver Platt',
  'Kimberly Scott',
  'Joshua Rudoy',
  'Benjamin Mouton',
  'Hope Davis',
  'Patricia Belcher',
  'Beth Grant',
];

const eatPrayLoveArray = [
  'Julia Roberts',
  'Javier Bardem',
  'Billy Crudup',
  'Richard Jenkins',
  'Viola Davis',
  'James Franco',
  'Sophie Thompson',
  "Mike O 'Malley",
  'Christine Hakim',
  'Arlene Tur',
  'Hadi Subiyanto',
  'Gita Reddy',
  'Tuva Novotny',
  'Luca Argentero',
  'Rushita Singh',
];

const spotlightArray = [
  'Mark Ruffalo',
  'Michael Keaton',
  'Rachel McAdams',
  'Liev Schreiber',
  'John Slattery',
  "Brian d'Arcy James",
  'Stanley Tucci',
  'Gene Amoroso',
  'Jamey Sheridan',
  'Billy Crudup',
  'Maureen Keiller',
  'Richard Jenkins',
  'Paul Guilfoyle',
  'Len Cariou',
  'Neal Huff',
  'Michael Cyril Creighton',
  'Laurie Heineman',
  'Tim Progosh',
];
const movies = {
  Dinner: dinnerArray,
  Footloose: footlooseArray,
  Flatliners: flatlinersArray,
  EatPrayLove: eatPrayLoveArray,
  Spotlight: spotlightArray,
};
const results = {
  Dinner: '-> Kevin Bacon',
  Footloose: '-> Kevin Bacon',
  Flatliners: '-> Kevin Bacon',
  EatPrayLove: '-> Julia Roberts -> Flatliners -> Kevin Bacon',
  Spotlight:
    'Richard Jenkins -> Eat Pray Love -> Julia Roberts -> Flatliners -> Kevin Bacon',
};

const update = (event) => {
  const select = document.getElementById('select-stars');
  let optionValue = select.value;

  const movieName = Object.keys(movies).find((key) => {
    return movies[key].includes(optionValue);
  });
  document.getElementById('search-answer').innerHTML =
    movieName + results[movieName];
};
const btn = document.getElementById('progress-button');
btn.addEventListener('click', update);
