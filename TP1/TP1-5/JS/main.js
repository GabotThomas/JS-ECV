window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll('p').forEach((element) => {
        element.parentNode.removeChild(element);
    });
});