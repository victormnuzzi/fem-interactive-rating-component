
// Rating

let selectedNumber;
function selectedRating(number) {
    const selectedCircle = document.getElementById(`rating-circle${number}`).style.backgroundColor;
;
    if (selectedNumber == undefined) {
        // Change the selected circle and font color
        document.getElementById(`rating-circle${number}`).style.backgroundColor = "hsl(217, 12%, 63%)";
        document.getElementById(`number${number}`).style.color = "white";

        selectedNumber = number;
    } else {
        // Reset the previously selected circle and font color
        document.getElementById(`rating-circle${selectedNumber}`).style.backgroundColor = "#363D46";
        document.getElementById(`number${selectedNumber}`).style.color = "hsl(217, 12%, 63%)";
        
        // Change the selected circle and font color
        document.getElementById(`rating-circle${number}`).style.backgroundColor = "hsl(217, 12%, 63%)";
        document.getElementById(`number${number}`).style.color = "white";
        
        selectedNumber = number;
    }
}

// Submit button

function submitRating() {
    document.getElementById("rating-state").style.display = "none";
    document.getElementById("ty-state").style.display = "flex";
    document.getElementById("selected-rating-number").textContent = `${selectedNumber}`;
}
