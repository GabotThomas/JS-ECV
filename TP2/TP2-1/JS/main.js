
let rotation = 0;

const handleImg = (element) => {
    rotation += 90;
    if (rotation == 360) {
        rotation = 0;
    }
    element.style.transform = `rotate(${rotation}deg)`;
}
