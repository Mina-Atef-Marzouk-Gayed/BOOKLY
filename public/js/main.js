const productContainers = [...document.querySelectorAll('.booksBestSeller')];
const nxtBtn = [...document.querySelectorAll('.scroll-button-right')];
const preBtn = [...document.querySelectorAll('.scroll-button-left')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})