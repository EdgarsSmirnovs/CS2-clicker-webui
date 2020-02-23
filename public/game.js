// Change "test" to any username you'd like to start a new game
var username = "Edgars";

var socket = io.connect("https://tictactoe.info/", {transports: ['websocket']});
setupSocket();

function setupSocket() {
    // This function is called whenever a new game state is received from the server
    socket.on('gameState', function (jsonGameState) {

        var gameState = JSON.parse(jsonGameState);

        var username = document.getElementById("username");
        var gold = document.getElementById("gold");

        var shovelName = document.getElementById("shovelName");
        var shovelNumberOwned = document.getElementById("shovelNumberOwned");
        var shovelCost = document.getElementById("shovelCost");

        var excavatorName = document.getElementById("excavatorName");
        var excavatorNumberOwned = document.getElementById("excavatorNumberOwned");
        var excavatorCost = document.getElementById("excavatorCost");

        var mineName = document.getElementById("mineName");
        var mineNumberOwned = document.getElementById("mineNumberOwned");
        var mineCost = document.getElementById("mineCost");

        username.innerHTML = gameState.username
        gold.innerHTML = gameState.gold
        
        shovelName.innerHTML = gameState.equipment.shovel.name
        shovelNumberOwned.innerHTML = gameState.equipment.shovel.numberOwned
        shovelCost.innerHTML = gameState.equipment.shovel.cost

        excavatorName.innerHTML = gameState.equipment.excavator.name
        excavatorNumberOwned.innerHTML = gameState.equipment.excavator.numberOwned
        excavatorCost.innerHTML = gameState.equipment.excavator.cost

        mineName.innerHTML = gameState.equipment.mine.name
        mineNumberOwned.innerHTML = gameState.equipment.mine.numberOwned
        mineCost.innerHTML = gameState.equipment.mine.cost

        console.log(jsonGameState); //responsible for console output

        // TODO: Display the game state on your GUI
        // You must display: current gold, and the name, number owned, and cost for each type of equipment

    });
}

function initializeGame() {
    socket.emit("register", username);

    // TODO: Add any initialization code you'd like to setup your GUI
    // This function is called once when the page loads

}

// Call this function whenever the user clicks your gold button
function clickGold() {
    socket.emit("clickGold");
}

// Call this function whenever the user clicks to purchase equipment
// The parameter is the id of the equipment type to purchase
function buyEquipment(equipmentID) {
    socket.emit("buy", equipmentID);
}
