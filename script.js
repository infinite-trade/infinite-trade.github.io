// Config
const traders = {
    "John Pork": {
        subtitle: "As seen on Instagram!",
        lootPool: {
            "10x Pork": {
                price: 10,
                id: 1,
                sells: true,
                sellsforSC: false,
                sellsfor: 0,
                usable: true,
            },
            "Golden Ham": {
                price: 20,
                id: 2,
                sells: true,
                sells: true,
                sellsforSC: 50,
                sellsfor: 100,
                usable: false,
            },
            "Expired Bacon": {
                price: 1,
                id: 3,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: true,
            }
        },
        rareLoot: {
            title: "The eternal oink",
            price: 99,
            id: 4,
            rareLootChance: 2025,
            sells: true,
            sellsforSC: 9999,
            sellsfor: 10,
            usable: false,
        },
        priority: 1
    },

    "Artyom": {
        subtitle: "The creator of Artyom's casino",
        lootPool: {
            "FFXIV Game Disc": {
                price: 0,
                id: 5,
                sells: true,
                sellsforSC: -999,
                sellsfor: 10,
                usable: true,
            },
            "PlayStation 2 Slim": {
                price: 500,
                id: 6,
                sells: true,
                sellsforSC: 20000,
                sellsfor: 800,
                usable: true,
            },
            "PC Advice": {
                price: 10,
                id: 7,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: true,
            }
        },
        rareLoot: {
            title: "Artyom casino gift card",
            price: 150,
            id: 8,
            rareLootChance: 729,
            sells: false,
            sellsforSC: false,
            sellsfor: 0,
            usable: true,
        },
        priority: 3
    },

    "6-7 Kid": {
        subtitle: "the CEO of maths",
        lootPool: {
            "Weathered maths notebook": {
                price: 10,
                id: 9,
                sells: true,
                sellsforSC: false,
                sellsfor: 1,
                usable: true,
            },
            "6 or 7 social credits": {
                price: 6,
                id: 10,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
            },
            "Maths homework advice": {
                price: 15,
                id: 11,
                sells: true,
                sellsforSC: 5,
                sellsfor: 1,
                usable: true,
            }},
        rareLoot: {
            title: "67 coins and Social credits",
            price: 69,
            id: 12,
            rareLootChance: 67,
            sells: false,
            sellsforSC: false,
            sellsfor: 0,
            usable: false,
        },
        priority: 1
    },

    "Joe Biden": {
        subtitle: "Trump's greatest enemy",
        lootPool: {
            "10 social credits": {
                price: 1,
                id: 13,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
            },
            "Navy application": {
                price: -10,
                id: 14,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
            },
            "Army application": {
                price: -10,
                id: 15,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
            }
        },
        rareLoot: {
            title: "Bing Chilling (Specially imported from China)",
            price: 1000,
            id: 16,
            rareLootChance: 10,
            sells: true,
            sellsforSC: 9999999999999999,
            sellsfor: 50,
            usable: true,
        },
        priority: 3
    },

    "Artem": {
        subtitle: "The CEO (or just an average worker iirc) of Temu",
        lootPool: {
            "Weathered chess board": {
                price: 10,
                id: 17,
                sells: true,
                sellsforSC: -12,
                sellsfor: 1,
                usable: true,
            },
            "Weathered Hat": {
                price: 3,
                id: 18,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: true,
            },
            "Weathered tennis racket": {
                price: 10,
                id: 19,
                sells: true,
                sellsforSC: false,
                sellsfor: 50,
                usable: true,
            },
            "Chess advice": {
                price: 0,
                id: 20,
                sells: false,
                sellsforSC: false,
                sellsfor: 50,
                usable: true,
            },
            "Unstable SMP summary": {
                price: 0,
                id: 21,
                sells: false,
                sellsforSC: false,
                sellsfor: 50,
                usable: true,
            },
            "Politics advice": {
                price: "",
                priceSC: 10,
                id: 22,
                sells: true,
                sellsforSC: -10,
                sellsfor: 0,
                usable: true,
            }
        },
        rareLoot: {
            title: "Free admission to chess club",
            price: 0,
            id: 23,
            rareLootChance: 5,
            sells: false,
            sellsforSC: false,
            sellsfor: 50,
            usable: true,
        },
        priority: 2,
    }
};

const exchangeRateSCPer1coin = 10;

const armyClasses = ["Servant 3rd Class", "Servant 2nd Class", "Servant 1st Class", "Soldier", "Lieutenant", "Captain", "Developer", "Donald Trump", "Joe Biden", "Barack Obama", "George Bush", "Error", "MrBeast", "Elon Musk"];

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
let inventoryOpen = false;
let armyClass = armyClasses[0];
let armyButtonClicked = 0;
let selectedItem;

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
const armyClassDisplay = document.getElementById("armyClass");
const inventoryList = document.getElementById("inventoryList");
const inventoryMenu = document.getElementById("inventoryMenu");
const armyTitle = document.getElementById("armyTitle");
const armyStoreTitle = document.querySelector(".armyStoreTitle");
const quitArmyButton = document.getElementById("quitArmyButton");
const armyInterface = document.getElementById("armyInterface");
const armyTitleContainer = document.getElementById("armyTitleContainer");
const armyHelp = document.querySelector(".armyHelp");
const itemMenuTitle = document.getElementById("itemMenuTitle");
const sellButton = document.getElementById("sellButton");
const itemMenuContainer = document.getElementById("itemMenu");


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
    return inventory.some(item => item.id == idToFind);
};

function getItem(idToFind) {
    let found = false;
    for (let i = 0; i < inventory.length && found == false; i++) {
        if (inventory[i].id == idToFind) {
            found = true;
            return i;
        }
    } 
};

function removeItem(idToRemove) {
    let keptItem = [];
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id != idToRemove) {
            keptItem.push(inventory[i]);
        };
    };
    return keptItem;
}

document.addEventListener("DOMContentLoaded", () => {
    if (coinDisplay) {
        coinDisplay.textContent = "Coins: " + coinsAmount;
    }
    if (socialCreditDisplay) {
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
});

function addSocialCredits(amount) {
    socialCreditsAmount += amount;
    socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
}

function inventoryCheck() {
    if (hasItem(13)) {
        // alert("Success");
        socialCreditsAmount += 10;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        inventory = removeItem(13);
    };
    if (hasItem(5)) {
        socialCreditsAmount += 999;
        alert("Thank you for purchasing Final Fantasy 14 Online");
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    };
    if (hasItem(16)) {
        alert("Thank you for purchasing BING CHILLING! 感謝您購買 BING CHILLING");
        socialCreditsAmount += 9999;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    if (hasItem(23)) {
        socialCreditsAmount += 12;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    if (hasItem(6)) {
        socialCreditsAmount += 2;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        inventory = removeItem(6);
    }
    if (hasItem(14)) {
        armyMenu.style.backgroundColor = "#000080";
        buttonl1.textContent = "Navy menu";
        armyTitle.textContent = "Navy menu";
        armyTitleContainer.style.backgroundColor = "#000080";
        armyTitle.style.backgroundColor = "#000080";
        armyStoreTitle.textContent = "Navy store";
        quitArmyButton.textContent = "Exchange 100 coins to leave the Navy"
        armyInterface.style.color = "#fff";
        armyStoreTitle.style.color = "#fff";
    }
    if (hasItem(15)) {
        armyMenu.style.backgroundColor = "#4B5320";
        buttonl1.textContent = "Army menu";
        armyTitle.textContent = "Army menu";
        armyTitleContainer.style.backgroundColor = "#4B5320";
        armyTitle.style.backgroundColor = "#4B5320";
        armyStoreTitle.textContent = "Army store";
        quitArmyButton.textContent = "Exchange 100 coins to leave the Army";
        armyInterface.style.color = "#000";
        armyStoreTitle.style.color = "#000";
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
        inventory = removeItem(10);
    }
    if (hasItem(12)) {
        coinsAmount += 67;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        socialCreditsAmount += 67;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        inventory = removeItem(12);
    }
    if ((hasItem(14)) || (hasItem(15))) {
        socialCreditsAmount += 1;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        if (hasItem(15) && armyActivated == false) {
            buttonl1.style.display = "inline-block";
            alert("Thank you for applying to national army! You are now obligated to serve for the coin and the country for the grand pay of 10 coins. Clicking Ok in this prompt means that you accept giving up your trading business and working for army as the national clicker until the time limit will end");
            armyActivated = true;
        }
        else if (hasItem(14) && navyAcivated == false) {
            buttonl1.style.display = "inline-block";
            armyActivated = true;
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
    if ((armyActivated == true || navyAcivated == true) && (armyClass == armyClasses[0] || armyClass == armyClasses[1] || armyClass == armyClasses[2] || armyClass == armyClasses[3] || armyClass == armyClasses[4])) {
        console.log(armyActivated + ", " + navyAcivated)
        alert("How dare you cheat on national services?? This removes all your social credits!!");
        socialCreditsAmount = -666;
        coinsAmount = 0;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    else {
        offer.style.display = "none";
        if (decision == "accept") {
            buttonl2.style.display = "inline-block";

            let button = document.createElement("button");
            button.className = "inventory-button";
            button.textContent = traderReward.title;
            button.id = "inventoryButtonId" + inventory.length;
            inventoryList.append(button);
            const purchasedItem = traderReward;
            const newButton = document.getElementById("inventoryButtonId" + inventory.length);
            newButton.addEventListener("click", () => itemMenu(purchasedItem, newButton));

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
    inventoryOpen = false;
    navyOpen = false;
    inventoryMenu.style.display = "none";
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
    if (armyClass == armyClasses[0]) {
    addSocialCredits(1);
    }
    else {
        addSocialCredits(2);
    }


    if (armyClass == armyClasses[1] || armyClass == armyClasses[0]) {
    }
    else if (armyClass == armyClasses[2]) {
        armyButtonClicked += 1;
        if (armyButtonClicked == 10) {
            armyButtonClicked = 0;
            addSocialCredits(20);
        }
    }
    else if (armyClass == armyClasses[3]) {
        armyButtonClicked += 1;
        if (armyButtonClicked == 10) {
            armyButtonClicked = 0;
            addSocialCredits(50);
        }
    }
    else {
        armyButtonClicked += 1;
        if (armyButtonClicked == 10) {
            armyButtonClicked = 0;
            addSocialCredits(100);
        }
    }
    
    updateClassInfo();
};

function quitArmy() {
    if (coinsAmount >= 100) {
        coinsAmount -= 100;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        alert("Thank you for your service 🫡. Now, GET OUT")
        armyActivated = false;
        navyAcivated = false;
        armyOpen = false;
        if (hasItem(15)) {
            console.log(getItem(15))
            console.log(removeItem(15))
            inventory = removeItem(15);
        }
        if (hasItem(14)) {
            console.log(getItem(14))
            console.log(removeItem(14))
            inventory = removeItem(14);
        }
        armyMenu.style.display = "none";
        buttonl1.style.display = "none";
    }
    else {
        alert("Insufficient funds!")
    }
};

function purchaseCoins(amount) {
    if (socialCreditsAmount >= exchangeRateSCPer1coin * amount) {
        coinsAmount += amount;
        socialCreditsAmount -= exchangeRateSCPer1coin * amount;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    else {
        alert("Insufficient funds!");
    }
}

function inventoryOpening() {
    if (inventoryOpen == false) {
    armyOpen = false;
    navyOpen = false;
    armyMenu.style.display = "none";
    inventoryMenu.style.display = "flex";
    inventoryOpen = true;
    }
    else {
        inventoryMenu.style.display = "none";
        inventoryOpen = false;
    }
}

function buyNewRank(price, priceSC) {
    console.log(price + ", " + priceSC + ", " + coinsAmount + ", " + socialCreditsAmount);
    if (armyClass == armyClasses[armyClasses.length-1]) {
        alert("As bright as your flame burns, there are no current promotions left. Wait for the next update ;)");
    }
    else {
        if (coinsAmount >= price && socialCreditsAmount >= priceSC) {
            coinsAmount -= price;
            socialCreditsAmount -= priceSC;
            coinDisplay.textContent = "Coins: " + coinsAmount;
            socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
            let armyClassNo;
            for (let i = 0; i < armyClasses.length; i++) {
                if (armyClasses[i] == armyClass) {
                    armyClassNo = i;
                }
            }
            armyClass = armyClasses[armyClassNo + 1];
            armyClassDisplay.textContent = "Army class: " + armyClass;
            updateClassInfo();
        }
        else {
            alert("Insufficient funds!");
        }
    }
}

function sellItem(item, target) {
    console.log(item);
    console.log(item.sellsfor);
    if (item.sells == true) {
        itemMenuContainer.style.display = "none";
        coinsAmount += item.sellsfor;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        if (item.sellsforSC != false) {
            socialCreditsAmount += item.sellsforSC;
            socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        }
        inventory.pop(getItem(item.id));
        target.remove();
    }
    else {
        alert("Unsellable item");
    }
}

function updateClassInfo() {
    if (armyClass == armyClasses[0]) {
        armyHelp.textContent = "Next class will unlock: 2 social credits per click";
    }
    else if (armyClass == armyClasses[1]) {
        armyHelp.textContent = "Next class will unlock: free 20 social credits per 10 clicks";
    }
    else if (armyClass == armyClasses[2]) {
        armyHelp.textContent = "Next class will unlock: free 50 social credits per 10 clicks";
    }
    else if (armyClass == armyClasses[3]) {
        armyHelp.textContent = "Next class will unlock: free 100 social credits per 10 clicks";
    }
    else if (armyClass == armyClasses[4]) {
        armyHelp.textContent = "Next class will unlock: Ability to trade";
    };
}

function closeItemMenu() {
    itemMenuContainer.style.display = "none";
}

function itemMenu(item, target) {
    selectedItem = item;
    itemMenuTitle.textContent = "Are you sure you'd like to sell " + item.title + " for " + item.sellsfor + " coins?";
    sellButton.addEventListener("click", () => sellItem(item, target));
    itemMenuContainer.style.display = "flex";
}