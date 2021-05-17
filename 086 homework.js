const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// var employersNames = [];
// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }

let employersNames = employers.filter((name) => {
    return name.length > 0 && name.length != ''
});
// console.log(employersNames);

// for (var i = 0; i < employersNames.length; i++) {
//     employersNames[i] = employersNames[i].toLowerCase().trim();
// }

employersNames = employersNames.map((item) => item.toLocaleLowerCase());
// console.log(employersNames);


const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const { cash, eu, rus } = sponsors;
const { eu: [currency1, currency2, currency3] } = sponsors;

function calcCash(own = 0) {
    // own = own || 0;
    // var everyCash = Array.prototype.slice.call(arguments);
    const everyCash = [...arguments];
    // console.log(everyCash);
    let total = own;


    for (var i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
        console.log(total);
    }

    return total;
}

const money = calcCash(null, cash);


function makeBusiness(owner, director = 'Victor', cash, emp) {
    // director = director || 'Victor';
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(sumSponsors);
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash} . And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with  ${currency1} ". It's a huge risk."`);
}
makeBusiness.apply(null, ['Sam', , money, employersNames]);