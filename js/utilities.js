// Change random background color 
function changeBgColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.backgroundColor = randomColor;
}

// Auto day and Date Update
function updateDate() {
    const today = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options).split(',');
    document.getElementById('day').innerText = formattedDate[0] + ",";
    document.getElementById('date').innerText = formattedDate[1] + formattedDate[2];
}
updateDate();

// Times format hours minutes seconds
function getFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amAndPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `at ${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${amAndPm}`;
}

// disable buttons (One time Use)
function disableButton(button) {
    button.disabled = true;
    button.classList.add("bg-gray-400", "cursor-not-allowed");
}

// converted number 
function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const convertedTextValue = parseInt(textValue);
    return convertedTextValue;
}

//  Get Just inner text 
function getTextById(id) {
    const onlyText = document.getElementById(id).innerText;
    return onlyText;
}
// Clear History 
function clearHistory() {
    document.getElementById("logContainer").innerHTML = "";
}

// Linked in blog pages 
document.getElementById('discover').addEventListener('click', function () {
    window.location.href = 'blog.html'
})
