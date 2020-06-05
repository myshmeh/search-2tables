const compare = require('./compare');
const compareSquat = require('./compare_squat');
const RECORD_NUM = 100000;
const REMOVE_NUM1 = 50;
const REMOVE_NUM2 = 50;

const data1 = [];
const data2 = [];

for (let i = 0; i < RECORD_NUM; i++) {
    const second = "second";
    const third = i;
    data1.push([
        i,
        second,
        third,
    ]);
    data2.push([
        i,
        second,
        third + (Math.random() > 0.99 ? 1 : 0),
    ]);
}
for(let i = 0; i < REMOVE_NUM1; i++) data1.splice(parseInt(RECORD_NUM * Math.random()), 1);
for(let i = 0; i < REMOVE_NUM2; i++) data2.splice(parseInt(RECORD_NUM * Math.random()), 1);

data1.sort((a, b) => 0.5 - Math.random());
data2.sort((a, b) => 0.5 - Math.random());
const beforeCompare = Date.now();
const res = compare(data1, data2);
const elapsedCompare = Date.now() - beforeCompare;

data1.sort((a, b) => 0.5 - Math.random());
data2.sort((a, b) => 0.5 - Math.random());
const beforeCompareSquat = Date.now();
const resSquat = compareSquat(data1, data2);
const elapsedCompareSquat = Date.now() - beforeCompareSquat;

console.log('=== datasets ===');
console.log({data1: data1, data2: data2});
console.log(`\n=== O(m*n) way (${elapsedCompare} ms) ===`);
console.log(res);
console.log(`\n=== O(n*n*m) way (${elapsedCompareSquat} ms) ===`);
console.log(resSquat);
console.log(`\nO(m*n):${elapsedCompare} ms, O(n*n*m): ${elapsedCompareSquat} ms`);