export function createImageBlockElements(username, src, item_src, item_text, bgColor) {
    return `
        <h2 class="bottom-block__title">Confirmation</h2>
        <div class="bottom-block__images">
            <div class="goods-img goods-img--user">
                <img src="${src}" id="item-img" alt width="120px" height="120px">
                <p class="goods-img__text" id="item-text">${username}</p>
            </div>
            <div class="goods-img" style="background: ${bgColor}">
                <img src="${item_src}" id="item-img" alt width="120px" height="120px">
                <p class="goods-img__text" id="item-text">${item_text}</p>
            </div>
        </div>
        <button class="bottom-block__btn" id="agree">Confirm</button>
        <button class="bottom-block__btn bottom-block__btn--disagree" id="disagree">Back</button>
    `
}

export function createCityBlockElements() {
    return `
        <h2 class="bottom-block__title">Processing</h2>
        <img class="bottom-block__cities-img" src="./img/cog-icon.svg" style="opacity:0;" alt="">
        <p class="bottom-block__cities-text">Loading...</p>
    `
}

export function createVerifyBlockElements() {
    return `
        <h2 class="bottom-block__title">Verify Required</h2>
        <div class="block">
            <span id="verify-btn-span"></span>
            <button class="bottom-block__btn" id="verify-btn">Verify Now!</button>
        </div>
    `
}

export function createItemBlock(index, imageURL, name) {
    return `
            <img src="${imageURL}" alt width="120px" height="120px" id="goods-${index}-img">
            <p class="item__text" id="goods-${index}-text">${name}</p>
    `
}
