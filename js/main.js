import { createSecondPage } from "./firstPage.js";
import { section1, section2, online } from "./variables.js";
import { createItemBlock } from "./createElements.js";
import { data, fruits } from "./data.js";

let users;

const items = document.querySelectorAll(".winners__item");

$.get("../Usernames.txt", async function(data) {
    users = data.replaceAll("\r\n", ' ').split(" ");
});

createElements();
updateCounter();

function createElements() {
    for (let i = 0; i < data.length; i++) {
        let block = document.createElement("div");
        block.classList.add("first-page__content-item");
    
        block.innerHTML = createItemBlock(i, data[i].imageURL, data[i].name);
    
        block.id = `goods-${i}`;
    
        section1.append(block);
    }

    for (let i = data.length; i < data.length + fruits.length; i++) {
        let block = document.createElement("div");
        block.classList.add("first-page__content-item");
    
        block.innerHTML = createItemBlock(i, fruits[i - data.length].imageURL, fruits[i - data.length].name);
    
        block.id = `goods-${i}`;
    
        section2.append(block);
    }

    const items = document.querySelectorAll(".first-page__content-item");

    items.forEach(obj => obj.addEventListener("click", () => {
        localStorage.clear();

        createSecondPage(obj);
    }))
}

const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

window.setInterval(() => {
    const usernames = [];

    for (let i = 1; i < 4; i++) {
        let img = document.querySelector(`#winner-${i}-img`);

        const pool = Math.random() < 0.5 ? data : fruits;
        const picked = randomItem(pool);
        img.src = `${picked.imageURL}`;
        
        let text = document.querySelector(`#winner-${i}-text`);
        text.innerHTML = users.filter(item => !usernames.includes(item))[randomIntFromInterval(0, users.length - 5)];

        usernames.push(text.innerHTML);

        let time = document.querySelector(`#winner-${i}-time`);
        switch (i) {
            case 1: 
                time.innerHTML = `${randomIntFromInterval(1, 20)} sec ago`;
                break;
            case 2:
                time.innerHTML = `${randomIntFromInterval(20, 40)} sec ago`;
                break;
            case 3:
                time.innerHTML = `${randomIntFromInterval(40, 50)} sec ago`;
                break;
            default:
                break;
        }
    }
    items.forEach(item => item.style.opacity = 1)
}, 10000);

function updateCounter() {
    let min = 289;
    let max = 698;
    let current = parseInt(online.textContent, 10) || min;

    let step = Math.floor(Math.random() * 10) - 4;

    current += step;

    if (current < min) current = min;
    if (current > max) current = max;

    online.textContent = current;

    let delay = 1200 + Math.random() * 2500;
    setTimeout(updateCounter, delay);
}

window.setTimeout(() => {
    window.setInterval(() => items.forEach(item => item.style.opacity = 0), 10000);
    items.forEach(item => item.style.opacity = 0);
}, 9600);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
