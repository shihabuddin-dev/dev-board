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

// disable buttons 
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