const display = document.querySelector('h5');
const btn = document.querySelector('button');
const img = document.querySelector('img');
const notify = document.querySelector('.notification');

button = () => {
    let No = '0123456789';
    let NewNo = '';
    btn.style = 'pointer-events: none';

    for (let i = 0; i < 4; i++) {
        let randomNo = Math.floor(Math.random() * No.length);
        NewNo += No[randomNo];
    }
    display.innerHTML = 'Your OTP is ' + NewNo;

    notify.classList.add('active');
    
    setTimeout(() => {
        notify.classList.remove('active');
        btn.style = 'pointer-events:visible';
    }, 5000);

    img.src = 'copy.png';
    img.addEventListener("click", () => {
        navigator.clipboard.writeText(NewNo);
        img.src = 'copied.png';
    })
};

btn.addEventListener('click', button);

