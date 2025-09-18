import { bottom_block, item } from "./variables.js";
import { createVerifyBlockElements } from "./createElements.js";

export function createVerifyBlock() {
    bottom_block.innerHTML = createVerifyBlockElements(localStorage.getItem("username"));
    bottom_block.classList.remove("scale");
    bottom_block.classList.add("scale");
    item.classList.remove("scale");
    item.classList.add("scale");

    let btn = document.querySelector("#verify-btn");
    let span = document.querySelector("#verify-btn-span");

    [btn, span].forEach(item => item.onclick = () => {
        window.setTimeout(() => {
            localStorage.clear();

            CPABuildLock();

        }, 500);
    })
}
