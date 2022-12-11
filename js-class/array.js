//It is a special non primitive datatypes
// Array literal
// variable_type identifier = [element1, element2, element3]
/*
const age = 19;
age = 20;
console.log(age);
*/

/*
const fruits = ['apple', 'banana', 'cherry', 'age', 1998-2022];
*/
// const cars = newArray('BMW', 'Toyota', 'Porsche')

/*
const friends = []
friends[0] = 'Babin';
friends[1] = 'Manish';
friends[2] = 'Bikash';
friends[3] = 'Dipesh';


friends[1]='Miraj';

friends[9]='Newton';
friends[10]='Bikal';
console.log(friends);
*/
/*
let calcAge = (birthYear)=>2022-birthYear;
let arr1 = ['Bikash',23,undefined,null,10n,true,firends,{id:1,address:'Kathmandu'}, calcAge(1998)];

let cities = ['KTM','BKT','BDP','PKR'];
let lastElement = cities[cities.length - 1]; //latest data show or last element finding


cities.push();
cities.slice();
cities.pop();
cities.splice();
cities.sort();
cites.
cities.map();
cities.filter();
*/

// const years = [1998,2002,2006];
// let hello = years + 10;
// console.log(typeof(hello));

//Array Map method
// map returns array itself
// map takes first parameter element(e)
// map takes second parameter index(i)
// map takes third parameter array(A)

// let arr = [1,2,3,4];

// let func1 = ()=>{};

// arr.map(func1);

// let mappedArray =
//  console.log(arr.map((e)=>e*2));
// console.log(mappedArray);

// let mappedArray = arr.map((e,i)=>e+i);
// console.log(mappedArray);

// let stds = ['manish','Krishna','cd','rb','kunti','draupadi','bhismpita','bheem','balendra'];

// console.log(stds.map((e,i)=>`Roll no ${i+1} = ${e}`));
// let output = stds.map((e,i)=>{
//     let result = `roll no : ${i+1} = ${e}`;
//     return result;
// });
// console.log(output);
// let dataBabin = [1,2,3,4,5]

// let myNewArray = dataBabin.map((e) => [e*e,e*e*e]); // e**2, e**3
// console.log(myNewArray);
// console.log(dataBabin.map((e,i,a)=>a));

// const salaries = [15000,6000,4500,6700,20000,5800];

// let filteredSalaries = salaries.filter(e=>e<5000)
// console.log(filteredSalaries);

// let output= filteredSalaries.map(e=>e+1500);
// console.log(output);

// let filtersAalaries = salaries.filter(e=>e<500).map(e=>e)

//Reduce
// let numbers = [1,2,3,4,5,6,7,8,9];
//array.reduce((acc,curr,i,a)=>{},initial value)
// let totalValue = numbers.reduce((acc,curr)=>acc+curr,0); // 0 is for accumulator current value is 0
// console.log(totalValue);

// find mean

// let myMeanNum = [1,2,3,4,5,6,7,8,9];
// let num = myMeanNum.length;
// let myTotal = myMeanNum.reduce((acc,cur)=> acc+cur,0);
// console.log(myTotal/num);

//sort
// let names = ['bhawana','simran','aakriti','gauri'];
// console.log(names.sort());
// let num = [33,4,5454,45234,23,345435345,43543,6565,654645,654,65,324234,23,42342,34,234];
// let sortedArray = num.sort((a,b)=>a-b);//ascending 
// let sortedArray = num.sort ((a,b)=>b-a);//descending
// console.log(sortedArray);


//Shiva prasad chapagain has x a' in his name. find it

let myStr = 'Shiva Prasad Chapagain';
// let myArrStr = myStr.split(',');
let myArrStr = myStr.split("");

let countA = 0;
// console.log(myArrStr[0]);
for(let i=0;i<myArrStr.length;i++){
    debugger;
    if(myArrStr[i]==='a'){
       countA++;
    }
}
console.log(countA);

