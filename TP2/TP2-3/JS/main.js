
let imgs = document.querySelectorAll('img')

const handleImg = (index) => {
    if (index === 0) {
        resizeImg(0, 1)
    } else {
        resizeImg(1, 0)
    }
}

const resizeImg = (index1, index2) => {
    imgs[index1].style.width = imgs[index1].offsetWidth * 1.2 + 'px';
    imgs[index2].style.width = imgs[index2].offsetWidth * 0.8 + 'px';
}


