window.addEventListener("DOMContentLoaded", (event) => {

    let elemDiv = document.createElement('div');
    elemDiv.setAttribute("style",
        "background-color:#621ABE;width:100%;height:300px;"
    );
    document.body.insertBefore(elemDiv, document.body.querySelector('script'));
    document.body.querySelector('div').innerHTML += '<h1 style="color:#fff;text-transform:uppercase">Titre</h1>'

});