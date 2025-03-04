// seat selection
const allBtns = document.getElementsByClassName("seat");
let count = 0;
const maxSelection = 4;
let totalSeats = 40;
let prise = 0;

// Get UI elements
const checkoutBtn = document.getElementById("coupon");
const seatList = document.getElementById("selected-seats"); // The area where selected seats are shown
const totalSeatsSpan = document.getElementById("total-seats");
const totalPrise = document.getElementById("total-prise");
const grandTotal = document.getElementById("grand-total");

// Update total seats count on page load
totalSeatsSpan.innerText = totalSeats;

for (const allBtn of allBtns) {
    allBtn.addEventListener("click", function () {
        let seatName = allBtn.innerText; // Get the seat name (e.g., "A3")

        if (allBtn.classList.contains("bg-green")) {
            // Unselect the seat
            allBtn.classList.remove("bg-green");
            count -= 1;
            totalSeats += 1;
            prise -= 550;

            // Remove seat from list
            let seatElement = document.getElementById(`seat-${seatName}`);
            if (seatElement) {
                seatElement.remove();
            }
        } else {
            if (count >= maxSelection) {
                alert("You can only select up to 4 seats!");
                return;
            }
            allBtn.classList.add("bg-green");
            count += 1;
            totalSeats -= 1;
            prise += 550;

            // Add seat to the list
            let newSeat = document.createElement("p");
            newSeat.style.display = "flex";
            newSeat.style.justifyContent = "space-between";
            newSeat.id = `seat-${seatName}`;
            newSeat.innerHTML = `${seatName} <span>Economy</span> <span>550</span>`;
            seatList.appendChild(newSeat);
        }

        // Update displayed counts
        document.getElementById("seat-num").innerText = count;
        totalSeatsSpan.innerText = totalSeats;
        totalPrise.innerText = prise;
        grandTotal.innerText = prise;

        // Show or hide checkout button
        if (count < maxSelection){
          checkoutBtn.style.display = "none";
        }
        else{
          checkoutBtn.style.display = "inline-flex"; // Show button
        }
    });
}


// smooth scroll


    // scroll to payment interface
function scrollToSection() {
    document.getElementById("payment-interface").scrollIntoView({ behavior: "smooth" });
}

    // scroll to bus tickets
function scrollToBus() {
    document.getElementById("bus-tickets").scrollIntoView({ behavior: "smooth" });
}

    // continue button scroll
function jumpToHeader() {
    
}