// Name : Mohamed Lamine Tourki
// Date : 11/20/2025 

// Mood Changer using event delegation on the document

// Step 1: Get the mood display paragraph
const moodDisplay = document.getElementById("moodDisplay");

// Step 2: Make an object that stores each mood's colors and message
const moods = {
    happy: {
        bg: "#ff9800",
        text: "#3e2723",
        message: "Pumpkin spice everything!"
    },
    calm: {
        bg: "#90caf9",
        text: "#0d47a1",
        message: "Relax and breathe."
    },
    excited: {
        bg: "#ff1744",
        text: "#ffffff",
        message: "Let’s go! So much energy!"
    },
    chill: {
        bg: "#b2dfdb",
        text: "#004d40",
        message: "Just chilling..."
    },
    mysterious: {
        bg: "#212121",
        text: "#ffffff",
        message: "Something feels mysterious..."
    },
    // Bonus: reset button
    reset: {
        bg: "#ffffff",
        text: "#000000",
        message: "Choose a mood..."
    }
};

// Step 3: One click listener for the whole document
document.addEventListener("click", function(event) {

    // Step 3 check: Make sure the click was on a mood button
    if (event.target.classList.contains("mood-btn")) {

        // Step 4: Get which mood the user clicked
        const mood = event.target.getAttribute("data-mood");
        const config = moods[mood];

        // Step 5: Change the page with the mood settings
        document.body.style.backgroundColor = config.bg;
        document.body.style.color = config.text;
        moodDisplay.textContent = config.message;
    }
});

// Step 6: Final cleanup is done. All steps included.
