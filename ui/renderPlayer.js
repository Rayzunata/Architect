

export function renderPlayer(){

    const entry = document.getElementById("entryMidContainer");
    entry.innerHTML = ``;

    const playerDetailsContainer = document.createElement("div");
    playerDetailsContainer.className = "testelementContainer";

    const playerDetailsHeader = document.createElement("h3");
    playerDetailsHeader.innerText = "~ Playerdetails ~"

    playerDetailsContainer.appendChild(playerDetailsHeader);
    

    entry.appendChild(playerDetailsContainer);

}