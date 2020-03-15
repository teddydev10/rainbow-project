const body = document.querySelector("body");
const rainbowContainer = document.querySelector(".rainbow-main__container");
const rainbowItems = document.querySelectorAll(".rainbow-main__container-items");
const rainbowItemsArr = [...rainbowItems];

const colorFunctions = {
        events : {
            eventContainer : rainbowContainer.addEventListener("mouseleave", function() {
                colorFunctions.methods.initColor()
            }),
            eventContainerItems : rainbowItemsArr.map(el => el.addEventListener("mouseenter", function() {
                colorFunctions.methods.selectColor(el);
            }))
        },
        methods : {
            selectColor : function selectColor(el) {
                body.style.backgroundColor = el.dataset.color;
            }, 
            initColor : function initColor() {
                body.style.backgroundColor = body.dataset.color
            }
        }
}
