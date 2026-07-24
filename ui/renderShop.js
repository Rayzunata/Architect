

export function renderShop(){

    const entry = document.getElementById("entryMidContainer");
    entry.innerHTML = ``;

    const shopDetailsContainer = document.createElement("div");
    shopDetailsContainer.className = "testelementContainer";

    const shopDetailsHeader = document.createElement("h3");
    shopDetailsHeader.innerText = "~ Shop ~"

    shopDetailsContainer.appendChild(shopDetailsHeader);

    entry.appendChild(shopDetailsContainer);

}