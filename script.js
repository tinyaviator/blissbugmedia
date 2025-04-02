document.querySelectorAll(".imageSwitch").forEach(object => {
    object.addEventListener("mouseenter", () => {
        object.src = object.getAttribute("img2");
    })
    object.addEventListener("mouseleave", () => {
        object.src = object.getAttribute("img1");
    })
})