const carousel = document.querySelector(".carousel");

let isDragged = false;

const dragStart = () => {
    isDragged = true;
}

const dragStop = () => {
    isDragged = false;
    carousel.style.paddingLeft = "0px";
}

const dragging = (e) => {
    if(!isDragged) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;
    carousel.style.paddingLeft = "224px";
}

if(window.innerWidth < 768) {
    carousel.addEventListener("mousedown", isDragged = true);
    carousel.addEventListener("touchstart", isDragged = true);

    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging)

    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("touchend", dragStop)
}

//Change image on hover in slider:
const dir = window.location.href.split("/");

const sliderImgs = document.querySelectorAll(".slider-img");

for(let i = sliderImgs.length - 1; i >= 0; i--) {
    if(dir[dir.length - 1] !== "index.html") {
        sliderImgs[sliderImgs.length - i - 1].style.backgroundImage = `url(../../images/slider-imgs/slider-img-${i}.png)`;
    } else {
        sliderImgs[sliderImgs.length - i - 1].style.backgroundImage = `url(./images/slider-imgs/slider-img-${i}.png)`;
    }
}

for(let i = 0; i < 6; i++) {
    const currImgSrc = sliderImgs[i].style.backgroundImage;

    sliderImgs[i].addEventListener("mouseover", () => {
        if(dir[dir.length - 1] !== "index.html") {
            sliderImgs[i].style.backgroundImage = `url(../../images/slider-imgs/slider-img-${i}.png)`;
        } else {
            sliderImgs[i].style.backgroundImage = `url(./images/slider-imgs/slider-img-${i}.png)`;
        }
    })

    sliderImgs[i].addEventListener("mouseout", () => {
        sliderImgs[i].style.backgroundImage = currImgSrc;
    })
}