const minuts = document.getElementById('minuts');
const second = document.getElementById('second');
const startbtn = document.getElementById('startbtn');
const stop = document.getElementById('stopbtn');
const hour =  document.getElementById('hour');
let minutsindicate = 0;
let hourCount =0
let secondcount = 0;
let clearinterval;


const loaddata = () => {

    const currentminuts = JSON.parse(localStorage.getItem('currentminuts'));

    if (currentminuts !== null) {
        minutsindicate = currentminuts.minutes;
        secondcount = currentminuts.seconds;
        second.innerHTML = secondcount; minuts.innerHTML = minutsindicate;
    }
}
localStorage.setItem('user', 'dk');
startbtn.addEventListener('click', () => {
    clearinterval = setInterval(() => {

        secondcount += 1
        minutsfun();
        hourCountFun();
        second.innerHTML = secondcount;
        console.log(secondcount);
        const obj = {
            minutes: minutsindicate, seconds: secondcount
        }
        localStorage.setItem('currentminuts', JSON.stringify(obj));
    }, 1000);

});

const minutsfun = () => {

    if (secondcount === 60) {
        minutsindicate += 1;

        minuts.innerHTML = minutsindicate;
        second.innerHTML = secondcount;
        secondcount = 1;
    }
    
};

const hourCountFun = () => {
 if (minutsindicate === 60) {
      hourCount += 1;
        hour.innerHTML = secondcount;
    }
}
stop.addEventListener('click', () => {

    clearInterval(clearinterval);
    localStorage.setItem('currentminuts', '');
});

const resetfun = () => {
    minutsindicate = 0; secondcount = 0;
    const obj = {
        minutes: minutsindicate, seconds: secondcount
    };
    localStorage.setItem('currentminuts', JSON.stringify(obj));
    minuts.innerHTML = minutsindicate;
};

document.getElementById('resetbtn').addEventListener('click', resetfun);


