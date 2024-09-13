import './index.css';
// import { data } from './data';

// window.addEventListener('DOMContentLoaded', function () {
//     const gridElements = document.querySelector('.elements-grid');

//     function createCard(item) {
//         const gridTemplate = document.querySelector('#template-grid').content;
//         const gridElement = gridTemplate.querySelector('.elements-grid__item').cloneNode(true);
//         const gridPhoto = gridElement.querySelector('.elements-grid__img');
    
//         gridPhoto.src = item.link;
//         gridPhoto.setAttribute('alt', item.name);
//         gridElement.querySelector('.elements-grid__name').textContent = item.name;
//         gridElement.querySelector('.elements-grid__date').textContent = item.date;
//         gridElement.querySelector('.elements-grid__price').textContent = item.price;
    
//         return gridElement;
//     }

//     function insertCard(parent, date, name, price, link) {
//         const card = createCard({date, name, price, link});
//         parent.prepend(card);
//     }

//     data.reverse().forEach((item) => {
//         insertCard(gridElements, item.date, item.name, item.price, item.link)
//     });
// })




