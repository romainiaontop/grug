document.addEventListener("DOMContentLoaded", function() {
    const options = [
        "We are so back",
        "I take requests for splash texts",
        "Down bad for Emulators",
        "Life Is Roblox - Drake",
        "Who's in Paris?",
        "What is your favorite angle?",
        "The Earth isn't not flat",
        "Ealgercraft Multiplayer DOESNT WORK IDIOTS",
        "Please Do Not The Cat",
        "Canny",
        "Uncanny",
        "Making the mother of all omelets here Jack. Can't fret over every egg",
        "Ultra Rare Splash Text",
        "🤫🧏‍♂️🗿",
        "Big Vanilla",
        "Jumbo Jorts",
        "Does He Know?",
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "You are not the Lisan Al Gaib",
        "Distressed Red Ball",
        "Math Helpers 2? I barely know her",
        "Slug Car",
        "We Log ur ip btw :D",
        "Dont open console",
        "You are my sunshine",
        "Good Froyo flavors when??",
        "Me everytime after the this website is blocked",
        "🐈 <-- Fred",
        "🐈‍⬛ <-- Evil Fred",
        "You like kissing boys dont you",
        "The game crashed??????",
        "Alex Parten you're not welcome here",
        "PodPopular",
        "Big Update When??",
        "Look ma no GoGuardian",
        ">:(",
        ":D",
        "6/7/2024",
        "Finals D:",
        "You arent my sunshine",
        "I was crazy once",
        "Lobotomy"
    ];

    // Fisher-Yates shuffle algorithm for shuffling the array
    function shuffle(array) {
        var currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1) * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Function to get a random option from the shuffled array
    function getRandomOption() {
        return options[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1) * options.length)];
    }

    // Shuffle options array
    shuffle(options);

    // Function to update the text content of the h3 element
    function updateH3Text() {
        const h3 = document.getElementById('random-h1');
        h3.textContent = getRandomOption();
    }

    // Call updateH3Text function to initially set the text content
    updateH3Text();
});