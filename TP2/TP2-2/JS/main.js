
const handleList = (element) => {
    const futureList = Array.from(document.querySelectorAll('li')).slice();
    const indexElement = futureList.indexOf(element);
    for (let i = indexElement - 1; i >= 0; i--) {
        futureList[i + 1] = futureList[i];
    }
    futureList[0] = element;
    const ul = document.querySelector('ul');
    futureList.forEach(li => ul.appendChild(li))
}
