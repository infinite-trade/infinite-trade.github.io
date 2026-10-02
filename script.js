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
                instantUse: false,
                useId: 0,
            },
            "Golden Ham": {
                price: 20,
                id: 2,
                sells: true,
                sells: true,
                sellsforSC: 50,
                sellsfor: 100,
                usable: true,
                instantUse: false,
                useId: 1,
            },
            "Expired Bacon": {
                price: 1,
                id: 3,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: true,
                instantUse: false,
                useId: 2,
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
            usable: true,
            instantUse: false,
            useId: 3,
        },
        priority: 1
    },

    "The creator": {
        subtitle: "The creator of Infinite Trade",
        lootPool: {
            "FFXIV Game Disc": {
                price: 0,
                id: 5,
                sells: true,
                sellsforSC: false,
                sellsfor: 10,
                usable: true,
                instantUse: false,
                useId: 4,
            },
            "PlayStation 2 Slim": {
                price: 500,
                id: 6,
                sells: true,
                sellsforSC: 20000,
                sellsfor: 800,
                usable: true,
                instantUse: false,
                useId: 17,
            },
            "PC Advice": {
                price: 10,
                id: 7,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: true,
                instantUse: false,
                useId: 6,
            },
            "Infinite Trade Advice": {
                price: 5,
                id: 32,
                sells: false,
                sellsfor: 5,
                usable: true,
                instantUse: false,
                useId: 17
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
            instantUse: false,
            useId: 7,
        },
        priority: 1
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
                instantUse: false,
                useId: 8,
            },
            "6 or 7 social credits": {
                price: 6,
                id: 10,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
                instantUse: true,
            },
            "Maths homework advice": {
                price: 15,
                id: 11,
                sells: true,
                sellsforSC: 5,
                sellsfor: 1,
                usable: true,
                instantUse: false,
                useId: 9,
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
            instantUse: true,
        },
        priority: 2
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
                instantUse: true,
            },
            "Navy application": {
                price: -10,
                id: 14,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
                instantUse: true,
            },
            "Army application": {
                price: -10,
                id: 15,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
                instantUse: true,
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
            instantUse: false,
            useId: 10,
        },
        priority: 3
    },

    "Artem": {
        subtitle: "The CEO of Temu",
        lootPool: {
            "Weathered chess board": {
                price: 10,
                id: 17,
                sells: true,
                sellsforSC: -12,
                sellsfor: 1,
                usable: true,
                instantUse: false,
                useId: 11,
            },
            "Weathered Hat": {
                price: 3,
                id: 18,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
                instantUse: false,
            },
            "Weathered tennis racket": {
                price: 10,
                id: 19,
                sells: true,
                sellsforSC: false,
                sellsfor: 50,
                usable: true,
                instantUse: false,
                useId: 12,
            },
            "Chess advice": {
                price: 0,
                id: 20,
                sells: false,
                sellsforSC: false,
                sellsfor: 5,
                usable: true,
                instantUse: false,
                useId: 13,
            },
            "Unstable SMP summary": {
                price: 0,
                id: 21,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: true,
                instantUse: false,
                useId: 14,
            },
            "Politics advice": {
                price: "",
                priceSC: 10,
                id: 22,
                sells: true,
                sellsforSC: -10,
                sellsfor: 0,
                usable: true,
                instantUse: false,
                useId: 15,
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
            instantUse: true,
        },
        priority: 5,
    },

    "Elon Musk": {
        subtitle: "This is Elon Musk. Tesla co founder and CEO",
        lootPool: {
            "Starlink standart 4 dish": {
                price: 349,
                id: 24,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
                instantUse: false,
            },
            "Tesla Model Y": {
                price: 50000,
                id: 25,
                sells: true,
                sellsfor: 70000,
                sellsforSC: 99999,
                usable: false,
                instantUse: false,
            },
            "CyberCoffee": {
                price: 5,
                id: 26,
                sells: true,
                sellsfor: 7,
                sellsforSC: 50,
                usable: false,
                instantUse: false,
            },
            "CyberMug": {
                price: 80,
                id: 27,
                sells: true,
                sellsfor: 80,
                sellsforSC: 100,
                usable: false,
                instantUse: false,
            }
        },
        rareLoot: {
            title: "Tesla optimus",
            price: 30000,
            id: 28,
            rareLootChance: 10,
            sells: true,
            sellsfor: 50,
            usable: true,
            instantUse: false,
            useId: 10,
        },
        priority: 2
    },
    "Grandma": {
        subtitle: "No nintendos in my household!",
        lootPool: {
            "Cookie": {
                price: 0,
                id: 29,
                sells: true,
                sellsforSC: false,
                sellsfor: 2,
                usable: false,
                instantUse: false,
                useId: 11
            },
            "Dirty dishes": {
                price: -2,
                id: 30,
                sells: false,
                sellsforSC: false,
                sellsfor: 0,
                usable: false,
                instantUse: false,
                useId: 12
            }
        },
        rareLoot: {
            title: "Old phone",
            price: 5,
            id: 31,
            rareLootChance: 10,
            sells: true,
            sellsforSC: false,
            sellsfor: 50,
            usable: false,
            instantUse: false,
            useId: 10,
        },
        priority: 3
    },
    "Fastfood worker": {
        subtitle: "Hamburger",
        lootPool: {
            "Hamburger": {
                price: 7,
                id: 33,
                sells: false,
                sellsfor: 5,
                sellsforSC: false,
                usable: true,
                instantUse: false,
                useId: 18
            },
            "Fries": {
                price: 5,
                id: 34,
                sells: false,
                sellsfor: 5,
                sellsforSC: false,
                usable: true,
                instantUse: false,
                useId: 19
            },
            "Cheeseburger": {
                price: 8,
                id: 35,
                sells: false,
                sellsfor: 5,
                sellsforSC: false,
                usable: true,
                instantUse: false,
                useId: 20
            },
            "Soda": {
                price: 5,
                id: 36,
                sells: false,
                sellsfor: 3,
                sellsforSC: false,
                usable: false,
                instantUse: false
            }
        },
        rareLoot: {
            title: "Old phone",
            price: 5,
            id: 31,
            rareLootChance: 10,
            sells: true,
            sellsforSC: false,
            sellsfor: 50,
            usable: false,
            instantUse: false,
            useId: 10,
        },
        priority: 1
    }
    // "Electronics store salesman"
};

let exchangeRateSCPer1coin = 10;

const armyClasses = ["Servant 3rd Class", "Servant 2nd Class", "Servant 1st Class", "Soldier", "Lieutenant", "Captain", "Developer", "Donald Trump", "Joe Biden", "Barack Obama", "George Bush", "Error", "MrBeast", "Elon Musk"];
const armyClassPrices = [150, 500, 750, 1000, 1500, 2000, 2500, 3000, 4000, 5000, 6000, 7000, 10000, 15000];

const PCAdvices = ["Use intel 14th gen and DDR4 RAM", "I use Arch btw", "I use Windows Vista btw", "Onedrive is slow and is not worth it!", "The best type of storage is Blu rays and DVDs", "Only good PCs and PC parts are made by Asus"];
const artyomCasinoGiftCards = ["AbobaSMP", "Beta"];
const mathEquasions = ["π = 3.14159265359", "e = 2.71828182846", "2 + 2 = 5", "Why was 6 fraid of 7? Because 7 ate nine!"];
const chessAdvices = ["DA ROOK", "Git gud", "Play more chess!"];
const politicsAdvices = ["Bro, every country is wrong atm"];

const useFunctionBridge = ["eat('10x Pork')", "goldenHam()", "eatPoison('Expired Bacon')", "eternalOink()", "ffxivActivation()", "PS2MenuActivation()", "PCAdvice()", "artyomCasinoGiftCard()", "mathsStuff('Weathered Maths Notebook', '6 7 Kid')", "mathsStuff('Weathered Maths Notebook', '6 7 Kid')", "bingChilling()", "chessBoardActivation()", "tennisGame()", "chessAdvice()", "smpSummary()", "politicsAdvice()", "PS2Menu()", "gameAdvice()", "eat('Hamburger')", "eat('Fries')", "eat('Cheeseburger')"];

const version = "Infinite Trade alpha v0.6.2α";

// Variables

let isDataMissing = false;
let inventory = [];
let traderReward;
let coinsAmount = 10;
let socialCreditsAmount = 0;
let traderRewardRNG;
let armyActivated = false;
let navyActivated = false;
let armyOpen = false;
let inventoryOpen = false;
let armyClass = armyClasses[0];
let currentArmyClassNo = 0;
let armyButtonClicked = 0;
let selectedItem;
let selectedTarget;
let useAttempts = 0;
let eternalOinkActivated = false;
let isEventActive = false;
let wasEventNotificationViewed = false;
let goldenHamTimesUsed = 0;
let cheated = false;
let wasUpdated = false;

// Saved variables & on DOM load

const buttonl1 = document.getElementById("buttonl1");
const buttonl2 = document.getElementById("buttonl2");
const inventoryList = document.getElementById("inventoryList");
const armyMenu = document.getElementById("armyMenu");
const armyClassDisplay = document.getElementById("armyClass");
const armyTitle = document.getElementById("armyTitle");
const armyStoreTitle = document.querySelector(".armyStoreTitle");
const quitArmyButton = document.getElementById("quitArmyButton");
const armyInterface = document.getElementById("armyInterface");
const armyTitleContainer = document.getElementById("armyTitleContainer");
const armyHelp = document.querySelector(".armyHelp");

// let savedVariableList = ["inventory", "coinsAmount", "socialCreditsAmount", "armyActivated", "navyActivated", "currentArmyClassNo", "eternalOinkActivated", "wasEventNotificationViewed", "goldenHamTimesUsed"];
// let defaultValueList = [[], 10, 0, false, false, 0, false, false, 0];

function loadData() {
    let loadedInventory = localStorage.getItem("inventory");
    if (loadedInventory != null) {
        console.log(JSON.parse(loadedInventory));
        inventory = JSON.parse(loadedInventory);
        if (inventory.length != 0) {
            buttonl2.style.display = "block";
            console.log("Inventory data detected");
            for (let i = 0; i < inventory.length; i++) {
                let button = document.createElement("button");
                // traderReward = traderData.lootPool[lootKeys[traderRewardRNG]];
                button.className = "inventory-button";
                button.textContent = inventory[i].title;
                button.id = "inventoryButtonId" + i;
                inventoryList.append(button);
                const purchasedItem = inventory[i];
                const newButton = document.getElementById("inventoryButtonId" + i);
                newButton.addEventListener("click", () => itemMenu(purchasedItem, newButton));
            };
        };
    };
    let loadedCoinsAmount = localStorage.getItem("coinsAmount");
    if (loadedCoinsAmount == null) {
        isDataMissing = true;
    }
    else {
        coinsAmount = Number(loadedCoinsAmount);
    };

    let loadedSocialCreditAmount = localStorage.getItem("socialCreditsAmount");
    if (loadedSocialCreditAmount == null) {
        isDataMissing = true;
    }
    else {
        socialCreditsAmount = Number(loadedSocialCreditAmount);
    };

    let loadedArmyActivated = localStorage.getItem("armyActivated");
    if (loadedArmyActivated == "1") {
        armyActivated = true;
        buttonl1.style.display = "block";
        
    }
    else if (loadedArmyActivated == "0") {
        armyActivated = false;
    }
    else {
        isDataMissing = true;
    };

    let loadedNavyActivated = localStorage.getItem("navyActivated")
    if (loadedNavyActivated == "1") {
        navyActivated = true;
        armyMenu.style.backgroundColor = "#000080";
        buttonl1.textContent = "Navy menu";
        armyTitle.textContent = "Navy menu";
        armyTitleContainer.style.backgroundColor = "#000080";
        armyTitle.style.backgroundColor = "#000080";
        armyStoreTitle.textContent = "Navy store";
        quitArmyButton.textContent = "Exchange 100 coins to leave the Navy"
        armyInterface.style.color = "#fff";
        armyStoreTitle.style.color = "#fff";
        buttonl1.style.display = "inline-block";
    }
    else if (loadedNavyActivated == "0") {
        navyActivated = false;
    }
    else {
        isDataMissing = true;
    };

    let loadedCurrentArmyClassNo = localStorage.getItem("currentArmyClassNo");
    if (loadedCurrentArmyClassNo == null) {
        isDataMissing = true;
    }
    else {
        currentArmyClassNo = loadedCurrentArmyClassNo;
        armyClass = armyClasses[loadedCurrentArmyClassNo];
    };

    let loadedEternalOinkActivated = localStorage.getItem("eternalOinkActivated");
    if (loadedEternalOinkActivated == null) {
        isDataMissing = true;
    }
    else {
        eternalOinkActivated = Number(loadedEternalOinkActivated);
    };

    let loadedWasEventNotificationViewed = localStorage.getItem("wasEventNotificationViewed");
    if (loadedWasEventNotificationViewed == "0") {
        wasEventNotificationViewed = false;
    }
    else if (loadedWasEventNotificationViewed == "1") {
        wasEventNotificationViewed = true;
    }
    else {
        isDataMissing = true;
    };

    let loadedGoldenHamTimesUsed = localStorage.getItem("goldenHamTimesUsed");
    if (loadedGoldenHamTimesUsed == null) {
        isDataMissing = true;
    }
    else {
        goldenHamTimesUsed = Number(loadedGoldenHamTimesUsed);
    }

    let loadedVersion = localStorage.getItem("previousVersion");
    if (loadedVersion == version) {
        wasUpdated = false;
    }
    else {
        wasUpdated = true;
    };

    if (isDataMissing == true) {
        console.log("%c Some data was missing or corrupted and had been reset to default values. If you are playing this game for the 1st time or are playing on an experimental/unstable build, please ignore this message", 'color: #ff0000');
    }
    else {
        console.log("Saved data loaded successfully");
    }
}

loadData()

console.log("<< Welcome to Infinite trade >>");


if (isDataMissing == true || wasUpdated == true) {
    console.log("Infinite trade updated");
    alert("Infinite Trade was updated")
    wasUpdated = false;
};

// let inventory = [];
// let coinsAmount = 10;
// let socialCreditsAmount = 0;
// let armyActivated = false;
// let navyAcivated = false;
// let armyClass = armyClasses[0];
// let currentArmyClassNo = 0;
// let eternalOinkActivated = false;
// let wasEventNotificationViewed = false;



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
const inventoryMenu = document.getElementById("inventoryMenu");
const itemMenuTitle = document.getElementById("itemMenuTitle");
const sellButton = document.getElementById("sellButton");
const itemMenuContainer = document.getElementById("itemMenu");
const useButton = document.getElementById("useButton");
const armyClassPurchase = document.getElementById("armyClassPurchase");
const coinsPurchaseButton = document.getElementById("coinPurchaseButton");
const dataDeletionMenu = document.getElementById("dataDeletionMenu");
const dataDeletionButton = document.getElementById("dataDeletionButton");
const homeButton = document.getElementById("homeButton");
const settingsMenu = document.getElementById("settings");
const settingsClose = document.getElementById("settingsClose");
const openDataDeletionMenuButton = document.getElementById("openDataDeletionMenuButton");
const versionText = document.getElementById("version");
const settingsFooter = document.getElementById("settings-footer");

// Declaring buttons
// const buttonl1 = document.getElementById("buttonl1");
// const buttonl2 = document.getElementById("buttonl2");
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

// DOM Load 2

versionText.textContent = version;
settingsFooter.textContent = version;

if (coinDisplay) {
    coinDisplay.textContent = "Coins: " + coinsAmount;
}
if (socialCreditDisplay) {
    socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
}

// Use functions

function eat(food) {
    alert("You eat " + food + " giving you just enough energy to earn 10 coins");
    coinsAmount += 10;
    coinDisplay.textContent = "Coins: " + coinsAmount;
};

function eatPoison(food) {
    alert("You eat " + food + " (which you really regret and pay doctors all your money for treatment and somehow still get into debt)");
    coinsAmount = -10;
    coinDisplay.textContent = "Coins: " + coinsAmount;
};

function eternalOink() {
    alert("John Pork oinks and accidentally reveals more of his pictures, causing you to realize the purpose of life, and by becoming a higher specie do you realize a way to become rich AND be respect, getting you 12 social credits and 3 coins");
    coinsAmount += 3;
    coinDisplay.textContent = "Coins: " + coinsAmount;
    socialCreditsAmount += 12;
    socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
}

function ffxivActivation() {
    buttonr2.style.display = "block";
    alert("Thank you for purchasing Final Fantasy 14 Online. Now you can access FFXIV! ;)");
}

function PS2MenuActivation() {
    buttonr3.style.display = "block";
    alert("Welcome to PlayStation! Please press the turn on PS2 button to proceed");
}

function PCAdvice() {
    let currentPCAdvice = "PC Advice: " + PCAdvices[Math.floor(Math.random() * PCAdvices.length)];
    alert(currentPCAdvice);
    coinsAmount += 15;
    coinDisplay.textContent = "Coins: " + coinsAmount
}

function artyomCasinoGiftCard() {
    alert('Your gift card code: "' + artyomCasinoGiftCards[Math.floor(Math.random() * artyomCasinoGiftCards.length)] + '"');
}

function mathsStuff(subject, source) {
    let currentMathAdviceNo = Math.floor(Math.random() * mathEquasions.length);
    if (currentMathAdviceNo == 1) {
        new Audio('Media/E.mp3').play();
    };
    alert("You open the " + subject + " " + source + " gave you, and find " + mathEquasions[currentMathAdviceNo]);
};

function bingChilling() {
    socialCreditsAmount += 9999999999999999;
    socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    alert("You Eat Bing Chilling, and become a higher level specie. Infinite social credits achieved. 成功率：100%。你現在對政府來說立於不敗之地，因為你的社會信用比偉大的習近平還要高。");
    new Audio('Media/bing-chilling.mp3').play();
    setTimeout("new Audio('Media/taco-bell-bong-sfx.mp3').play()", 2000);
};

function chessBoardActivation() {
    window.open("https://www.chess.com/play/computer/");
};

function tennisGame() {
    if (Math.floor(Math.random() * 2) == 1) {
        alert("You attempt playing tennis with the pros, but you lose the game, causing you to lose 150 social credits. Then, you accidentally get injured by the ball, and you spend all your money on doctor, and somehow still end up in a debt");
        socialCreditsAmount -= 150;
        coinsAmount = -10;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }
    else {
        alert("You attempt playing tennis with the world champion, AND YOU WIN, earning you 20000 social credits and 150 coins");
        socialCreditsAmount += 20000;
        coinsAmount += 150;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    };
};

function chessAdvice() {
    alert(chessAdvices[Math.floor(Math.random()*chessAdvices.length)]);
};

function politicsAdvice() {
    alert(politicsAdvices[Math.floor(Math.random()*politicsAdvices.length)]);
};

function smpSummary() {
    socialCreditsAmount -= 15;
    socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    coinsAmount = 0;
    coinDisplay.textContent = "Coins " + coinsAmount;
    alert("So basically, long story short, this guy killed that guy and then they did this and that [you fall asleep, and when you wake up, you find your wallet containing 15 coins being stolen]");
};

function goldenHam() {
    alert("The golden ham you are holding is sparkling with gold. It immediately gives you 500 social credits, and the moment you eat it you triple the amount of social credits you had. Then, you find that it had sprinkled with coins this entire time and earn 200 coins. But then you look in your bank account and see that your wallet was TRIPLED");
    socialCreditsAmount *= 3;
    socialCreditsAmount += 500;
    goldenHamTimesUsed = goldenHamTimesUsed + 1;
    socialCreditsAmount /= goldenHamTimesUsed;
    socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    goldenHamTimesUsed = goldenHamTimesUsed + 1;
    coinsAmount *= 2;
    coinsAmount += 200;
    coinsAmount /= goldenHamTimesUsed;
    coinDisplay.textContent = "Coins: " + coinsAmount;
    traders["John Pork"].lootPool["Golden Ham"].price *= goldenHamTimesUsed;
};

function gameAdvice() {
    alert("Basically, use logic, buy items with care, and don't forget to NOT buy dumb items or there might be consequences. Thank you for playing btw");
};

// Main script

// let savedVariableList = ["inventory", "coinsAmount", "socialCreditsAmount", "armyActivated", "navyActivated", "currentArmyClassNo", "eternalOinkActivated", "wasEventNotificationViewed", "goldenHamTimesUsed"];

function saveData() {
    localStorage.setItem("coinsAmount", String(coinsAmount));
    localStorage.setItem("socialCreditsAmount", String(socialCreditsAmount));
    localStorage.setItem("goldenHamTimesUsed", String(goldenHamTimesUsed));
    localStorage.setItem("currentArmyClassNo", String(currentArmyClassNo));
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("previousVersion", version);

    if (armyActivated == true) {
        localStorage.setItem("armyActivated", "1");
    }
    else {
        localStorage.setItem("armyActivated", "0");
    }

    if (navyActivated == true) {
        localStorage.setItem("navyActivated", "1");
    }
    else {
        localStorage.setItem("navyActivated", "0");
    }
    
    if (eternalOinkActivated == true) {
        localStorage.setItem("eternalOinkActivated", "1");
    }
    else {
        localStorage.setItem("eternalOinkActivated", "0");
    }

    if (wasEventNotificationViewed == true) {
        localStorage.setItem("wasEventNotificationViewed", "1");
    }
    else {
        localStorage.setItem("wasEventNotificationViewed", "0");
    };
}

saveData()

function cheatCheck() {
    for (i=0; i <= savedVariableList.length; i++) {
        if (window[savedVariableList[i]] != localStorage.getItem(savedVariableList[i])) {
            cheated = true;
            console.log(savedVariableList[i], window[savedVariableList[i]], localStorage.getItem(savedVariableList[i]))
        }
        else {
            console.log(savedVariableList[i], window[savedVariableList[i]], localStorage.getItem(savedVariableList[i]))
        }
    }
    if (cheated == true) {
        alert("You are a CHEATER! I mean, I just don't get you; why are you trying to ruin the fun for yourself? Anyways, press OK to delete all data")
    }
    else {
        alert("not cheated")
    }
}

// cheatCheck();

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


function addSocialCredits(amount) {
    socialCreditsAmount += amount;
    socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
}

function inventoryCheck() {
    if (eternalOinkActivated == true) {
        alert("John pork oinks");
        coinsAmount += 3;
        socialCreditsAmount += 12;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
    }


    if (hasItem(13)) {
        // alert("Success");
        socialCreditsAmount += 10;
        socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        inventory = removeItem(13);
    };
    if (hasItem(5)) {
        let ffxivAmount = 0;
        for (i = 0; i < inventory.length; i++) {
            if (inventory[i].id == 5) {
                ffxivAmount += 1;
            }
        }
        for (i = 0; i < ffxivAmount; i++) {
            socialCreditsAmount += 999;
            alert("Thank you for purchasing Final Fantasy 14 Online");
            socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        }
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
        buttonl1.style.display = "inline-block";
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
        buttonl1.style.display = "inline-block";
    }
    if (hasItem(10)) {
        let RNGTemp = Math.floor(Math.random() * 2);
        // console.log(RNGTemp);
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
        else if (hasItem(14) && navyActivated == false) {
            buttonl1.style.display = "inline-block";
            armyActivated = true;
            alert("Thank you for applying to national navy! You are now obligated to serve for the coin and the country for the grand pay of 10 coins. Clicking Ok in this prompt means that you accept giving up your trading business and working for navy as the national generator clicker until the time limit will end");
            navyActivated = true;
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

// let traderTitle;
// let trader;

function tradeText() {
    let trader = Math.floor(Math.random() * (Object.keys(traders).length));
    let traderTitle = (Object.keys(traders)[trader]);
    // console.log("Current trader [DEBUG]" + traderTitle);
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
        // console.log(lootKeys)
        // console.log(traderTitle)
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
        // console.log(traderReward);
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
    if ((armyActivated == true || navyActivated == true) && (armyClass == armyClasses[0] || armyClass == armyClasses[1] || armyClass == armyClasses[2] || armyClass == armyClasses[3] || armyClass == armyClasses[4])) {
        // console.log(armyActivated + ", " + navyActivated)
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
            // console.log(traderReward);
            // console.log(inventory);
            localStorage.setItem("inventory", inventory);
            localStorage.setItem("coinsAmount", coinsAmount);
            localStorage.setItem("socialCreditsAmount", socialCreditsAmount);
            inventoryCheck();
        }
        setTimeout(tradeAppear, 1000);
    }
    saveData();
};

function closePopups() {
    armyMenu.style.display = "none";
    inventoryMenu.style.display = "none";
    settingsMenu.style.display = "none";
}

function armyMenuOpening() {
    if (isEventActive == "War") {
        armyClassPurchase.textContent = "Exchange " + armyClassPrices[currentArmyClassNo]*10 + " social credits for a new class";
    }
    else {
        armyClassPurchase.textContent = "Exchange " + armyClassPrices[currentArmyClassNo] + " social credits for a new class";
    }
    inventoryOpen = false;
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

function chessClubMenu() {
    alert("Coming soon!");
    console.log("Chess club menu clicked!");
};

function PS2Menu() {
    alert("Coming soon!");
    console.log("PS2 Menu clicked!");
}

function armyButton() {
    if (isEventActive != "War") {
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
    }}
    else {
        addSocialCredits(2);
    };
    
    updateClassInfo();
};

function quitArmy() {
    if (isEventActive == "War") {
        alert("Sorry mate, it's war, we can not lose any of our soldiers")
    }
    else if (coinsAmount >= 100) {
        coinsAmount -= 100;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        alert("Thank you for your service 🫡. Now, GET OUT")
        armyActivated = false;
        navyActivated = false;
        armyOpen = false;
        if (hasItem(15)) {
            // console.log(getItem(15))
            // console.log(removeItem(15))
            inventory = removeItem(15);
        }
        if (hasItem(14)) {
            // console.log(getItem(14))
            // console.log(removeItem(14))
            inventory = removeItem(14);
        }
        armyMenu.style.display = "none";
        buttonl1.style.display = "none";
    }
    else {
        alert("Insufficient funds!")
    }
    saveData();
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
    saveData();
}

function inventoryOpening() {
    if (inventoryOpen == false) {
        armyOpen = false;
        armyMenu.style.display = "none";
        inventoryMenu.style.display = "flex";
        inventoryOpen = true;
    }
    else {
        inventoryMenu.style.display = "none";
        inventoryOpen = false;
    }
}

function buyNewRank() {
    if (armyClass == armyClasses[armyClasses.length-1]) {
        alert("As bright as your flame burns, there are no current promotions left. Wait for the next update ;)");
    }
    else {
        let currentArmyPrice = armyClassPrices[currentArmyClassNo];
        if (isEventActive == "War") {
            currentArmyPrice *= 10;
        }
        if (socialCreditsAmount >= currentArmyPrice) {
            socialCreditsAmount -= currentArmyPrice;
            socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
            currentArmyClassNo += 1;
            armyClass = armyClasses[currentArmyClassNo];
            armyClassDisplay.textContent = "Current class: " + armyClass; 
            if (isEventActive == "War") {
                armyClassPurchase.textContent = "Exchange " + armyClassPrices[currentArmyClassNo]*10 + " social credits for a new class";
            }
            else {
                armyClassPurchase.textContent = "Exchange " + armyClassPrices[currentArmyClassNo] + " social credits for a new class";
            }
            updateClassInfo();
        }
        else {
            alert("Insufficient funds!");
        }
    }
    saveData();
}

function sellItem() {
    // console.log(selectedItem);
    // console.log(selectedItem.sellsfor);
    if (selectedItem.id == 4) {
        eternalOinkActivated = false;
    }
    if (selectedItem.sells == true) {
        itemMenuContainer.style.display = "none";
        coinsAmount += selectedItem.sellsfor;
        coinDisplay.textContent = "Coins: " + coinsAmount;
        if (selectedItem.sellsforSC != false) {
            socialCreditsAmount += selectedItem.sellsforSC;
            socialCreditDisplay.textContent = "Social credits: " + socialCreditsAmount;
        }
        inventory.pop(getItem(selectedItem.id));
        selectedTarget.remove();
    }
    else {
        alert("Unsellable item");
    }
    saveData();
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
    }
    else {
        armyHelp.textContent = "Next class will unlock: ???"
    };
}

function closeItemMenu() {
    itemMenuContainer.style.display = "none";
    sellButton.removeEventListener("click", sellItem);
    useButton.removeEventListener("click", useItem);
}

function useItem() {
    // console.log(selectedItem);
    if (selectedItem.instantUse == true) {
        useAttempts += 1;
        if (useAttempts == 1) {
            alert("The item was already used. Press use again to discard the item.");
        }
        else {
            itemMenuContainer.style.display = "none";
            inventory.pop(getItem(item.id));
            selectedTarget.remove();
            alert("Item discarded");
        };
    }
    else if (selectedItem.usable == true) {
        // alert("Item is usable, but the use is... Coming soon! Stay tuned! Debug: Clicked item: " + item.title);
        let functionExecute = useFunctionBridge[selectedItem.useId];
        // console.log(functionExecute);
        eval(functionExecute);
        itemMenuContainer.style.display = "none";
        if (selectedItem.useId != 3) {
            inventory.pop(getItem(selectedItem.id));
            selectedTarget.remove();
        };
    }
    else {
        alert("Item is not usable!");
    };
    saveData();
}

function itemMenu(item, target) {
    // console.log(item);
    useAttempts = 0;
    // console.log(item);
    selectedItem = item;
    selectedTarget = target;
    // console.log(selectedItem);
    itemMenuTitle.textContent = "Are you sure you'd like to sell " + item.title + " for " + item.sellsfor + " coins?";
    sellButton.addEventListener("click", sellItem);
    useButton.addEventListener("click", useItem);
    itemMenuContainer.style.display = "flex";
}

function ffxivMenu() {
    alert("Coming soon!");
    console.log("FFXIV Menu clicked!");
};

function settingsOpen(show) {
    closePopups();
    if (show == true) {
        settingsMenu.style.display = "block";
    }
};

buttonl15.addEventListener("click", () => { settingsOpen(true) });
settingsClose.addEventListener("click", () => { settingsOpen(false) });
openDataDeletionMenuButton.addEventListener("click", () => { dataDeletionMenu.style.display = "flex" });

function dataDeletion(answer) {
    if (answer == true) {
        localStorage.clear();
        console.log("Data deleted");
        alert("Data deleted");
        location.reload()
    };

    dataDeletionMenu.style.display = "none";    
};

dataDeletionButton.addEventListener("click", () => { dataDeletion(true) } );
homeButton.addEventListener("click", () => { dataDeletion(false) } );

function war() {
    let time = new Date();
    let endTime = new Date(2026, 8, 18, 0, 0, 0, 0);
    let timeUntilEnd = endTime - time;
    let displayTimeUntilEnd = timeUntilEnd;
    let displayTimeUntilEndMeasurement = "ms";

    if (timeUntilEnd >= 1000) {
        displayTimeUntilEnd /= 1000;
        displayTimeUntilEndMeasurement = "s";
    }
    if (displayTimeUntilEnd >= 60 && displayTimeUntilEndMeasurement == "s") {
        displayTimeUntilEnd /= 60;
        displayTimeUntilEndMeasurement = "min";
    }
    if (displayTimeUntilEnd >= 60 && displayTimeUntilEndMeasurement == "min") {
        displayTimeUntilEnd /= 60;
        displayTimeUntilEndMeasurement = "h";
    }
    if (displayTimeUntilEnd >= 24 && displayTimeUntilEndMeasurement == "h") {
        displayTimeUntilEnd /= 24;
        displayTimeUntilEndMeasurement = " days";
    }

    if (timeUntilEnd < 0 && timeUntilEnd > -5000 || timeUntilEnd < 0 && wasEventNotificationViewed == true) {
        isEventActive = false;
        coinsPurchaseButton.textContent = "Exchange 10 social credits for 1 coin";
        exchangeRateSCPer1coin = 10;
        console.log("<< The war event has concluded. >> We thank you for your participation");
        wasEventNotificationViewed = false;
        saveData();
        alert("War had ended");
    }
    else if (timeUntilEnd > 0) {
        console.log("<< War event is currently running >> and will end in " + displayTimeUntilEnd + displayTimeUntilEndMeasurement + ", at " + endTime)
        
        coinsPurchaseButton.textContent = "Exchange 100 social credits for 1 coin";
        exchangeRateSCPer1coin *= 10;
        if (wasEventNotificationViewed == false) {
            wasEventNotificationViewed = true;
            saveData();
            isEventActive = "War";
            alert("WAR HAS STARTED!!");
            setTimeout(function () { war(); }, timeUntilEnd);
        }
    }
}

war()


// six seveeeeeen