
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let imgIndex = 3;
let img = document.getElementById('img');
let rightArrow = document.querySelector('.right');
let leftArrow = document.querySelector('.left');
// img.src='./images/3.jpg';
console.log(images.length)
let rightClick = function () {
    imgIndex += 1
    img.setAttribute('src', './images/' + images[imgIndex]);
    if (imgIndex === images.length - 1) {
        rightArrow.style.display = 'none';
    }
    leftArrow.style.display = 'block';
}

let leftClick = function () {
    imgIndex -= 1
    img.setAttribute('src', './images/' + images[imgIndex]);
    if (imgIndex === 0) {
        leftArrow.style.display = 'none';
    }
    rightArrow.style.display = 'block';
}
