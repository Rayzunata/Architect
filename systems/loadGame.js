export function loadGame() {

    const save = localStorage.getItem("architect");

    if (!save) {
        return createGame();
    }

    return JSON.parse(save);

}