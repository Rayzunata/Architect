

export function renderBank(){

    const entry = document.getElementById("entryMidContainer");
    entry.innerHTML = ``;

    const bankDetailsContainer = document.createElement("div");
    bankDetailsContainer.className = "testelementContainer";

    const bankDetailsHeader = document.createElement("h3");
    bankDetailsHeader.innerText = "~ Bank ~"

    bankDetailsContainer.appendChild(bankDetailsHeader);

    entry.appendChild(bankDetailsContainer);

}