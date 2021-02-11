const contactInit = () => {
    const content = document.querySelector('#content');
    content.innerHTML+=`<div id='contactContent'>
                            <div id='contactTitle'>Contact Us</div>
                            <div id='contactContainer'>
                                <div id='mapContainer'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6266947437825!2d-122.08633288404384!3d37.42229754013184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb1e33f598055%3A0x3b6b7f127aacf96!2s1600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2sca!4v1612999192057!5m2!1sen!2sca" width="570" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                                <div id='infoContainer'>
                                    <div class='address'>
                                        <i class='material-icons'>location_on</i>
                                        <span id='addressText'>1600 Amphitheatre Parkway</span>
                                    </div>
                                    <div class='hours'>
                                        <i class='material-icons'>access_time</i>
                                        <div id='hoursText'>
                                            <span>Monday-Friday: 11am-8pm</span>
                                            <span>Saturday-Sunday: 12pm-8pm</span>
                                        </div>
                                    </div>
                                    <div class='phone'>
                                        <i class='material-icons'>phone</i>
                                        <span id='phoneNumber'>1-866-246-6453</span>
                                    </div>
                                    <div class='email'>
                                        <i class='material-icons'>email</i>
                                        <span id='emailText'>lactoseking@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
};

export {contactInit}