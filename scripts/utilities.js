// seat selection
const allBtns = document.getElementsByClassName("seat");
let count = 0;
const maxSelection = 4;
let totalSeats = 40;

// Get UI elements
const checkoutBtn = document.getElementById("coupon");
const seatList = document.getElementById("selected-seats"); // The area where selected seats are shown
const totalSeatsSpan = document.getElementById("total-seats");

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

        // Show or hide checkout button
        checkoutBtn.style.display = count === maxSelection ? "inline-flex" : "none";
    });
}


// seat reccipt fumction
function totalSeat(id) {
  const reciptArea = document.getElementById("reccipt");

  const seatSection = document.createElement("div")
  seatSection.style.display = "flex";
  seatSection.style.justifyContent = "space-between";
  reciptArea.appendChild(seatSection);
  const seatName = document.createElement("div");
  seatName.innerText = "id"; // Corrected: Assign text to innerText
  seatSection.appendChild(seatName);

  const economy = document.createElement("div");
  economy.innerText = "economy"; // Corrected: Assign text to innerText
  seatSection.appendChild(economy);

  const amount = document.createElement("div");
  amount.innerText = "550"; // Corrected: Assign text to innerText
  seatSection.appendChild(amount);
}