function initialize() {
    window.addEventListener("scroll", moveImagesWhenUserScrolls);
}

function moveImagesWhenUserScrolls() {
    const scrollPosition = window.scrollY;
    const MOON = document.getElementById("moon");
    const BG = document.getElementById("bg");
    const MOUNTAIN = document.getElementById("mountain");
    const ROAD = document.getElementById("road");
    const TEXT = document.getElementById("text");
    MOON.style.left = -scrollPosition + "px";
    BG.style.top = scrollPosition + "px";
    MOUNTAIN.style.top = scrollPosition + "px";
    ROAD.style.top = scrollPosition + "px";
    TEXT.style.top = scrollPosition + "px";

    if(TEXT.style.top > window.innerHeight) {
        TEXT.style.visibility = "hidden";
    }else {
        TEXT.style.visibility = "visible";
    }

}

initialize();