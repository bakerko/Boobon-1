
function openbox(id,toggler){
    let visibility = document.getElementById(id).style.visibility;

    if(visibility=='hidden'){
        document.getElementById(id).style.visibility='visible';
    }else{
        document.getElementById(id).style.visibility='hidden';
    }
}
