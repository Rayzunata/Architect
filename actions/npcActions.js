export function testNPC(game,npc) {

    console.log(npc);
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

    main.innerHTML = `
        <p>${npc.description}</p>
    `;


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
