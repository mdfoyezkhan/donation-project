

// blog page function here
document.getElementById('blog-page').addEventListener('click', function () {
    console.log('hello world')
    window.location.href = '/blog.html';
})
// history function added here
document.getElementById('history-btn').addEventListener('click', function (events) {
    events.preventDefault()
    window.location.href = '/history.html';
    const historyBtn = document.getElementById('history-btn').classList.add('bgcolor')
    const donationBtn = document.getElementById('donation-btn').classList.remove('bg-[#B4F461]')
    // const donationBtn2 = document.getElementById('history').classList.remove('hidden')
    return donationBtn;

})
// donation function here
document.getElementById('donation-btn').addEventListener('click', function () {
    window.location.href = '/index.html';
    // this.classList.add('bg-[#B4F461]')
})

// for donation function
document.getElementById('donate-btn').addEventListener('click', function () {
    const amount1 = document.getElementById('amount1').innerText;
    const convertAmount = parseFloat(amount1);
    const inputAmount = document.getElementById('amount-input').value;
    const convertAmountInput = parseFloat(inputAmount);
    const totalAmount = convertAmount - convertAmountInput;
    const balance = document.getElementById('balance').innerText;
    const convertBalance = parseFloat(balance);
    const totalBalance = convertAmountInput + convertBalance;
    // console.log(convertBalance)

    if (convertAmount >= 0 && convertAmount >= convertAmountInput) {
        document.getElementById('amount1').innerText = totalAmount;
        document.getElementById('wrapper').classList.remove('hidden');
        document.getElementById('alart-box').classList.remove('hidden');
        document.getElementById('balance').innerText = totalBalance;
        document.getElementById('balance2').innerText = totalBalance;

        const div = document.createElement('div');
        // div.innerText =totalBalance,'transation successfull new balance,totalBalance';
        document.getElementById('history').appendChild(div);
        
    }
    else {
        alert('Your Avalable Balance !')
    }
})
// for donation function2
document.getElementById('donate-btn2').addEventListener('click', function () {
    const amount1 = document.getElementById('amount2').innerText;
    const convertAmount = parseFloat(amount1);
    const inputAmount = document.getElementById('amount-input2').value;
    const convertAmountInput = parseFloat(inputAmount);
    const totalAmount = convertAmount - convertAmountInput;
    const balance = document.getElementById('balance').innerText;
    const convertBalance = parseFloat(balance);
    const totalBalance = convertAmountInput + convertBalance;
    // console.log(convertBalance)
    if (convertAmount >= 0 && convertAmount >= convertAmountInput) {
        document.getElementById('amount2').innerText = totalAmount;
        document.getElementById('wrapper').classList.remove('hidden');
        document.getElementById('alart-box').classList.remove('hidden');
        document.getElementById('balance').innerText = totalBalance;
    }
    else {
        alert('Your Avalable Balance!')
    }
})
// for donation function3
document.getElementById('donate-btn3').addEventListener('click', function () {
    const amount1 = document.getElementById('amount3').innerText;
    const convertAmount = parseFloat(amount1);
    const inputAmount = document.getElementById('amount-input3').value;
    const convertAmountInput = parseFloat(inputAmount);
    const totalAmount = convertAmount - convertAmountInput;
    const balance = document.getElementById('balance').innerText;
    const convertBalance = parseFloat(balance);
    const totalBalance = convertAmountInput + convertBalance;
    // console.log(convertBalance)
    if (convertAmount >= 0 && convertAmount >= convertAmountInput) {
        document.getElementById('amount3').innerText = totalAmount;
        document.getElementById('wrapper').classList.remove('hidden');
        document.getElementById('alart-box').classList.remove('hidden');
        document.getElementById('balance').innerText = totalBalance;
    }
    else {
        alert('Your Avalable Balance!')
    }
})
// document.getElementById('donate-btn2').addEventListener('click', function () {
//     const modalSection = document.getElementById('wrapper').classList.remove('hidden');
//     const modalBox = document.getElementById('alart-box').classList.remove('hidden');
// })
// document.getElementById('donate-btn3').addEventListener('click', function () {
//     const modalSection = document.getElementById('wrapper').classList.remove('hidden');
//     const modalBox = document.getElementById('alart-box').classList.remove('hidden');
// })
document.getElementById('alart-box').addEventListener('click', function () {
    const modalSection = document.getElementById('wrapper').classList.add('hidden');
    const modalBox = document.getElementById('alart-box').classList.add('hidden');
    console.log('hello')
})