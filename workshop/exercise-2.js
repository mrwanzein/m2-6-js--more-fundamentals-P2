// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (early, late) => {
    let fullParty = [...early, ...late];
    fullParty.forEach((guest, index) => {
        console.log(`${index+1}. ${guest}`);
    });
}

printGuestOrder(earlyBirds, lateComers);