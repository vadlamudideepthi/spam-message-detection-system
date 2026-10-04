function checkSpam() {

```
let message = document.getElementById("message").value.toLowerCase();
let result = document.getElementById("resultText");

if (message.trim() === "") {
    result.innerHTML = "⚠️ Please enter a message.";
    return;
}

// Common spam words
let spamWords = [
    "free",
    "winner",
    "win",
    "won",
    "prize",
    "offer",
    "claim",
    "click",
    "urgent",
    "congratulations",
    "cash",
    "lottery",
    "reward",
    "discount",
    "bonus",
    "limited",
    "money",
    "gift",
    "selected",
    "subscribe"
];

let spamScore = 0;

// Check each spam word
spamWords.forEach(function(word) {

    if (message.includes(word)) {
        spamScore++;
    }

});

// Display result
if (spamScore >= 2) {

    result.innerHTML =
        "🚨 SPAM MESSAGE DETECTED!<br><br>" +
        "Spam Score: " + spamScore;

} else if (spamScore === 1) {

    result.innerHTML =
        "⚠️ POSSIBLY SPAM<br><br>" +
        "Spam Score: " + spamScore;

} else {

    result.innerHTML =
        "✅ NOT SPAM<br><br>" +
        "This appears to be a normal message.";
}
```

}

// Clear the message
function clearMessage() {

```
document.getElementById("message").value = "";

document.getElementById("resultText").innerHTML =
    "Enter a message to check.";
```

}

// Add example message
function setExample(text) {

```
document.getElementById("message").value = text;

checkSpam();
```

}
