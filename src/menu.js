const menuInit = () => {
    const content = document.querySelector('#content');
    content.innerHTML+=`<div id='menuContent'>
                            <span id='menuTitle'>MOST POPULAR</span>
                            <div id='menuContainer'>
                                <img class='menuItem' src='./images/vanilla.png' alt='vanilla cone'>
                                <img class='menuItem' src='./images/chocolate.png' alt='chocolate cone'>
                                <img class='menuItem' src='./images/strawberry.png' alt='strawberry cone'>
                                <img class='menuItem' src='./images/cream.png' alt='cream'>
                                <img class='menuItem' src='./images/fudge.png' alt='fudge'>
                                <img class='menuItem' src='./images/cherry.png' alt='cherry'>
                            </div>
                        </div>`
};

export {menuInit}