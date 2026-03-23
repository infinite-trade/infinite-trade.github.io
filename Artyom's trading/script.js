// Config
const traders = {
    "John Pork": {
        subtitle: "The CEO of Swine",
        lootPool: ["10x Pork", "Golden Ham", "Expired Bacon"],
        rareLoot: "The eternal oink",
        rareLootChance: 2025,
        priority: 1
    },

    "Artyom": {
        subtitle: "The creator of Artyom's casino",
        lootPool: ["FFXIV Game Disc", "PlayStation 2 Slim", "PC Advice"],
        rareLoot: "Artyom casino gift card",
        rareLootChance: 729,
        priority: 2
    },

    "6-7 Kid": {
        subtitle: "the CEO of maths",
        lootPool: ["Weathered maths notebook", "6 or 7 social credits", "Maths homework advice"],
        rareLoot: "67 Social credits",
        rareLootChance: 67,
        priority: 1
    },

    "Joe Biden": {
        subtitle: "Trump's greatest enemy",
        lootPool: ["10 social credits", "Navy application", "Army application"],
        rareLoot: "Eagle",
        rareLootChance: 10,
        priority: 1
    }
};

// Variables
let inventory = [];
let traderReward;

// Constants
const offer = document.getElementById("offer");
const enterButton = document.getElementById("enter-button");
const offerName = document.getElementById("offer-name");
const offerSubtitle = document.getElementById("offer-subtitle");
const offerReward = document.getElementById("offer-reward");
const offerRewardTitle = document.getElementById("offer-reward-title");

// Main script

function tradeText() {
    let trader = Math.floor(Math.random() * (Object.keys(traders).length));
    let traderTitle = (Object.keys(traders)[trader]);
    let traderData = traders[traderTitle];
    // console.log(traderData.priority + traderTitle)
    if (traderData.priority != 1) {
        // console.log("Rare")
        if (Math.floor(Math.random() * traderData.priority) != 1) {
            // console.log("RNG failed");
            tradeText();
        };
    }
    else {
        if (Math.floor(Math.random() * traderData.rareLootChance) == 1) {
            traderReward = traderData.rareLoot;
            alert("Rare trade!");
        }
        else {
            traderReward = (traderData.lootPool[Math.floor(Math.random() * traders[traderTitle].lootPool.length)]);
        };
        // alert(traderTitle);
        offerName.textContent = traderTitle;
        offerReward.textContent = traderReward;
        offerSubtitle.textContent = traderData.subtitle;
        offerRewardTitle.textContent = traderTitle + " gives:";
    }
}

function tradeAppear() {
    enterButton.style.display = "none";
    offer.style.display = "block";
    tradeText();
}

function tradeClose() {
    offer.style.display = "none";
    setTimeout(tradeAppear, 1000);
}
