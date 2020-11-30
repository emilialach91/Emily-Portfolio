import './styles/main.scss';
// import './style/reset/reset.css';

const button = document.querySelector('.hero__invitation');
const element = document.querySelector('.project');

button.addEventListener('click', function () {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});





