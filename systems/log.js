
//------------------------------------------------------------
//
//                  Beschreibung
//
// Funktionen für die einzelnen logMessages
//
// NOCH IN ARBEIT

export const log = {

    addIncreaseMessage(item){
            const logEntry = document.getElementById("entryRightLogContainer");
            const itemName = getItemName(item);
            const logMessage = document.createElement("div");
            logMessage.innerHTML =`${itemName}${item.amount}`;
            logEntry.appendChild(logMessage);
    },
    addDecreaseMessage(item){
            const logEntry = document.getElementById("entryRightLogContainer");
            const itemName = getItemName(item);
            const logMessage = document.createElement("div");
            logMessage.innerHTML =`${itemName}${item.amount}`;
            logEntry.appendChild(logMessage);
    },
    addInfoMessage(item){
            const logEntry = document.getElementById("entryRightLogContainer");
            const itemName = getItemName(item);
            const logMessage = document.createElement("div");
            logMessage.innerHTML =`${itemName}${item.amount}`;
            logEntry.appendChild(logMessage);
    },
    addWarnMessage(item){
            const logEntry = document.getElementById("entryRightLogContainer");
            const itemName = getItemName(item);
            const logMessage = document.createElement("div");
            logMessage.innerHTML =`${itemName}${item.amount}`;
            logEntry.appendChild(logMessage);
    },
}