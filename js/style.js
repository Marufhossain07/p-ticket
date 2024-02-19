// const seats = document.querySelectorAll('#seats');

// for (const seat of seats) {

//     seat.addEventListener("click", function(){
//         let count= 0;
//         seat.classList.add("bg-[#1DD100]");

//         seatDecreased();
//         seatAdded();
//         count += 1;

//         console.log(count);
//     })
// }

const seats = document.querySelectorAll('#seats');
let count = 0;
for (const seat of seats) {
    const perSeat = seat;
    perSeat.addEventListener("click", function () {
        count += 1;
        perSeat.classList.add("pointer-events-none")
        if (count < 5) {
            seat.classList.add("bg-[#1DD100]");
            const seatName = document.getElementById('seat-name');
            const className = document.getElementById('class-name');
            const price = document.getElementById('price')

            const li1 = document.createElement('li');
            li1.innerText = perSeat.innerText;
            const li2 = document.createElement('li');
            li2.innerText = "Economy"
            const li3 = document.createElement('li');
            li3.innerText = 550;


            seatName.appendChild(li1);
            className.appendChild(li2);
            price.appendChild(li3);

        }
        seatDecreased();
        seatAdded();
        totalPrice();
        applyButtonCheck();
    } )
    
}

const apply = document.getElementById('apply');
apply.addEventListener('click', function () {
    const inputElement = document.getElementById('input');
    const totalPriceElement = document.getElementById('total-price').innerText;
    const input = inputElement.value;
    const grandTotalElement = document.getElementById('grand-total');
    const inputField = document.getElementById('coupon-field')
    if (input == "NEW15" && totalPriceElement == 2000) {
        let total = 2000;
        const discount = total * 0.15;
        const newTotal = total - discount;
        grandTotalElement.innerText = newTotal;
        inputField.classList.add('hidden')
    }
    else if (input == "Couple 20" && totalPriceElement == 2000) {
        let total = 2000;
        const discount = total * 0.20;
        const newTotal = total - discount;
        grandTotalElement.innerText = newTotal;
        inputField.classList.add('hidden')
    }

})



