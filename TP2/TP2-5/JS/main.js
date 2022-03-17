
const imgs = document.querySelectorAll('.img-zoom');
imgs.forEach(imgZoom => {

    let div = document.createElement('div');
    div.classList.add('zoom');
    imgZoom.parentNode.appendChild(div);
    div.style.backgroundImage = `url(${imgZoom})`
    imgZoom.addEventListener('mouseover', (event) => {
        event.preventDefault();
        let target = event.target;
        div.style.display = 'block'
        /*
        let div = document.createElement('div');
        div.classList.add('zoom');
        target.appendChild(div)*/
        console.log('t')
    })

    imgZoom.addEventListener("mouseleave", (event) => {
        /*
        event.preventDefault();
        let target = event.target.parentNode;
        target.removeChild(target.querySelector('.zoom'))*/
        div.style.display = 'none'
    })
})




