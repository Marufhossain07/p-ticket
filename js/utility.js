function seatDecreased() {
    const seatLeftElement = document.getElementById('seat-left');
    const seatLeft = seatLeftElement.innerText;
    let seatLeftNumber = parseInt(seatLeft);
    const seatRemaining = seatLeftNumber - 1;
    seatLeftElement.innerText = seatRemaining;
    if (seatRemaining === 0) {
        alert("We are very sorry but we don't have any seats available right now")
    }
}

function seatAdded() {
    const seatLeftElement = document.getElementById('seat-left');
    const seatAddElement = document.getElementById('seat-select');
    const seatAdd = seatAddElement.innerText;
    let seatAddNumber = parseInt(seatAdd);
    const newSeat = seatAddNumber + 1;
    seatAddElement.innerText = newSeat;
    if (newSeat === 5) {
        alert("You can select only 4 tickets at a time");
        seatAddElement.innerText = 4;
        seatLeftElement.innerText = 4;

    }
}

function totalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    const grandTotalElement = document.getElementById('grand-total');
   
    const totalPrice = totalPriceElement.innerText;
    const totalNumber = parseInt(totalPrice);
    let newTotal = totalNumber + 500;
    totalPriceElement.innerText = newTotal
    grandTotalElement.innerText = newTotal;
    
    if( newTotal > 2000){
         totalPriceElement.innerText = 2000;
         grandTotalElement.innerText = 2000;
        
    }
}


const next = document.getElementById('next');

 function applyButtonCheck() {
    const seatSelectElement = document.getElementById('seat-select').innerText;
    const phoneElement = document.getElementById('phone').value;
    console.log("Seat Select Element:", typeof(seatSelectElement));
    console.log("Phone Element Length:", typeof(phoneElement.length));

    if (seatSelectElement !== "0" && phoneElement.length !== 0) {
        next.disabled = false;
    }
    else{
        next.disabled = true;
    }
}
