import {siteInit} from './siteInit';

const siteFlow = (()=>{
    // initialize site homepage
    siteInit();
    // const content = document.querySelector('#content');
    const bodyContainer = document.querySelector('.bodyContainer');
    const homeBtn =  document.querySelector('#homeBtn');
    const menuBtn = document.querySelector('#menuBtn');
    const contactBtn = document.querySelector('#contactBtn');
    const homeContent = document.querySelector('#homeContent');
    const menuContent = document.querySelector('#menuContent');
    const contactContent = document.querySelector('#contactContent');
    // hide menu and contact initially
    menuContent.classList.add('hideContent');
    contactContent.classList.add('hideContent');

    homeBtn.addEventListener('click', () => {
        homeContent.classList.remove('hideContent');
        menuContent.classList.add('hideContent');
        contactContent.classList.add('hideContent');
        bodyContainer.style.background = `url('./images/icecream.jpg') no-repeat fixed center`;
        bodyContainer.style.backgroundSize = `cover`;
    });
    menuBtn.addEventListener('click', () => {
        // set display: none to 'home' and 'contact' dom elements, remove from menu
        homeContent.classList.add('hideContent');
        contactContent.classList.add('hideContent');
        menuContent.classList.remove('hideContent');
        // set bg image to one for Menu
        bodyContainer.style.background = `url(./images/pinkMenuBg.png) no-repeat fixed center`;
        bodyContainer.style.backgroundSize = `cover`;
    });
    contactBtn.addEventListener('click', () => {
        homeContent.classList.add('hideContent');
        menuContent.classList.add('hideContent');
        contactContent.classList.remove('hideContent');
        bodyContainer.style.background = `url(./images/pinkMenuBg.png) no-repeat fixed center`;
        bodyContainer.style.backgroundSize = `cover`;
    });
})();

//37.42240404764914, -122.0838223363647 lat long