import { shops } from "../data/registries/economy/shops.js";

export function renderShop(shopID) {

    // ========================================================
    // SHOP
    // ========================================================

    const shopElement =
        document.createElement('div');

    shopElement.className =
        'shop';


    // ========================================================
    // HEADER
    // ========================================================

    const header =
        document.createElement('header');

    header.className =
        'shopHeader';


    // ========================================================
    // CONTENT
    // ========================================================

    const content =
        document.createElement('main');

    content.className =
        'shopContent';

    const shop = shops[shopID]; //zutreffenden shop aus shopregistry holen

    for (const item of shop.stock) {

    const entry = document.createElement("div");
    entry.className = "shopEntry";

    entry.innerHTML = `
        <div class="shopItemInfo">
            <div class="shopItemName">
                ${item.id}
            </div>

            <div class="shopItemStock">
                ${item.amount} verfügbar
            </div>
        </div>

        <div class="shopItemAction">
            <span class="shopItemPrice">
                ${item.price} Gold
            </span>

            <button class="buyButton">
                Kaufen
            </button>
        </div>
    `;

    content.appendChild(entry);
}

    
            
            // for (const item of shop.stock) {

            //     const entry = document.createElement("div");

            //     entry.innerHTML = `
            //         <p>Id : ${item.id}</p>
            //         <p>Anzahl : ${item.amount}</p>
            //     `;
            // content.appendChild(entry);
            // }
   
    
    // ========================================================
    // FOOTER
    // ========================================================

    const footer =
        document.createElement('footer');

    footer.className =
        'shopFooter';


    // ========================================================
    // ZUSAMMENBAU
    // ========================================================

    shopElement.appendChild(
        header
    );

    shopElement.appendChild(
        content
    );

    shopElement.appendChild(
        footer
    );


    // ========================================================
    // RETURN
    // ========================================================

    return shopElement;
}
