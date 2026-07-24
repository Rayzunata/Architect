export function saveGame(game) {
    localStorage.setItem("architect", JSON.stringify(game));
}