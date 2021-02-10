const siteInit = () => {
    const content = document.querySelector('#content');
    content.innerHTML+=`<header>
                            <h1 class='restaurantName'>Lactose King</h1>
                            <ul class='navBarBtns'>
                                <li><button id='homeBtn' class='navBtn'>Home</button></li>
                                <li><button id='menuBtn' class='navBtn'>Menu</button></li>
                                <li><button id='contactBtn' class='navBtn'>Contact Us</button></li>
                            </ul>
                        </header>
                        <div id='homeContent'>
                            <div id='homeMessage'>
                                <div id='homeMessageText'>The best ice cream in town!</div>
                            </div>
                            <div id='homeInfo'>
                                <div id='address'>
                                    <i class='material-icons'>location_on</i>
                                    <span id='addressText'>1600 Amphitheatre Parkway</span>
                                </div>
                                <div id='hours'>
                                    <i class='material-icons'>access_time</i>
                                    <div id='hoursText'>
                                        <span>Monday-Friday: 11am-8pm</span>
                                        <span>Saturday-Sunday: 12pm-8pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
};

export {siteInit}