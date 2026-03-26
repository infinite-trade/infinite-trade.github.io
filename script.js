// Config
const traders = {
    "John Pork": {
        subtitle: "As seen on Instagram!",
        lootPool: {
            "10x Pork": {
                price: 10,
                id: 1,
            },
            "Golden Ham": {
                price: 20,
                id: 2,
            },
            "Expired Bacon": {
                price: 1,
                id: 3,
            }
        },
        rareLoot: {
            title: "The eternal oink",
            price: 99,
            id: 4,
            rareLootChance: 2025,
        },
        priority: 1
    },

    "Artyom": {
        subtitle: "The creator of Artyom's casino",
        lootPool: {
            "FFXIV Game Disc": {
                price: 0,
                id: 5,
            },
            "PlayStation 2 Slim": {
                price: 500,
                id: 6,
            },
            "PC Advice": {
                price: 10,
                id: 7,
            }
        },
        rareLoot: {
            title: "Artyom casino gift card",
            price: 150,
            id: 8,
            rareLootChance: 729,
        },
        priority: 2
    },

    "6-7 Kid": {
        subtitle: "the CEO of maths",
        lootPool: {
            "Weathered maths notebook": {
                price: 10,
                id: 9,
            },
            "6 or 7 social credits": {
                price: 67,
                id: 10,
            },
            "Maths homework advice": {
                price: 15,
                id: 11,
            }},
        rareLoot: {
            title: "67 coins and Social credits",
            price: 67,
            id: 12,
            rareLootChance: 67,
        },
        priority: 1
    },

    "Joe Biden": {
        subtitle: "Trump's greatest enemy",
        lootPool: {
            "10 social credits": {
                price: 1,
                id: 13,
            },
            "Navy application": {
                price: -10,
                id: 14,
            },
            "Army application": {
                price: -10,
                id: 15,
            }
        },
        rareLoot: {
            title: "Bing Chilling (Specially imported from China)",
            price: 1000,
            id: 16,
            rareLootChance: 10,
        },
        priority: 1
    },

    "Artem": {
        subtitle: "The greatest chess player of Denmark",
        lootPool: {
            "Weathered chess board": {
                price: 10,
                id: 17,
            },
            "Weathered Hat": {
                price: 3,
                id: 18,
            },
            "Weathered tennis racket": {
                price: 10,
                id: 19,
            },
            "Chess advice": {
                price: 0,
                id: 20,
            },
            "Unstable SMP summary": {
                price: 0,
                id: 21,
            },
            "Politics advice": {
                price: "",
                priceSC: 10,
                id: 22,
            }
        },
        rareLoot: {
            title: "Free admission to chess club",
            price: 0,
            id: 23,
            rareLootChance: 5,
        },
        priority: 2,
    }
};

// Variables
let inventory = [];
let traderReward;
let coinsAmount = 10;
let traderRewardRNG;

// Constants
const offer = document.getElementById("offer");
const enterButton = document.getElementById("enter-button");
const offerName = document.getElementById("offer-name");
const offerSubtitle = document.getElementById("offer-subtitle");
const offerReward = document.getElementById("offer-reward");
const offerRewardTitle = document.getElementById("offer-reward-title");
const coinDisplay = document.getElementById("coin-display");
const priceDisplay = document.getElementById("offer-price");


// Main script

document.addEventListener("DOMContentLoaded", () => {
    if (coinDisplay) {
        coinDisplay.textContent = "Coins: " + coinsAmount;
    }
});

function tradeText() {
    let trader = Math.floor(Math.random() * (Object.keys(traders).length));
    let traderTitle = (Object.keys(traders)[trader]);
    let traderData = traders[traderTitle];
    // console.log(traderData.priority + traderTitle)
    if (traderData.priority != 1) {
        // console.log("Rare")
        if (Math.floor(Math.random() * traderData.priority) != 1) {
            console.log("RNG failed for " + traderTitle);
            return tradeText();
        };
    }
    if (Math.floor(Math.random() * traderData.rareLoot.rareLootChance) == 1) {
        traderReward = traderData.rareLoot;
        alert("Rare trade!");
    }
    else {
        let lootKeys = Object.keys(traders[traderTitle].lootPool);
        traderRewardRNG = Math.floor(Math.random() * lootKeys.length);
        traderReward = traderData.lootPool[lootKeys[traderRewardRNG]];
    };
    if (traderReward.price >= coinsAmount) {
        return tradeText();
    };
    // alert(traderTitle);
    offerName.textContent = traderTitle;
    if (traderReward == traderData.rareLoot) {
        offerReward.textContent = traderReward.title;
    }
    else {
        let itemName = Object.keys(traderData.lootPool)[traderRewardRNG];
        traderReward.title = itemName;
        offerReward.textContent = itemName;
        console.log(traderReward);
    }
    offerSubtitle.textContent = traderData.subtitle;
    offerRewardTitle.textContent = traderTitle + " gives:";
    if (priceDisplay) {
        priceDisplay.textContent = "Price: " + traderReward.price;
    }
    
    // console.log(traderReward.price);
}

function tradeAppear() {
    enterButton.style.display = "none";
    offer.style.display = "block";
    tradeText();
}

function tradeClose(decision) {
    offer.style.display = "none";
    if (decision == "accept") {
        coinsAmount -= traderReward.price;
        // console.log(coinsAmount);
        coinDisplay.textContent = "Coins: " + String(coinsAmount);
        inventory.push(traderReward);
    }
    setTimeout(tradeAppear, 1000);
}
