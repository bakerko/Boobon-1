var chatWindow = document.getElementById("myChat");
var chat = document.getElementById("myBtn_chat");
var close = document.getElementsByClassName("close_left")[0];

chat.onclick = function () {
    chatWindow.style.display = "block";
};

close.onclick = function () {
    chatWindow.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == chatWindow) {
        chatWindow.style.display = "none";
    }
};
