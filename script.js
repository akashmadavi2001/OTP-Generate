let display = document.querySelector('h5');
let btn = document.querySelector('button');
let img = document.querySelector('img');
let notify = document.querySelector('.notification');

btn.addEventListener('click', () => {
    let No = '0123456789';
    let NewNo = '';

    for (let i = 0; i < 4; i++) {
        let randomNo = Math.floor(Math.random() * No.length);
        NewNo += No[randomNo];
    }
    display.innerHTML = 'Your OTP is ' + NewNo;

    notify.classList.add('active');
    setTimeout(() => {
        notify.classList.remove('active');
    }, 5000);

    img.src = 'copy.png';
    img.addEventListener("click", () => {
        navigator.clipboard.writeText(NewNo);
        img.src = 'copied.png';
    });
});