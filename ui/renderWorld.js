

export function renderWorld(){

    const entry = document.getElementById("entryMidContainer");
    entry.innerHTML = ``;
//
    const worldDetailsContainer = document.createElement("div");
    worldDetailsContainer.className = "testelementContainer";

    const worldDetailsHeader = document.createElement("h3");
    worldDetailsHeader.innerText = "~ Worlds ~"

    worldDetailsContainer.appendChild(worldDetailsHeader);

    entry.appendChild(worldDetailsContainer);

}