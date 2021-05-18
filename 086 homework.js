const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];


let employersNames = employers.filter((name) => {
    return name.length > 0 && name.length != ''
});


employersNames = employersNames.map((item) => item.toLocaleLowerCase());


const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const { cash, eu, rus } = sponsors;
const { eu: [currency1, currency2, currency3] } = sponsors;

function calcCash(cash = 0) {
    return cash.reduce((a, b) => a + b)
}

const money = calcCash(cash);


function makeBusiness(owner = 'Sam', director = 'Victor', cash, emp) {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash} . And our employers: ${emp}. And we have a sponsors: ${sumSponsors}. Note. Be careful with  ${currency1}. It's a huge risk.`);
}
makeBusiness({ cash: money, emp: employersNames });