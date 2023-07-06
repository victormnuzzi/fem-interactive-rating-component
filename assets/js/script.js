
// Rating
let selectedNumber;
function selectedRating(number) {
    const selectedCircle = document.getElementById(`rating-circle${number}`).style.backgroundColor;
;
    if (selectedNumber == undefined) {
        selectedNumber = number;
        document.getElementById(`rating-circle${number}`).style.backgroundColor = "hsl(217, 12%, 63%)";
        document.getElementById(`number${number}`).style.color = "white";
    }


}

// Submit button

function submitRating() {
    document.getElementById("rating-state").style.display = "none";
    document.getElementById("ty-state").style.display = "flex";
}
