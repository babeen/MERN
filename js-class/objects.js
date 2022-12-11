let Babin ={
    firstName : 'Babin',
    lastName :'Nepali',
    gender:'Male',
    age:22,
    dailyStep:[2300,4500,6000,3400,2100,1200,7000],
    weight:65,
    height:169.9,
    BMI: function(){
        return this.weight/(this.height ** this.height);
    }
}

// console.log(Babin[dailyStep]);
// console.log(Babin.dailyStep);

Babin.fullName = `${Babin.firstName} ${Babin.lastName}`;

Babin.college ??= 'Triton';

console.log(Babin);