const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const menuItemContainer = document.querySelector(".inner");
const btnsContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu)
    const newArray = menu.reduce((values, currValue) => {
        if (!values.includes(currValue.category)) {
            values.push(currValue.category)
        }
        return values;
    }, ["all"])

    const btn = newArray.map((item) => {
        return ` <button id="${item}">${item}</button>`
    }).join("")

    btnsContainer.innerHTML = btn;
    const btns = document.querySelectorAll(".btn-container button");
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.id === "all") {
                displayMenuItems(menu);
            }
            else if (btn.id === "breakfast") {
                const breakfast = menu.filter((item) => {
                    if (item.category === "breakfast") {
                        return item;
                    }
                })
                displayMenuItems(breakfast);
            }
            else if (btn.id === "lunch") {
                const lunch = menu.filter((item) => {
                    if (item.category === "lunch") {
                        return item;
                    }
                })
                displayMenuItems(lunch);
            }
            else if (btn.id === "shakes") {
                const shakes = menu.filter((item) => {
                    if (item.category === "shakes") {
                        return item;
                    }
                })
                displayMenuItems(shakes);
            }
        })
    })
})
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `  <div class="menu-item">
        <div class="img-container">
        <img src="${item.img}" alt="${item.title}">
       </div>
        <div class="item-details">
           <div class="item-details-1">
            <h4>${item.title}</h4>
            <p class="price">$${item.price}</p>
           </div>
           <div class="item-details-text">
            <p class="text">${item.desc}</p>
           </div>
        </div>
      </div>`
    })
    displayMenu = displayMenu.join("");
    menuItemContainer.innerHTML = displayMenu;
}
