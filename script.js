"use strict";
const btn = document.querySelectorAll(".cart-or-option");

let cartLineItems = [];

for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            const title = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const image = this.getAttribute('data-image');
            
            let itemAdded = false
            for(let i = 0; i < cartLineItems.length; i++) {
                if (title === cartLineItems[i].name) {
                    cartLineItems[i].quantity++;
                    itemAdded = true;
                    break;
                }
            }

            if (itemAdded === false) {
                cartLineItems.push({name: title, price: price, image: image, quantity: 1});
            }

            cartDomRecreation();

            //console.log(cartLineItems);

            cartPrice();

            // console.log(title);
            // console.log(cartLineItems[0].name);
            // console.log(title != cartLineItems[0].name);

        }
    )
};
    

function cartDomRecreation() {
    let cartDom = '';
    for(let i = 0; i < cartLineItems.length; i++) {
        cartDom += `
    <div class="line-items" id="line_item_${i}">
    <div class="product-img">
        <img src="${cartLineItems[i].image}"/>
    </div>
    <div class="product-detail">
        <div class="product-name">${cartLineItems[i].name}</div>
        <div class="product-price">$${cartLineItems[i].price}</div>
        <div class="product-remove">
            <button class="remove-button-${i}" onClick="removeLineItem(${i})">
                remove
            </button>
        </div>
    </div>
    <div class="product-count">
        <input class="product-quantity-input-${i}" type="number" name="" min="1" value="${cartLineItems[i].quantity}" data-price="${cartLineItems[i].price}" onchange="quantityChange(${i})">
    </div>
    </div>`;
    }
    document.querySelector(".product-list").innerHTML = cartDom;

    cartPrice();
};

function removeLineItem(index) {
    cartLineItems.splice(index, 1);
    cartDomRecreation();
};

function quantityChange(index) {
    cartLineItems[index].quantity = document.querySelector(`.product-quantity-input-${index}`).value;
    cartPrice();
};

function cartPrice() {
    let priceInCart = 0;
    for(let i = 0; i < cartLineItems.length; i++) {
        priceInCart += cartLineItems[i].price * document.querySelector(`.product-quantity-input-${i}`).value;
        
    };
    document.querySelector(".right-page-layout .your-cart .middle-section .right").innerHTML = `$${priceInCart}`;
};





let giftBtn = document.querySelector(".add-to-cart button");
giftBtn.addEventListener("click", function() {

    const title = this.getAttribute('data-name');
    const price = this.getAttribute('data-price');
    const image = this.getAttribute('data-image');

    let itemAdded = false;

    for(let i = 0; i < cartLineItems.length; i++) {

        if(cartLineItems[i].name === title && cartLineItems[i].price === price) {
            cartLineItems[i].quantity++;
            itemAdded = true;
            console.log("loop work");
            break;
            }
        console.log("for work");
    };
    
    if (itemAdded === false) {
        cartLineItems.push({name: title, price: price, image: image, quantity: 1});
    };
    
    cartDomRecreation();

    cartPrice();

    }
);

function giftCardAmount() {

    document.querySelector(".cart-or-buy .add-to-cart").innerHTML =
    `<button data-name="Gift Card" data-price="${amount.value}" data-image="https://cdn.shopify.com/s/files/1/0848/3488/products/CanopyFarmShopGIFTCARD_v2__10_2048x.jpg">
        Add to Cart
    </button>`
    let changeValueGiftBtn = document.querySelector(".add-to-cart button");

    changeValueGiftBtn.addEventListener("click", function() {

        const title = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        const image = this.getAttribute('data-image');
    
        let itemAdded = false;
    
        for(let i = 0; i < cartLineItems.length; i++) {
    
            if(cartLineItems[i].name === title && cartLineItems[i].price === amount.value) {
                cartLineItems[i].quantity++;
                itemAdded = true;
                break;
            }
            
        };
        if (itemAdded === false) {
            cartLineItems.push({name: title, price: amount.value, image: image, quantity: 1});
        };
        cartDomRecreation();
        cartPrice();
    
        }
    );
    
};




document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount();
} );




let productAvailable = document.querySelectorAll(".product-catelog .naming-and-pricing .available");
for(let i = 0; i < productAvailable.length; i++) {
    if(productAvailable[i].innerHTML === "") {
        productAvailable[i].style.padding = "0";
    } else if(productAvailable[i].innerHTML === "sale") {
        productAvailable[i].style.backgroundColor = "#89C21E";
    } else if(productAvailable[i].innerHTML === "sold out") {
        btn[i].style.backgroundColor = "#A8A8A6";
        btn[i].disabled = "true";
    }
}

let trollyFarmShop = document.querySelectorAll(".left-page-layout .down-head button")[0];
let trollyFarmShopSVG = document.querySelectorAll(".left-page-layout .down-head svg");
let trolly = document.querySelector(".groceries-trolly");
let FarmShopOpen = false;




trollyFarmShop.addEventListener('click', function() {

    if(FarmShopOpen === false) {
        document.querySelector(".groceries-trolly").style.zIndex = "2";
        document.querySelector(".groceries-trolly").style.visibility = "visible";
        FarmShopOpen = true;
        trollyFarmShopSVG[0].style.transform = "rotate(180deg)"
        trollyFarmShopSVG[0].style.transition = "500ms";
        trollyFarmShopSVG[0].style.transitionProperty = "transform";
        
        trolly.style.transitionProperty = "transform";
        trolly.style.opacity = "1";
        trolly.style.transition = "500ms";

        

    } else {
        document.querySelector(".groceries-trolly").style.zIndex = "0";
        document.querySelector(".groceries-trolly").style.visibility = "hidden";
        console.log("work outside");
        FarmShopOpen = false;
        trollyFarmShopSVG[0].style.transform = "rotate(0deg)"
        trolly.style.opacity = "0";
    }


})

trolly.addEventListener('mouseover', function() {

    trolly.style.zIndex = "3";
    trolly.style.visibility = "visible";
    FarmShopOpen = true;
    trollyFarmShopSVG[0].style.transform = "rotate(180deg)"
    trolly.style.opacity = "1";

    trolly.addEventListener('mouseout', function() {

        trolly.style.zIndex = "0";
        trolly.style.visibility = "hidden";
        FarmShopOpen = false;
        trollyFarmShopSVG[0].style.transform = "rotate(0deg)"
        trolly.style.opacity = "0";
    })
});





    
    