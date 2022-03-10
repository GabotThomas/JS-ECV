
const imgs = document.querySelectorAll('img');
imgs.forEach(imgZoom => {
    imgZoom.addEventListener('mouseenter', (event) => {
        let target = event.target.parentNode;
        let div = document.createElement('div');
        div.classList.add('test');
        target.appendChild(div)
    })

    imgZoom.addEventListener("mouseleave", (event) => {
        let target = event.target;
        /*target.removeChild(target.querySelector('.zoom'))*/
    })
})




