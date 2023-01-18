console.dir(document);

var sign_up = document.querySelector('.field_form');
var lets_connect = document.querySelector('.connect');
var close_menu = document.querySelector('.close');
var background = document.querySelector('.entire_page')

lets_connect.addEventListener('click', show);
close_menu.addEventListener('click', close);

function show () {
    sign_up.style.display = 'block';
    sign_up.style.left = '1';
    background.style.opacity = '0.3'
}
function close () {
    sign_up.style.display = 'none';
    background.style.opacity = '1'
    
}
window.onclick = function(event) {
    if (event.target == sign_up) {
      sign_up.style.display = 'none';
    }
}
