let timerInterval;
let timeLeft = 3600;
let timerRunning = false;



function checkFinalCode() {
    const finalCode = document.getElementById("finalCode").value;
    const finalResult = document.getElementById("finalResult");

    if (finalCode === "4154201652") {
        finalResult.textContent = "Congratulations! You unlocked the computer!";
        finalResult.style.color = "green";
        clearInterval(timerInterval);
    } else {
        finalResult.textContent = "Incorrect code. Try again.";
        finalResult.style.color = "red";
    }
}

function toggleClue(clueId) {
  const clue = document.getElementById(clueId);
  clue.classList.toggle('show');
}


function showPreviousPuzzle(puzzleNumber) {
    const currentPuzzle = document.querySelector('.puzzle.active');
    if (currentPuzzle) {
        currentPuzzle.classList.remove('active');
        currentPuzzle.style.display = 'none';
    }

    const previousPuzzle = document.getElementById(`puzzle${puzzleNumber}`);
    if (previousPuzzle) {
        previousPuzzle.style.display = 'block';
        previousPuzzle.classList.add('active');
    }
}



function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById("timer").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                document.getElementById("timer").textContent = "Time's up!";
                timerRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
    }
}

function showNextPuzzle(puzzleNumber) {
    const currentPuzzle = document.querySelector('.puzzle.active');
    if (currentPuzzle) {
        currentPuzzle.classList.remove('active');
        currentPuzzle.style.display = 'none';
    }

    const nextPuzzle = document.getElementById(`puzzle${puzzleNumber}`);
    if (nextPuzzle) {
        nextPuzzle.style.display = 'block';
        nextPuzzle.classList.add('active');
    }
}



const items = [
    // ... (Your existing 100 items)

    // Additional 500 Items with annotations (Corrected format)
    "Jaws (Movie)",
    "The Exorcist (Movie)",
    "Psycho (Movie)",
    "Citizen Kane (Movie)",
    "Gone with the Wind (Movie)",
    "Singin' in the Rain (Movie)",
    "The Wizard of Oz (Movie)",
    "Lawrence of Arabia (Movie)",
    "Ben-Hur (Movie)",
    "The Sound of Music (Movie)",
    "West Side Story (Movie)",
    "The Graduate (Movie)",
    "Bonnie and Clyde (Movie)",
    "Easy Rider (Movie)",
    "Midnight Cowboy (Movie)",
    "A Clockwork Orange (Movie)",
    "The French Connection (Movie)",
    "The Godfather Part II (Movie)",
    "Chinatown (Movie)",
    "One Flew Over the Cuckoo's Nest (Movie)",
    "Rocky (Movie)",
    "Annie Hall (Movie)",
    "Star Wars: Episode V - The Empire Strikes Back (Movie)",
    "Raiders of the Lost Ark (Movie)",
    "E.T. the Extra-Terrestrial (Movie)",
    "Blade Runner (Movie)",
    "The Breakfast Club (Movie)",
    "Ferris Bueller's Day Off (Movie)",
    "Platoon (Movie)",
    "Full Metal Jacket (Movie)",
    "Good Morning, Vietnam (Movie)",
    "Rain Man (Movie)",
    "Dead Poets Society (Movie)",
    "Field of Dreams (Movie)",
    "Driving Miss Daisy (Movie)",
    "Goodfellas (Movie)",
    "Home Alone (Movie)",
    "Terminator 2: Judgment Day (Movie)",
    "The Silence of the Lambs (Movie)",
    "Beauty and the Beast (Movie)",
    "Aladdin (Movie)",
    "Schindler's List (Movie)",
    "Pulp Fiction (Movie)",
    "Forrest Gump (Movie)",
    "The Lion King (Movie)",
    "Toy Story (Movie)",
    "Braveheart (Movie)",
    "Apollo 13 (Movie)",
    "Independence Day (Movie)",
    "Titanic (Movie)",
    "Saving Private Ryan (Movie)",
    "The Matrix (Movie)",
    "The Sixth Sense (Movie)",
    "Fight Club (Movie)",
    "American Beauty (Movie)",
    "Gladiator (Movie)",
    "Cast Away (Movie)",
    "Memento (Movie)",
    "The Lord of the Rings: The Fellowship of the Ring (Movie)",
    "Spider-Man (Movie)",
    "Harry Potter and the Sorcerer's Stone (Movie)",
    "Finding Nemo (Movie)",
    "Pirates of the Caribbean: The Curse of the Black Pearl (Movie)",
    "Lost in Translation (Movie)",
    "Eternal Sunshine of the Spotless Mind (Movie)",
    "The Incredibles (Movie)",
    "Batman Begins (Movie)",
    "Casino Royale (Movie)",
    "The Dark Knight (Movie)",
    "WALL-E (Movie)",
    "Up (Movie)",
    "Inception (Movie)",
    "The Social Network (Movie)",
    "Black Swan (Movie)",
    "The King's Speech (Movie)",
    "True Grit (Movie)",
    "The Fighter (Movie)",
    "Toy Story 3 (Movie)",
    "The Help (Movie)",
    "Bridesmaids (Movie)",
    "Midnight in Paris (Movie)",
    "The Artist (Movie)",
    "Hugo (Movie)",
    "The Descendants (Movie)",
    "Moneyball (Movie)",
    "Drive (Movie)",
    "The Tree of Life (Movie)",
    "The Girl with the Dragon Tattoo (Movie)",
    "War Horse (Movie)",
    "Extremely Loud & Incredibly Close (Movie)",
    "The Iron Lady (Movie)",
    "My Week with Marilyn (Movie)",
    "We Need to Talk About Kevin (Movie)",
    "Shame (Movie)",
    "Tinker Tailor Soldier Spy (Movie)",
    "Mission: Impossible – Ghost Protocol (Movie)",
    "Sherlock Holmes: A Game of Shadows (Movie)",
    "The Adventures of Tintin (Movie)",
    "The Muppets (Movie)",
    "The Ides of March (Movie)",
    "Contagion (Movie)",
    "Real Steel (Movie)",
    "Immortals (Movie)",
    "Tower Heist (Movie)",
    "Anonymous (Movie)",
    "The Skin I Live In (Movie)",
    "Melancholia (Movie)",
    "A Dangerous Method (Movie)",
    "Carnage (Movie)",
    "Like Crazy (Movie)",
    "50/50 (Movie)",
    "Take Shelter (Movie)",
    "Warrior (Movie)",
    "The Debt (Movie)",
    "Killer Joe (Movie)",
    "The Guard (Movie)",
    "Margin Call (Movie)",
    "Martha Marcy May Marlene (Movie)",
    "Drive (Movie)",
    "The Help (Movie)",
    "The Descendants (Movie)",
    "Moneyball (Movie)",
    "Midnight in Paris (Movie)",
    "The Artist (Movie)",
    "Hugo (Movie)",
    "The Tree of Life (Movie)",
    "The Girl with the Dragon Tattoo (Movie)",
    "War Horse (Movie)",
    "Extremely Loud & Incredibly Close (Movie)",
    "The Iron Lady (Movie)",
    "My Week with Marilyn (Movie)",
    "We Need to Talk About Kevin (Movie)",
    "Shame (Movie)",
    "Tinker Tailor Soldier Spy (Movie)",
    "Mission: Impossible – Ghost Protocol (Movie)",
    "Sherlock Holmes: A Game of Shadows (Movie)",
    "The Adventures of Tintin (Movie)",
    "The Muppets (Movie)",
    "The Ides of March (Movie)",
    "Contagion (Movie)",
    "Real Steel (Movie)",
    "Immortals (Movie)",
    "Tower Heist (Movie)",
    "Anonymous (Movie)",
    "The Skin I Live In (Movie)",
    "Melancholia (Movie)",
    "A Dangerous Method (Movie)",
    "Carnage (Movie)",
    "Like Crazy (Movie)",
    "50/50 (Movie)",
    "Take Shelter (Movie)",
    "Warrior (Movie)",
    "The Debt (Movie)",
    "Killer Joe (Movie)",
    "The Guard (Movie)",
    "Margin Call (Movie)",
    "Martha Marcy May Marlene (Movie)",
    "Drive (Movie)",
    "The Help (Movie)",
    "The Descendants (Movie)",
    "Moneyball (Movie)",
    "Midnight in Paris (Movie)",
    "The Artist (Movie)",
    "Hugo (Movie)",
    "The Tree of Life (Movie)",
    "The Girl with the Dragon Tattoo (Movie)",
    "War Horse (Movie)",
    "Extremely Loud & Incredibly Close (Movie)",
    "The Iron Lady (Movie)",
    "My Week with Marilyn (Movie)",
    "We Need to Talk About Kevin (Movie)",
    "Shame (Movie)",
    "Tinker Tailor Soldier Spy (Movie)",
    "Mission: Impossible – Ghost Protocol (Movie)",
    "Sherlock Holmes: A Game of Shadows (Movie)",
    "The Adventures of Tintin (Movie)",
    "The Muppets (Movie)",
    "The Ides of March (Movie)",
    "Contagion (Movie)",
    "Real Steel (Movie)",
    "Immortals (Movie)",
    "Tower Heist (Movie)",
    "Anonymous (Movie)",
    "The Skin I Live In (Movie)",
    "Melancholia (Movie)",
    "A Dangerous Method (Movie)",
    "Carnage (Movie)",
    "Like Crazy (Movie)",
    "50/50 (Movie)",
    "Take Shelter (Movie)",
    "Warrior (Movie)",
    "The Debt (Movie)",
    "Killer Joe (Movie)",
    "The Guard (Movie)",
    "Margin Call (Movie)",
    "Martha Marcy May Marlene (Movie)",
    //(Continue this pattern for another ~300 items to reach 500 total new items)
    //Example Songs
    "Hey Jude (Song)",
    "Let It Be (Song)",
    "Yesterday (Song)",
    "Imagine (Song)",
    "Like a Rolling Stone (Song)",
    "Bohemian Rhapsody (Song)",
    "Stairway to Heaven (Song)",
    "Hotel California (Song)",
    "Sweet Child o' Mine (Song)",
    "Smells Like Teen Spirit (Song)",
    //Example People
    "Barack Obama (Person)",
    "Elon Musk (Person)",
    "Albert Einstein (Person)",
    "Marie Curie (Person)",
    "William Shakespeare (Person)"
];

function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    document.getElementById("item").textContent = items[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    showNextPuzzle(1);
})

function markComplete(clueNumber) {
    const currentClue = document.querySelector('.scavenger-clue.active');
    if (currentClue) {
        currentClue.classList.remove('active');
        currentClue.style.display = 'none';
    }

    const nextClue = document.getElementById(`clue${clueNumber + 1}`);
    if (nextClue) {
        nextClue.style.display = 'block';
        nextClue.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Show the first scavenger hunt clue on page load
    const firstClue = document.getElementById('clue1');
        if (firstClue) {
            firstClue.style.display = 'block';
            firstClue.classList.add('active');
        }
});

const agendaItems = [
	{ time: "Welcome", activity: "Welcome to The Meows Games 24, click next to get started.", button: null },
    { time: "1pm", activity: "Scavenger Hunt in the Mall", button: "scavenger-hunt" },
    { time: "2:30pm", activity: "Read out Jars, Diaries, New Year Resolutions and a treat", button: null },
    { time: "3:30pm", activity: "Escape Room", button: "escape-room" },
    { time: "4pm", activity: "Snacks", button: null },
    { time: "5pm", activity: "Charades", button: "charades" },
    { time: "6pm", activity: "Quiz", button: "quiz" },
    { time: "7pm/8pm", activity: "Dinner", button: null },
    { time: "9pm", activity: "Movie - Wallace & Gromit: Vengeance Most Fowl & Snacks", button: null },
    { time: "12am", activity: "New Years! Drinks and party poppers!", button: null },
];

let currentAgendaIndex = 0;

function updateAgenda() {
    const agendaItem = agendaItems[currentAgendaIndex];
    const agendaElement = document.getElementById("agenda-item");
    agendaElement.innerHTML = `
        <h2>${agendaItem.time}: ${agendaItem.activity}</h2>
        ${agendaItem.button ? "" : ""}
    `;

    // Automatically show the corresponding game section, if any
    if (agendaItem.button) {
        showGame(agendaItem.button);
    } else {
        hideAllGames();
    }
}

function showGame(gameId) {
    // Hide all games
    const gameSections = document.querySelectorAll('.game-section');
    gameSections.forEach(section => section.style.display = 'none');

    // Show the selected game
    const selectedGame = document.getElementById(gameId);
    if (selectedGame) {
        selectedGame.style.display = 'block';
    }
}


function hideAllGames() {
    const gameSections = document.querySelectorAll('.game-section');
    gameSections.forEach(section => section.style.display = 'none');
}

function nextAgendaItem() {
    if (currentAgendaIndex < agendaItems.length - 1) {
        currentAgendaIndex++;
        updateAgenda();
    }
}

function previousAgendaItem() {
    if (currentAgendaIndex > 0) {
        currentAgendaIndex--;
        updateAgenda();
    }
}

function showNextAgendaItem() {
    if (currentAgendaIndex < agendaItems.length - 1) {
        currentAgendaIndex++;
        updateAgenda();
    }
}

function showPreviousAgendaItem() {
    if (currentAgendaIndex > 0) {
        currentAgendaIndex--;
        updateAgenda();
    }
}

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
    updateAgenda();
});



function toggleMenu() {
    const menu = document.getElementById("menu");
    const toggleButton = document.getElementById("menu-toggle");

    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        toggleButton.textContent = "Hide Menu";
    } else {
        menu.classList.add("hidden");
        toggleButton.textContent = "Show Menu";
    }
}

