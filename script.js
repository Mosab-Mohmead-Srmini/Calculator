let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
    updateBackgroundColor();
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
    updateBackgroundColor();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
    updateBackgroundColor();
}

function updateBackgroundColor() {
    const display = document.getElementById("display");
    if (displayValue) {
        display.style.backgroundColor = "#eee";
    } else {
        display.style.backgroundColor = "#fff";
    }
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Enable keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key.match(/[0-9+\-*/.()]/)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    }
});
