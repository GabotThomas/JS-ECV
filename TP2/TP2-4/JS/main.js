
const cube = document.querySelector('div');

//init and center cube
let x = -cube.offsetWidth / 2;
let y = -cube.offsetHeight / 2;
cube.style.transform = `translate(${x}px, ${y}px)`;

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowRight':
            x += 20;
            break;
        case 'ArrowLeft':
            x -= 20;
            break;
        case 'ArrowUp':
            y -= 20;
            break;
        case 'ArrowDown':
            y += 20;
            break;
    }
    cube.style.transform = `translate(${x}px, ${y}px)`;
});