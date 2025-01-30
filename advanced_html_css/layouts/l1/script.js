const calculateButton = document.getElementById('calculate');
const tipAmountText = document.getElementById('tip-amount');
const totalPerPersonText = document.getElementById('total-per-person');
const billAmountInput = document.getElementById('bill-amount');
const numberOfPeopleInput = document.getElementById('number-of-people');

calculateButton.addEventListener('click', function() {
    const originalBillAmount = Number(billAmountInput.value);
    console.log(originalBillAmount);
    const numberOfPeople = Number(numberOfPeopleInput.value);
    console.log(numberOfPeople);
    const selectedRadioTip = document.querySelector('input[name="tip"]:checked');
    console.log(selectedRadioTip);
    const tipPercentage = Number(selectedRadioTip.value.slice(0, -1))/100;
    console.log(tipPercentage);
    const totalTip = Math.round(originalBillAmount * tipPercentage * 100) / 100;
    const totalBill = totalTip + originalBillAmount;
    const perPerson = Math.round(totalBill/numberOfPeople * 100)/100;
    tipAmountText.innerText = totalTip;
    totalPerPersonText.innerText = perPerson;
});
