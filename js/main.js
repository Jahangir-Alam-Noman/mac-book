
function updateProduct(product, amount) {
    const productField = document.getElementById(product);
    productField.innerText = amount;
    return amount;
}

function calculateTotal(product) {
    const bestPriceText = document.getElementById('best_price');
    const bestPrice = bestPriceText.innerText;
    const bestTotalprice = parseFloat(bestPrice);

    const memoryCostText = document.getElementById('memory_cost');
    const memoryCost = memoryCostText.innerText;
    const memoryCostAmount = parseFloat(memoryCost);

    const storageCostText = document.getElementById('storage_cost');
    const storageCost = storageCostText.innerText;
    const storageCostAmount = parseFloat(storageCost);

    const deliveryText = document.getElementById('delivery_charge');
    const delivery = deliveryText.innerText;
    const deliveryAmount = parseFloat(delivery);
    console.log(bestTotalprice, memoryCostAmount, storageCostAmount, deliveryAmount);
    const total = bestTotalprice + memoryCostAmount + storageCostAmount + deliveryAmount;

    const totalPrice = document.getElementById('total_price');
    totalPrice.innerText = total;

    // grand total 
    const grandTotal = document.getElementById('grand_total');
    grandTotal.innerText = total;

}


function promoCode() {
    const grandTotalAmount = document.getElementById('total_price');
    const grandTotalAmountText = grandTotalAmount.innerText;
    const grandTotalAmountTotal = parseFloat(grandTotalAmountText);

    const promoCode = document.getElementById('promo_code');
    const promoCodeText = promoCode.value;
    const prrmoCodeString = promoCodeText + '';
    let discount = 0;
    if (prrmoCodeString.toLowerCase().indexOf('stevekaku') != -1) {

        discount = grandTotalAmountTotal * 0.8;

    }
    console.log(discount);

    // grand total 
    const grandTotal2 = document.getElementById('grand_total');
    grandTotal2.innerText = discount;

    // clear the field 
    promoCode.value = '';

}



// handle memory event
document.getElementById('memory_8gb').addEventListener('click',
    function () {
        const memory = updateProduct('memory_cost', 0);
        calculateTotal(memory);


    });


document.getElementById('memory_16gb').addEventListener('click',
    function () {
        const memory = updateProduct('memory_cost', 180);
        calculateTotal(memory);

    });


// handle storage event
document.getElementById('storage_256gb').addEventListener('click',
    function () {

        const storage = updateProduct('storage_cost', 0);
        calculateTotal(storage);


    });

document.getElementById('storage_512gb').addEventListener('click',
    function () {
        const storage = updateProduct('storage_cost', 100);
        calculateTotal(storage);

    });

document.getElementById('storage_1tb').addEventListener('click',
    function () {
        const storage = updateProduct('storage_cost', 180);
        calculateTotal(storage);


    });

// handle delivery event
document.getElementById('free_delivery').addEventListener('click',
    function () {
        const delivery = updateProduct('delivery_charge', 0);
        calculateTotal(delivery);


    });

document.getElementById('paid_delivery').addEventListener('click',
    function () {
        const delivery = updateProduct('delivery_charge', 20);
        calculateTotal(delivery);


    });










