console.dir(document);
var field_show = document.querySelector(".field");
var sign_up = document.querySelector(".connect_link");
var lets_connect = document.getElementsByClassName(".connect");
var close_menu = document.getElementsByClassName(".close");

lets_connect.addEventListener("click",show);
close_menu.addEventListener("click", close);

lets_connect = function () {
    field_show.style.display = "block";
}
close_menu = function () {
    field_show.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == sign_up) {
      sign_up.style.display = "none";
    }
}
