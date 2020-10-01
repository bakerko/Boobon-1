
function openbox(id,toggler){
    let visibility = document.getElementById(id).style.visibility;

    if(visibility==='hidden'){
        document.getElementById(id).style.visibility='visible';
    }else{
        document.getElementById(id).style.visibility='hidden';
    }
}

function showBox(id) {
    let display = document.getElementById(id).style.display;
    if (display==='none') {
        document.getElementById(id).style.display='block';
    }else {
        document.getElementById(id).style.display='none';
    }
}