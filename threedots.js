const ages = [12, 15, 17, 11, 13];
const ages2 = [ 14, 16, 12, 13, 18];
const ages3 = [10, 15, 22]
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);


const business = 100;
const minister = 150;
const sochib = 120;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);


const taka = [10, 15, 25,20];
const maximum2 = Math.max(...taka);
console.log(maximum2);
