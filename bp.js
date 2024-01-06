console.dir(document);

console.dir(document);
/* Lets connect button click event*/
var sign_up = document.querySelector('.field_form');
var lets_connect = document.querySelector('.connect');
var close_menu = document.querySelector('.close');
var back = document.querySelector('.entire_page');

lets_connect.addEventListener('click', show);
close_menu.addEventListener('click', close);

function show() {
    sign_up.style.display = 'block';  
    sign_up.style.left = '1';
    back.style.opacity = '0.9';
    toggle_off = 'disable';
}
function close () {
    sign_up.style.display = 'none';
    back.style.opacity = '1';
}

window.onclick = function(event) {
    if (event.current == 'show') {
        sign_up.style.display = 'none';
        back.style.opacity = '1';
    }
}


/*Top corner click event*/
var service = document.querySelector('.services');
var toggle_off = document.querySelector('.openMenu');
var toggle_on = document.querySelector('.closeMenu');

var s_p1 = document.querySelector('.second_phase');
var s_p2 = document.querySelector('.top');

var s_p3 = document.querySelector('.box');
var s_p4 = document.querySelector('.type_of_services');
var s_p5 = document.getElementById('.my-video');
var s_p6 = document.querySelector('.bye_msg');
var s_p7 = document.querySelector('.byee_msg');
var s_p8 = document.querySelector('.my_vid');
var s_p9 = document.querySelector('CTA');

var main = document.querySelector('.main_heading');
var subtext = document.querySelector('.smallmsg');

/*event listeners for top corner*/
toggle_off.addEventListener('click', show_services);
toggle_on.addEventListener('click', close_service);


function show_services() {
    main.style.color = 'rgb(95,158,160)';
    subtext.style.color = 'rgb(95,158,160)';
    service.style.display = 'block';
    toggle_off.style.display = 'none';
    toggle_on.style.display = 'block';
    s_p1.style.background = 'none';
    s_p2.style.background = 'none';
    s_p3.style.display = 'none';
    s_p4.style.display = 'none';
    s_p5.style.display = 'none';
    s_p6.style.display = 'none';
    s_p7.style.display = 'none';
    s_p9.style.display = 'none';
}

function close_service() {
    service.style.display = 'none';
    toggle_off.style.display = 'block';
    toggle_on.style.display = 'none';

    s_p1.style.background = 'rgb(255,215,0)';
    s_p1.style.background = 'linear-gradient(0deg, rgba(255,215,0,1) 20%, rgba(28,27,3,1) 89%)';
    s_p2.style.background = 'rgb(255,215,0)';
    s_p2.style.background = 'linear-gradient(0deg, rgba(255,215,0,1) 20%, rgba(28,27,3,1) 89%)';
    s_p3.style.display = 'flex';
    s_p1.style.display = 'block';
    main.style.color = 'rgb(255,255,255)';
    subtext.style.color = 'rgb(0,0,0)';


} 
/*end of switch button*/



