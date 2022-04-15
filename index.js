const hamburger = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-menu');
const mobileMenu = document.querySelector('.hidden');

hamburger.addEventListener('click', () => {
  mobileMenu.style = 'display: flex; z-index:0';
  hamburger.style = 'display: none';
  document.querySelector('body').style = 'overflow: hidden';
  document.querySelector('.campaign').style = 'display: none';
});

closeButton.addEventListener('click', () => {
  mobileMenu.style = 'display: none';
  hamburger.style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('.campaign').style = 'display: flex';
});

const speakerList = [{
  id: 1,
  image: './assests/Lewis_Hamilton.png',
  name: 'Lewis Hamilton',
  description: 'Motorsports racing driver',
  comment: 'In Formula One, Hamilton has won a joint-record seven World Drivers\' Championship titles.',
},
{
  id: 2,
  image: './assests/elon-musk.png',
  name: 'Elon Musk',
  description: 'entrepreneur, and investor',
  comment: 'He is the founder, CEO, and Chief Engineer at SpaceX, early-stage investor, CEO, and Product Architect of Tesla.',
},
{
  id: 3,
  image: './assests/edris-alba.png',
  name: 'Edris Alba',
  description: 'Actor, producer, and musician',
  comment: 'He is known for roles including Stringer Bell in the HBO series The Wire, DCI John Luther in the BBC One series Luther.',
},
{
  id: 4,
  image: './assests/Chadwick-Boseman.png',
  name: 'Chadwick Boseman',
  description: 'Actor, and playwright',
  comment: 'American actor and playwright. After studying directing at Howard University, he began working consistently as a writer, director',
},
{
  id: 5,
  image: './assests/Professor.png',
  name: 'Álvaro Morte',
  description: 'Actor',
  comment: 'Morte began his acting career when he played a minor role in the Spanish television series Hospital Central.',
},
{
  id: 6,
  image: './assests/evan-spiegel.png',
  name: 'Evan Spiegel',
  description: 'Founder Of SnapChat app',
  comment: 'He is the co-founder and CEO of the American social media company Snap Inc.',
},
];

/* Speakers card Section */

const cardsContainer = document.querySelector('.card-speakers-container');

const cards = () => {
  for (let i = 0; i < speakerList.length; i += 1) {
    cardsContainer.innerHTML += `
    <div class="card-speakers flex">
        <img class="card-img-speakers" src="${speakerList[i].image}" alt="${speakerList[i].name}" />
        <div class="card-items-speakers">
            <h3 class="card-title-speakers">${speakerList[i].name}</h3>
            <h5>${speakerList[i].description}</h5>
            <hr/>
            <p class="card-descrip-speakers">${speakerList[i].comment}</p>
        </div>
    </div>`;
  }
};

cards();