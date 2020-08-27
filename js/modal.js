var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn_side = document.getElementById("myBtn_side");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

close.onclick = function () {
    modal.style.display = "none";
};

btn_side.onclick = function () {
    modal.style.display = "block";
};

window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
