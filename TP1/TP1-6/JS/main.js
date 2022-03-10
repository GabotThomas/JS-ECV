window.addEventListener("DOMContentLoaded", (event) => {

    let elemLi = document.createElement('li');
    elemLi.innerText = "Turlututu";
    let elemUl = document.getElementsByTagName('ul')[0];
    elemUl.replaceChild(elemLi, elemUl.children[1])

});