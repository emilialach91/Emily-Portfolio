import './styles/main.scss';


const button = document.querySelector('.hero__invitation');
const element = document.querySelector('.project__organizer');

button.addEventListener('click', function () {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});





