

export function renderWorldSelection(){

    const entry = document.getElementById("entryMidContainer");
    entry.innerHTML = ``;
//
    const worldContainer = document.createElement("div");
    worldContainer.className = "worldContainer";

    const worldDetailsHeader = document.createElement("h3");
    worldDetailsHeader.innerText = "~ Worlds ~"

    worldContainer.appendChild(worldDetailsHeader);
    entry.appendChild(worldContainer);

}