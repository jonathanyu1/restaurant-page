(()=>{"use strict";console.log("test setup"),(()=>{document.querySelector("#content").innerHTML+="<header>\n                            <h1 class='restaurantName'>Lactose King</h1>\n                            <ul class='navBarBtns'>\n                                <li><button id='homeBtn' class='navBtn'>Home</button></li>\n                                <li><button id='menuBtn' class='navBtn'>Menu</button></li>\n                                <li><button id='contactBtn' class='navBtn'>Contact Us</button></li>\n                            </ul>\n                        </header>\n                        <div id='homeContent'>\n                            <div id='homeMessage'>\n                                <div id='homeMessageText'>The best ice cream in town!</div>\n                            </div>\n                            <div id='homeInfo'>\n                                <div id='address'>\n                                    <i class='material-icons'>location_on</i>\n                                    <span id='addressText'>1600 Amphitheatre Parkway</span>\n                                </div>\n                                <div id='hours'>\n                                    <i class='material-icons'>access_time</i>\n                                    <div id='hoursText'>\n                                        <span>Monday-Friday: 11am-8pm</span>\n                                        <span>Saturday-Sunday: 12pm-8pm</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>";const n=document.querySelector("#content"),e=document.querySelector("#homeBtn"),t=document.querySelector("#menuBtn"),i=document.querySelector("#contactBtn"),a=document.querySelector("#homeContent");e.addEventListener("click",(()=>{n.style.background="url('./images/icecream.jpg') no-repeat fixed center",n.style.backgroundSize="cover",a.classList.remove("hideContent")})),t.addEventListener("click",(()=>{a.classList.add("hideContent"),n.style.background="url(./images/menuBg.jpg)"})),i.addEventListener("click",(()=>{}))})()})();