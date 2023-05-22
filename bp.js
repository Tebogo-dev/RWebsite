console.dir(document);

var sign_up = document.querySelector('.field_form');
var lets_connect = document.querySelector('.connect');
var close_menu = document.querySelector('.close');
var background = document.querySelector('.entire_page');


lets_connect.addEventListener('click', show);
close_menu.addEventListener('click', close);

function show () {
    sign_up.style.display = 'block';
    sign_up.style.left = '1';
    background.style.opacity = '0.3';
}
function close () {
    sign_up.style.display = 'none';
    background.style.opacity = '1';
    
}
window.onclick = function(event) {
    if (event.target == sign_up) {
      sign_up.style.display = 'none'; 
    }
}

var switch_page = document.getElementsByClassName('.material-symbols-outlined');
var services = document.querySelector('.services');
var content1 = document.querySelector('.dropped_content');

switch_page.addEventListener('click', show_services);


function show_services () {
    switch_page.style.display = 'block';
    services.style.display = 'block';
    content1.style.display = 'block';
    
}

