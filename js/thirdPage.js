import { bottom_block, item } from "./variables.js";
import { createCityBlockElements } from "./createElements.js";

import { createVerifyBlock } from "./fourthPage.js";


export function createCityBlock() {
    bottom_block.innerHTML = createCityBlockElements();

    bottom_block.classList.add("scale");
    window.setTimeout(() => bottom_block.classList.remove("scale"), 400);
    item.classList.remove("hide");

    item.classList.add("scale");
    window.setTimeout(() => item.classList.remove("scale"), 400);

    let text = document.querySelector(".bottom-block__cities-text");
    let img = document.querySelector(".bottom-block__cities-img");

    text.innerHTML = "Connecting to server";
    img.style.opacity = 1;

    window.setTimeout(() => activateItem(text), 2000);
}

// async function detectCity(text) {
//     let response = await fetch(`https://json.geoiplookup.io/`);

//     if (response.ok) {
//         response = await response.json();
//         text.innerHTML = `Your Closest Server:<br>${response.city}`;
//     } else {
//         text.innerHTML = `Your Closest Server:<br>AT&T`;
//     }

//     window.setTimeout(() => activateItem(text), 2000);
// }

function activateItem(text) {
    const item_name = document.querySelector("#item-text");

    text.innerHTML = `Activating the Item:<br>${item_name.innerHTML}`;

    window.setTimeout(() => successActivate(text), 1000);
}

function successActivate(text) {
    text.innerHTML = "Item Activated!";

    let img = document.querySelector(".bottom-block__cities-img");

    [bottom_block, img, text].forEach(item => item.classList.toggle("up"));

    window.setTimeout(() => {
        img.classList.toggle("up");
        img.classList.toggle("rotate_fast");
    }, 1050);

    window.setTimeout(() => saveResults(text), 2000);
}

function saveResults(text) {
    [bottom_block, text].forEach(item => item.classList.toggle("up"));
    text.innerHTML = "Saving results...";

    window.setTimeout(() => requireVerification(text), 1100);
}
function requireVerification(text) {
    text.innerHTML = "Verification Required";
    window.setTimeout(() => createVerifyBlock(), 1100);
}