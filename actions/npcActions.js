import { renderShop } from "../ui/renderShop.js";
import { shops } from "../data/registries/economy/shops.js";
export function testNPC(game, npc) {

    //console.log(npc);

    // ========================================================
    // OVERLAY
    // ========================================================

    const modal =
        document.createElement('div');

    modal.className =
        'testNpcModal';


    // ========================================================
    // MODAL CONTENT
    // ========================================================

    const content =
        document.createElement('div');

    content.className =
        'testNpcModalContent';


    // ========================================================
    // HEADER
    // ========================================================

    const head =
        document.createElement('header');

    head.className =
        'testNpcModalHead';

    head.innerHTML = `
        <h4>${npc.name}</h4>
    `;


    // ========================================================
    // MAIN
    // ========================================================

    const main =
        document.createElement('main');

    main.className =
        'testNpcModalMain';


    // ========================================================
    // MAIN LEFT
    // ========================================================

    const mainLeft =
        document.createElement('div');

    mainLeft.className =
        'testNpcModalMainLeft';

    mainLeft.innerHTML = `
        <p>${npc.description}</p>
    `;

    // ========================================================
    // MAIN LEFT if SHOP
    // ========================================================

    if (npc.shopinventory && shops[npc.shopinventory]) {
        const testShopElement = renderShop(npc.shopinventory);
        mainLeft.appendChild(testShopElement);
    }

    // ========================================================
    // MAIN LEFT if QUESTS
    // ========================================================

    

    // ========================================================
    // MAIN RIGHT
    // ========================================================

    const mainRight =
        document.createElement('div');

    mainRight.className =
        'testNpcModalMainRight';


    const image =
        document.createElement('img');

    image.src =
        npc.image;

    image.alt =
        npc.name;


    mainRight.appendChild(
        image
    );


    // ========================================================
    // MAIN ZUSAMMENBAU
    // ========================================================

    main.appendChild(
        mainLeft
    );

    main.appendChild(
        mainRight
    );


    // ========================================================
    // FOOTER
    // ========================================================

    const foot =
        document.createElement('footer');

    foot.className =
        'testNpcModalFoot';


    const closeBtn =
        document.createElement('button');

    closeBtn.textContent =
        'Schließen';


    closeBtn.addEventListener(
        'click',
        () => {
            modal.remove();
        }
    );


    foot.appendChild(
        closeBtn
    );


    // ========================================================
    // ZUSAMMENBAU
    // ========================================================

    content.appendChild(
        head
    );

    content.appendChild(
        main
    );

    content.appendChild(
        foot
    );

    modal.appendChild(
        content
    );

    document.body.appendChild(
        modal
    );
}
