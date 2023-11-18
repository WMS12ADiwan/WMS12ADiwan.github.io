// JavaScript function to start the adventure
function startAdventure() {
    // Fade out the background image
    document.getElementById("backgroundImage").style.opacity = 0;

    // Fade in the second background
    document.getElementById("secondBackground").style.opacity = 1;
    
    // Replace the button with your adventure content
    document.getElementById("startButton").style.display = "none";
    document.getElementById("game-container").style.display = "block";
}

// Variable to track the current stage of the adventure
let currentStage = 0;

// Function to progress to the next stage of the adventure
function chooseNextStage() {
    if (currentStage < 5) { // Adjust the condition based on the number of stages
        currentStage++;
        updateGame();
    } else {
        // Display a congratulatory message when the journey is completed
        document.getElementById("output").innerHTML = "<p>Congratulations! You have completed the journey.</p>";
    }
}

// Function to update the game visuals based on the current stage
function updateGame() {
    // Get the car element by its ID
    const car = document.getElementById("car");

    // Update the car position on the road
    car.style.left = (currentStage * 10 + 20) + "%"; // Adjust the position based on the number of stages

    // Update the width of the moving cell image based on the current stage
    document.getElementById("movingCell").style.width = (currentStage * 10 + 20) + "%";

    // Optional: Highlight the current stage on the road
    const stages = document.getElementsByClassName("stage");
    for (let i = 0; i < stages.length; i++) {
        // Set background color based on whether it's the current stage or not
        stages[i].style.backgroundColor = (i === currentStage) ? "#f00" : "#aaa";
    }
}
