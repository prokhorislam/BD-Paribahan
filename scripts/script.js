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
}

// form submission

// Form submission validation
const submit = document.getElementById("submit");
const formName = document.getElementById("form-name");
const formNum = document.getElementById("form-number");
const formMail = document.getElementById("form-mail");

// Function to validate input fields
function validateForm() {
    let numText = formNum.value.trim();
    let mailText = formMail.value.trim();

    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (numText.length >= 4 && emailPattern.test(mailText)) {
        submit.style.display = "block";
    } else {
        submit.style.display = "none";
    }
}

// Event listeners for real-time validation
formNum.addEventListener("input", validateForm);
formMail.addEventListener("input", validateForm);


// submit button 

const submitCard = document.getElementById("submit-card");
const paymentInt = document.getElementById("payment-interface");
submit.addEventListener("click", function() {
    const paymentInt = document.getElementById("payment-interface");
    submitCard.style.display = "block";
    paymentInt.style.display = "none";

})

// continue button

const continueBtn = document.getElementById("continue");

continueBtn.addEventListener("click", function() {
    paymentInt.style.display = "flex";
    submitCard.style.display = "none";
    formName.value = "";
    formNum.value = "";
    formMail.value = "";
})
