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

// console.log(Babin.BMI());

let Person = {
    firstName:'Manish',
    lastName:'Thakur',
    yob: 2057,
    curYear:2079,
    status:'Eligible',
    
    Age: function(){
        return this.curYear -this.yob;
    },
    Vote: function(){
        if(this.Age()>=18){
            return this.status
        }else{
            
        }
    }
}
Person.lastName ??= 'Pangeni';


console.log(`Age is ${Person.Age()} , fullname is ${Person.firstName + ' ' + Person.lastName } and status :${Person.Vote()}`);

console.log(Person.Vote());


