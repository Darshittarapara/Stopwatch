const minuts = document.getElementById('minuts');
const second = document.getElementById('second');
const startbtn = document.getElementById('startbtn');
const stop = document.getElementById('stopbtn');
let minutsindicate = 0;
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
// const object = {
//     Name: 'darshit'
// };
// console.log(Object.getPrototypeOf(Object.prototype));

// console.log(JSON.stringify({ a: undefined, b: null }));

// let x = null;
// if (x === null) {
//     console.log('It is null');
// }
// else {
//     console.log('it is ' + typeof (x));
// }

// const num1 = 32;
// const num2 = 111;

// const returnnum = num2 < num1 ? num1 : null;
// const valueToUse = returnnum ?? 111;
// console.log(valueToUse);


// let foo = 0;
// //IN Logical && the second value  is return if first value is truly
// //  foo is never assigned any value so it is still undefined
// const someDummyText = foo || 0 || 33 && 12;
// console.log(someDummyText);







// function countMatches(regex, str) {

//     const matchResult = str.match(regex); // null or Array
//     console.log(matchResult);
//     return (matchResult ?? []).length;
// }
// console.log(countMatches(/u/g, 'ababa'));


// const file = [
//     {
//         path: 'index.html',
//         title: 'home'
//     },
//     {
//         path: 'contact.html',
//         title: 'contact'
//     },
//     {
//         path: 'about.html',
//         title: 'about'
//     },
// ];

// const gettitle = (file) => {
//     const allpage = {};

//     for (const ele of file) {
//         allpage[ele + 'page'] = ele;
//     };
//     const checkanswer = allpage ?? 'Not found';
//     console.log(checkanswer, allpage);

// }

// gettitle(file.map(ele => ele.title));
// const xp = true && console.log('hello');
// console.log(xp);


// const books = [
//     {
//         isbn: '123',
//     },
//     {
//         title: 'ECMAScript Language Specification',
//         isbn: '456',
//     },
// ];

// // Add property .title where it’s missing
// for (const book of books) {
//     const returnvalue = book.title ??= '(Untitled)';
//     console.log(returnvalue);
// }
// console.log(books);
// console.log(0 == '');

// const obj = {};
// if (obj) {
//     obj.Name = 'darshit',
//         obj.surname = 'tarapara',
//         obj.age = 22
// }
// console.log(obj);


// if (obj.props === undefined) {
//     obj.props = 'it is react js props'
// };
// console.log(obj);

