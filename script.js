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
                price: 6,
                id: 10,
            },
            "Maths homework advice": {
                price: 15,
                id: 11,
            }},
        rareLoot: {
            title: "67 coins and Social credits",
            price: 69,
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
        subtitle: "The CEO (or just an average worker iirc) of Temu",
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

const armyClasses = ["Servant", "Developer"];

// Variables
let inventory = [];
let traderReward;
let coinsAmount = 10;
let socialCreditsAmount = 0;
let traderRewardRNG;
let armyActivated = false;
let navyAcivated = false;
let armyOpen = false;
let navyOpen = false;
let armyClass = "";
let armyClassNo = 3;

// Constants
const offer = document.getElementById("offer");
const enterButton = document.getElementById("enter-button");
const offerName = document.getElementById("offer-name");
const offerSubtitle = document.getElementById("offer-subtitle");
const offerReward = document.getElementById("offer-reward");
const offerRewardTitle = document.getElementById("offer-reward-title");
const coinDisplay = document.getElementById("coin-display");
const priceDisplay = document.getElementById("offer-price");
const socialCreditDisplay = document.getElementById("socialcredit-display");
const armyMenu = document.getElementById("armyMenu");
// const navyMenu = document.getElementById("navyMenu");
const armyClassDisplay = document.getElementById("armyClass");

// Declaring buttons
const buttonl1 = document.getElementById("buttonl1");
const buttonl2 = document.getElementById("buttonl2");
const buttonl3 = document.getElementById("buttonl3");
const buttonl4 = document.getElementById("buttonl4");
const buttonl5 = document.getElementById("buttonl5");
const buttonl6 = document.getElementById("buttonl6");
const buttonl7 = document.getElementById("buttonl7");
const buttonl8 = document.getElementById("buttonl8");
const buttonl9 = document.getElementById("buttonl9");
const buttonl10 = document.getElementById("buttonl10");
const buttonl11 = document.getElementById("buttonl11");
const buttonl12 = document.getElementById("buttonl12");
const buttonl13 = document.getElementById("buttonl13");
const buttonl14 = document.getElementById("buttonl14");
const buttonl15 = document.getElementById("buttonl15");
const buttonr1 = document.getElementById("buttonr1");
const buttonr2 = document.getElementById("buttonr2");
const buttonr3 = document.getElementById("buttonr3");
const buttonr4 = document.getElementById("buttonr4");
const buttonr5 = document.getElementById("buttonr5");
const buttonr6 = document.getElementById("buttonr6");
const buttonr7 = document.getElementById("buttonr7");
const buttonr8 = document.getElementById("buttonr8");
const buttonr9 = document.getElementById("buttonr9");
const buttonr10 = document.getElementById("buttonr10");
const buttonr11 = document.getElementById("buttonr11");
const buttonr12 = document.getElementById("buttonr12");
const buttonr13 = document.getElementById("buttonr13");
const buttonr14 = document.getElementById("buttonr14");
const buttonr15 = document.getElementById("buttonr15");

// Main script

function hasItem(idToFind) {
    return inventory.some(item => item.id === idToFind);
};

document.addEventListener("DOMContentLoaded", () => {
    if (coinDisplay) {
        coinDisplay.textContent = "Coins: " + coinsAmount;
    }
    if (socialCreditDisplay) {
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
});

function inventoryCheck() {
    if (hasItem(13)) {
        // alert("Success");
        socialCreditsAmount += 10;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    };
    if (hasItem(5)) {
        socialCreditsAmount += 999;
        socialCreditDisplay.textcontent = "Social credits: " + socialCreditsAmount;
    };
    if (hasItem(16)) {
        socialCreditsAmount += 999;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    if (hasItem(23)) {
        socialCreditsAmount += 12;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    if (hasItem(6)) {
        socialCreditsAmount += 2;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    if (hasItem(10)) {
        let RNGTemp = Math.floor(Math.random() * 2);
        console.log(RNGTemp);
        if (RNGTemp == 1) {
            // alert("6 social credits");
            socialCreditsAmount += 6;
            socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        }
        else {
            // alert("7 social credits");
            socialCreditsAmount += 7;
            socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        }
    }
    if (hasItem(12)) {
        coinsAmount += 67;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        socialCreditsAmount += 67;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount; 
    }
    if ((hasItem(14)) || (hasItem(15))) {
        socialCreditsAmount += 1;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        if (hasItem(14), armyActivated == false) {
            buttonl1.style.display = "inline-block"
            alert("Thank you for applying to national army! You are now obligated to serve for the coin and the country for the grand pay of 10 coins. Clicking Ok in this prompt means that you accept giving up your trading business and working for army as the national clicker until the time limit will end");
            armyActivated = true;
        }
        else if (hasItem(15) && navyAcivated == false) {
            buttonr1.style.display = "inline-block";
            alert("Thank you for applying to national navy! You are now obligated to serve for the coin and the country for the grand pay of 10 coins. Clicking Ok in this prompt means that you accept giving up your trading business and working for navy as the national generator clicker until the time limit will end");
            navyAcivated = true;
        }
        else {

        }
    };

    if (hasItem(21) || hasItem(20) || hasItem(17)) {
        socialCreditsAmount -= 2000;
        coinsAmount = -10;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        coinDisplay.textContent = "Coins: " + coinsAmount;
    }
};

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
    if (traderReward.price > coinsAmount) {
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
        if (traderReward.price === "" && traderReward.priceSC > 0) {
            priceDisplay.textContent = traderReward.priceSC + " social credits";
        }
        else {
        priceDisplay.textContent = traderReward.price + " coin(s)";
        };
    };
    
    // console.log(traderReward.price);
};

function tradeAppear() {
    enterButton.style.display = "none";
    offer.style.display = "block";
    tradeText();
};

function tradeClose(decision) {
    if (armyActivated == true || navyAcivated == true) {
        alert("How dare you cheat on national services?? This removes all your social credits!!");
        socialCreditsAmount = -666;
        coinsAmount = 0;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    else {
        offer.style.display = "none";
        if (decision == "accept") {
            coinsAmount -= traderReward.price;
            if (traderReward.priceSC > 0) {
                socialCreditsAmount -= traderReward.priceSC;
                socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
            };
            // console.log(coinsAmount);
            coinDisplay.textContent = "Coins: " + String(coinsAmount);
            inventory.push(traderReward);
            console.log(traderReward);
            console.log(inventory);
            inventoryCheck();
        }
        setTimeout(tradeAppear, 1000);
    }
};

function armyMenuOpening() {
    if (armyActivated == true && armyOpen == false) {
        armyMenu.style.display = "flex";
        armyOpen = true;
    }
    else if (armyActivated == true && armyOpen == true) {
        armyMenu.style.display = "none";
        armyOpen = false;
    }
    else {
        alert("You broke the code! Don't forget to report the bug, and here's some free money for you!");
        coinsAmount += 500;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        armyClass = armyClasses[1];
        socialCreditsAmount += 500;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        armyClassDisplay.textContent = "Army class: " + armyClass + + " " + armyClassNo + " class";
    }
}

function navyMenu() {
    alert("Coming soon!");
};

function armyButton() {
    alert("Clicked - coming soon!");
};