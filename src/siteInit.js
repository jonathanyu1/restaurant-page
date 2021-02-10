import {homeInit} from './home';
import {menuInit} from './menu';
import {contactInit} from './contact';

const siteInit = () => {
    homeInit();
    menuInit();
    contactInit();
};

export {siteInit}