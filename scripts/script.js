// coupon button 
function addCoupon() {
    const coupons = document.getElementById('coupon-code');
    if (coupons.value === "NEW15") {
        let couponValue = prise/100;
        let coupon1discount = couponValue*15 ;
        let coupon1 = prise - coupon1discount;
        grandTotal.innerText = coupon1;
        
    } else if (coupons.value === "C0p20") {
        let couponValue = prise/100;
        let coupon2discount = couponValue*20 ;
        let coupon2 = prise - coupon2discount;
        grandTotal.innerText = coupon2;
    }
    else {
        alert("Invalid coupon code!");
    }
}

// form submission

// Form submission validation
const submit = document.getElementById("submit");
const formName = document.getElementById("form-name");
const formNum = document.getElementById("form-number");
const formMail = document.getElementById("form-mail");

// Function to validate input fields
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form from submitting automatically

    let numText = document.getElementById("form-number").value.trim();
    let mailText = document.getElementById("form-mail").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (numText.length >= 4 && emailPattern.test(mailText)) {
        submitButton(); // Proceed if valid
    } else if(numText.length < 4 && emailPattern.test(mailText)) {
        alert("invalid phone number!"); 
    } else if(numText.length >= 4 && !emailPattern.test(mailText)){
        alert("invalid email address!"); 
    }
    else{
        alert("Please fill in all the required fields!");
    }
});




// alert function
function alertFunction() {
    alert("Please fill in all the required fields!");
}

// Event listeners for real-time validation
formNum.addEventListener("input", validateForm);
formMail.addEventListener("input", validateForm);


// submit button 

function submitButton() {
    let paymentInt = document.getElementById("payment-interface");
    let submitCard = document.getElementById("submit-card");
    if (paymentInt && submitCard) {  // Ensure elements exist
        submitCard.style.display = "block";
        paymentInt.style.display = "none";
    } else {
        console.error("Elements not found: Check 'payment-interface' or 'submitCard' IDs");
    }
}

// continue button function
function continueFunc() {
        const paymentInt = document.getElementById("payment-interface");
        const submitCard = document.getElementById("submit-card");
        console.log("click lagse");
        
        paymentInt.style.display = "flex";
        submitCard.style.display = "none";
        formName.value = "";
        formNum.value = "";
        formMail.value = "";
}