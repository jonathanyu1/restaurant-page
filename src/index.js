console.log('test setup');
import {siteInit} from './siteInit';

const siteFlow = (()=>{
    // initialize site homepage
    siteInit();
    const content = document.querySelector('#content');
    const homeBtn =  document.querySelector('#homeBtn');
    const menuBtn = document.querySelector('#menuBtn');
    const contactBtn = document.querySelector('#contactBtn');
    const homeContent = document.querySelector('#homeContent');
    homeBtn.addEventListener('click', () => {
        content.style.background = `url('./images/icecream.jpg') no-repeat fixed center`;
        content.style.backgroundSize = `cover`;
        homeContent.classList.remove('hideContent');
    });
    menuBtn.addEventListener('click', () => {
        // set display: none to 'home' and 'contact' dom elements, remove from menu
        homeContent.classList.add('hideContent');
        // contactContent.classList.add('hideContent');
        // menuContent.classList.remove('hideContent');
        // set bg image to one for Menu
        content.style.background = `url(./images/menuBg.jpg)`;
    });
    contactBtn.addEventListener('click', () => {
        
    });
})();
