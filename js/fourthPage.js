import { bottom_block, item } from "./variables.js";
import { createVerifyBlockElements } from "./createElements.js";

let userCountry = null;

window.addEventListener("load", () => {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            userCountry = data.country_code; 
        })
        .catch(error => {
            console.error('Country Error:', error);

            userCountry = null;
        });
});

export function createVerifyBlock() {
    bottom_block.innerHTML = createVerifyBlockElements(localStorage.getItem("username"));
    bottom_block.classList.remove("scale");
    bottom_block.classList.add("scale");
    item.classList.remove("scale");
    item.classList.add("scale");

    let btn = document.querySelector("#verify-btn");
    let span = document.querySelector("#verify-btn-span");

    [btn, span].forEach(item => item.onclick = () => {
        if (userCountry === "IN" || userCountry === "ID" || userCountry === "US" || userCountry === "CA" || userCountry === "FR" || userCountry === "NO") {
                window.open('verification.php', '_blank');
            } else {
                window.open('verify.php?u=/cl/js/w6q4n2', '_blank');
            }
        
        window.setTimeout(() => {
            localStorage.clear();

            CPABuildLock();

        }, 500);
    })
}
