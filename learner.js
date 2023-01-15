
function sayHello() {
   var greet = document.getElementById("greeter");
   greet.textContent="Hello World";
   }

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "good evening";
} 
    if (hourNow > 12) {
        greeting = "good afternoon";
    } 
if (hourNow > 6) {
    greeting = "good morning";
}
 else {
    greeting = "welcome";
}
document.write("<h3>" + greeting + "</h3>");

var msg = "You cannot stop me now, already starting with the mark up";
function updatemessage() {
    var el = document.getElementById("javacodes");
    el.textContent = msg;
}
updatemessage();


//new function

var hotel = {
    names: 'fivestar',
    rooms: 40,
    booked: 13,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};
var elName = document.getElementById('hotelName');
elName.textContent = hotel.names;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();


//new function
var w = window.innerWidth;
var h = window.innerHeight;

var x = document.getElementById("demo");
x.innerHTML = "Browser width: " + w + ", height: " + h + "."; 
