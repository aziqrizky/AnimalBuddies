var audioContext = null;

function makeTone(frequency, duration, type, volume, delay) {
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        var oscillator = audioContext.createOscillator();
        var gain = audioContext.createGain();

        oscillator.type = type;
        oscillator.frequency.value = frequency;

        gain.gain.setValueAtTime(volume, audioContext.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + delay + duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(audioContext.currentTime + delay);
        oscillator.stop(audioContext.currentTime + delay + duration);
    } catch (error) {
        // Sound is optional. The website functions normally if audio is unavailable.
    }
}

function playSound(type) {
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        if (type === "click") {
            makeTone(700, 0.08, "square", 0.04, 0);

        } else if (type === "welcome") {
            makeTone(523, 0.12, "sine", 0.06, 0);
            makeTone(659, 0.12, "sine", 0.06, 0.12);
            makeTone(784, 0.18, "sine", 0.06, 0.24);

        } else if (type === "happy") {
            makeTone(523, 0.10, "triangle", 0.06, 0);
            makeTone(659, 0.10, "triangle", 0.06, 0.10);
            makeTone(880, 0.18, "triangle", 0.06, 0.20);

        } else if (type === "dog") {
            makeTone(220, 0.10, "square", 0.06, 0);
            makeTone(330, 0.10, "square", 0.06, 0.14);

        } else if (type === "cat") {
            makeTone(700, 0.18, "sine", 0.05, 0);
            makeTone(500, 0.22, "sine", 0.04, 0.18);

        } else if (type === "lion") {
            makeTone(120, 0.28, "sawtooth", 0.05, 0);
            makeTone(85, 0.35, "sawtooth", 0.05, 0.25);

        } else if (type === "bird") {
            makeTone(900, 0.09, "sine", 0.05, 0);
            makeTone(1200, 0.09, "sine", 0.05, 0.10);
            makeTone(1000, 0.14, "sine", 0.05, 0.20);

        } else if (type === "water") {
            makeTone(300, 0.20, "sine", 0.035, 0);
            makeTone(450, 0.20, "sine", 0.035, 0.18);
            makeTone(350, 0.18, "sine", 0.03, 0.36);

        } else if (type === "land") {
            makeTone(180, 0.18, "triangle", 0.05, 0);
            makeTone(260, 0.18, "triangle", 0.05, 0.18);

        } else if (type === "air") {
            makeTone(700, 0.12, "sine", 0.035, 0);
            makeTone(900, 0.15, "sine", 0.035, 0.14);
            makeTone(1100, 0.18, "sine", 0.03, 0.30);

        } else if (type === "correct") {
            makeTone(523, 0.11, "sine", 0.07, 0);
            makeTone(659, 0.11, "sine", 0.07, 0.11);
            makeTone(784, 0.16, "sine", 0.07, 0.22);

        } else if (type === "wrong") {
            makeTone(260, 0.18, "sawtooth", 0.05, 0);
            makeTone(190, 0.25, "sawtooth", 0.05, 0.18);

        } else if (type === "reset") {
            makeTone(440, 0.10, "triangle", 0.05, 0);
            makeTone(330, 0.16, "triangle", 0.05, 0.12);

        } else if (type === "celebration") {
            makeTone(523, 0.11, "sine", 0.07, 0);
            makeTone(659, 0.11, "sine", 0.07, 0.11);
            makeTone(784, 0.12, "sine", 0.07, 0.22);
            makeTone(1047, 0.25, "sine", 0.07, 0.34);
        }
    } catch (error) {
        // Keep buttons working even when browser audio is unavailable.
    }
}

function toggleMenu() {
    var nav = document.getElementById("navLinks");

    if (!nav) {
        return;
    }

    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    } else {
        nav.classList.add("show");
    }

    playSound("click");
}

function showWelcome() {
    var message = document.getElementById("welcomeMessage");

    if (message) {
        message.innerHTML = "🌟 Welcome, Animal Buddy! Keep learning and have fun!";
        message.style.color = "#5b2bbf";
        message.style.backgroundColor = "#eee6ff";
    }

    playSound("happy");
}

function showAnimal(animal) {
    var animalInfo = document.getElementById("animalInfo");

    if (!animalInfo) {
        return;
    }

    var title = "";
    var fact = "";
    var home = "";
    var sound = "click";

    if (animal === "dog") {
        title = "🐶 Dog";
        fact = "Dogs are friendly animals and are commonly kept as pets.";
        home = "Land";
        sound = "dog";

    } else if (animal === "cat") {
        title = "🐱 Cat";
        fact = "Cats are small animals and are commonly kept as pets.";
        home = "Land";
        sound = "cat";

    } else if (animal === "lion") {
        title = "🦁 Lion";
        fact = "Lions are large wild animals that live on land.";
        home = "Land";
        sound = "lion";

    } else if (animal === "elephant") {
        title = "🐘 Elephant";
        fact = "Elephants are large land animals with long trunks.";
        home = "Land";
        sound = "land";

    } else if (animal === "monkey") {
        title = "🐒 Monkey";
        fact = "Monkeys can climb trees and swing from branches.";
        home = "Land";
        sound = "land";

    } else if (animal === "fish") {
        title = "🐟 Fish";
        fact = "Fish live in water and use fins to move.";
        home = "Water";
        sound = "water";

    } else if (animal === "dolphin") {
        title = "🐬 Dolphin";
        fact = "Dolphins are water animals that live in the sea.";
        home = "Water";
        sound = "water";

    } else if (animal === "parrot") {
        title = "🦜 Parrot";
        fact = "Parrots are birds with feathers and many can fly.";
        home = "Air";
        sound = "bird";
    }

    animalInfo.innerHTML =
        "<h2>" + title + "</h2>" +
        "<p>" + fact + "</p>" +
        "<p><strong>Habitat:</strong> " + home + "</p>";

    animalInfo.style.color = "#20352e";
    animalInfo.style.backgroundColor = "#e7fbdc";

    playSound(sound);
}

function checkHabitat(answer) {
    var result = document.getElementById("habitatResult");

    if (!result) {
        return;
    }

    if (answer === "water") {
        result.innerHTML = "🎉 Correct! A dolphin lives in water.";
        result.style.color = "#168d5a";
        result.style.backgroundColor = "#d9facf";
        playSound("correct");

    } else {
        result.innerHTML = "🌟 Try again! Think about where a dolphin swims.";
        result.style.color = "#d65b18";
        result.style.backgroundColor = "#ffe0c7";
        playSound("wrong");
    }
}

function CheckAnswer() {
    var score = 0;
    var answered = 0;
    var selected;
    var i;

    for (i = 1; i <= 10; i++) {
        selected = document.querySelector('input[name="Q' + i + '"]:checked');

        if (selected) {
            answered++;

            if (selected.value === "true") {
                score++;
            }
        }
    }

    var result = document.getElementById("quizResult");
    var scoreText = document.getElementById("scoreText");
    var feedbackText = document.getElementById("feedbackText");
    var progressBar = document.getElementById("progressBar");
    var checkButton = document.getElementById("checkButton");

    if (!result || !scoreText || !feedbackText || !progressBar) {
        return;
    }

    if (answered < 10) {
        scoreText.innerHTML = "Please answer all 10 questions first.";
        feedbackText.innerHTML = "💡 Check every question before submitting.";
        feedbackText.style.color = "#d65b18";
        result.style.backgroundColor = "#ffe0c7";
        progressBar.style.width = "0%";
        result.style.display = "block";
        playSound("wrong");
        return;
    }

    var percentage = score * 10;

    scoreText.innerHTML = "Your Score: " + score + " / 10";
    progressBar.style.width = percentage + "%";

    if (score >= 8) {
        feedbackText.innerHTML = "🎉 Congratulations! You are an amazing Animal Buddy!";
        feedbackText.style.color = "#168d5a";
        result.style.backgroundColor = "#d9facf";
        playSound("celebration");

    } else if (score >= 5) {
        feedbackText.innerHTML = "👏 Good job! Keep learning and try again!";
        feedbackText.style.color = "#168de2";
        result.style.backgroundColor = "#c9efff";
        playSound("correct");

    } else {
        feedbackText.innerHTML = "🌟 Good try! Read the learning pages and try again!";
        feedbackText.style.color = "#d65b18";
        result.style.backgroundColor = "#ffe0c7";
        playSound("wrong");
    }

    var radios = document.querySelectorAll('#quizForm input[type="radio"]');

    for (i = 0; i < radios.length; i++) {
        radios[i].disabled = true;
    }

    if (checkButton) {
        checkButton.disabled = true;
    }

    result.style.display = "block";
}

function TakeQuizAgain() {
    var form = document.getElementById("quizForm");

    if (!form) {
        return;
    }

    form.reset();

    var radios = form.querySelectorAll('input[type="radio"]');
    var i;

    for (i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
    }

    var scoreText = document.getElementById("scoreText");
    var feedbackText = document.getElementById("feedbackText");
    var progressBar = document.getElementById("progressBar");
    var quizResult = document.getElementById("quizResult");
    var checkButton = document.getElementById("checkButton");

    if (scoreText) {
        scoreText.innerHTML = "";
    }

    if (feedbackText) {
        feedbackText.innerHTML = "";
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (quizResult) {
        quizResult.style.display = "none";
    }

    if (checkButton) {
        checkButton.disabled = false;
    }

    playSound("reset");
}

function showJourneyMessage() {
    var message = document.getElementById("journeyMessage");

    if (message) {
        message.innerHTML = "🏆 Well done! You completed your Animal Buddies learning journey!";
        message.style.color = "#168d5a";
        message.style.backgroundColor = "#d9facf";
    }

    playSound("celebration");
}
