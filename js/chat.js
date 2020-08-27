var chat_window = document.getElementById("myChat");
var chat = document.getElementById("myBtn_chat");
var close = document.getElementsByClassName("close")[0];

chat.onclick = function () {
    chat_window.style.display = "block";
};

close.onclick = function () {
    chat_window.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == chat_window) {
        chat_window.style.display = "none";
    }
};
