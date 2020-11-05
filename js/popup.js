function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(function(){
        document.getElementById('myPopup').style.display = 'none';
    }, 2000);
}