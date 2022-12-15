// let Babin ={
//     firstName : 'Babin',
//     lastName :'Nepali',
//     gender:'Male',
//     age:22,
//     dailyStep:[2300,4500,6000,3400,2100,1200,7000],
//     weight:65,
//     height:1.9,
//     BMI: function(){
//         return this.weight/(this.height ** this.height);
//     }
// }

// // console.log(Babin[dailyStep]);
// // console.log(Babin.dailyStep);

// Babin.fullName = `${Babin.firstName} ${Babin.lastName}`;

// Babin.college ??= 'Triton';
// Babin.college ??='Divya Gyan'

// // console.log(Babin.BMI());

// let Person = {
//     firstName:'Manish',
//     lastName:'Thakur',
//     yob: 2057,
//     curYear:2079,
//     status:'Eligible',
    
//     Age: function(){
//         return this.curYear -this.yob;
//     },
//     Vote: function(){
//         if(this.Age()>=18){
//             return this.status
//         }else{
            
//         }
//     }
// }
// Person.lastName ??= 'Pangeni';


// console.log(`Age is ${Person.Age()} , fullname is ${Person.firstName + ' ' + Person.lastName } and status :${Person.Vote()}`);

// console.log(Person.Vote());


//  console.log(Object.keys(Person));

//start program
// let Obja = {
//     m : 0,
//     i :0,
//     s :0,
//     p:0
    
// }
// let text = 'MISSISSIPPI';
//output ->{M:1,I:4,S:4,P:2}

// let allWord = [...text];
// // for(let i=0;i<allWord.length;i++){
// // }

// // for(let i=0;i<allWord.length;i++){
// // }

// // for(let i=0;i<allWord.length;i++){
// // }

// for(let i=0;i<allWord.length;i++){
//     if(allWord[i]=== 'P'){
//         Obja.p ++;
//     }
//     else if(allWord[i]=== 'M'){
//         Obja.m ++;
//     }
//     else if(allWord[i]=== 'S'){
//         Obja.s ++;
//     }
//     else if(allWord[i]=== 'I'){
//         Obja.i ++;
//     }
// }

// console.log(Obja)
//end program


// console.log(allWord);
// let mCount = allWord.reduce((acc,cur)=>{
//             if(cur==='M'){
//                  acc++
//             } return acc;
// },0);

// Obja.m = mCount;

// let iCount = allWord.reduce((acc,cur)=>{
//     if(cur==='I'){
//          acc++
//     } return acc;
// },0);

// Obja.i = iCount;

// let sCount = allWord.reduce((acc,cur)=>{
//     if(cur==='S'){
//          acc++
//     } return acc;
// },0);

// Obja.s = sCount;

// let pCount = allWord.reduce((acc,cur)=>{
//     if(cur==='P'){
//          acc++
//     } return acc;
// },0);

// Obja.p = pCount;

// console.log(Obja);

//Exercies 02
// let data =[
//     {id:1,firstName:'Ram'},
//     {id:1,firstName:'Sita'},
//     {id:2,firstName:'Hari'},
//     {id:4,firstName:'Laxman'}
// ];

// let filteredOdd = data.filter(e=> e.id%2 === 1);

// console.log(filteredOdd)

//  data.map(e=>e.address = 'ktm')
// console.log(data)

// console.log(data);



// const str ="MISSISSIPPI";

// let func2 = (str)=>{
//     return str.split('').reduce((acc,curr)=>{
//         acc[curr] ? acc[curr]++ : acc[curr]=1;
//         return acc
//     },{})
// }

let srt1 = 'alskdjflaaldflkj'.split('').reduce((acc,curr)=>{
    acc[curr] =(acc[curr] || 0) + 1;
    return acc;
},{})
console.log(srt1);

// Factory function

function myDetail(myName,birthYear,college){
    return{
        firstname : myName,
        calcAge(){
            console.log(`age is ${2022-birthYear}`);
        },
        myCollege:college
    }
}
const Babin = myDetail('Babin',2001,'TIC');
console.log(Babin);
Babin.calcAge();


// Constructor function

function Person(name, birthYear,college){
    this.name =name,
    this.calcAge =function(){
        console.log(`Age: ${2022-birthYear}`)
    },
    this.college = college
}
const laxman = new Person('laxman',2010,'Triton');

console.log(laxman);