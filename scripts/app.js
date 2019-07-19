// function foo(a){
//     console.log(a);
//     [...arguments].map(e => console.log(e))
// }
// const foo = (a, ...rest) => rest.map(e => console.log(e))

// foo('aaa');
// foo('aaa','bbb','ccc','ddd',);


// const fizzBazz = n => Array.from(new Array(n), (el, i) => i + 1)
// .map(el => `${el} : ${(el % 3 == 0 && el % 5 == 0)?'FizzBazz':(el % 5 == 0)?'Bazz':( (el % 3 == 0)?'Fizz':'')}`  );

// console.table( fizzBazz(15) )
const name = 'anonim';

const Oleh = {
    name: 'Oleh',
    password: '123456789',
    gender: 'male',
    age: 37,
    salary: 2500,
    address:{
        street: 'Lenina 55'
    },

    sayHello: function(userName){
        console.log(`Привет ${userName}, мое имя ${this.name}`)
    },
}

const John = {
    name: 'John',
    password: '123456789',
    gender: 'male',
    age: 37,
    salary: 2500,
    address:{
        street: 'Lenina 55'
    },

    sayHello: function(userName){
        console.log(`Hello ${userName}, my name ${this.name}`)
    },
}



const getRandomFirstName = () => {
    const names = [
        "Aaliyah",
        "Aaron",
        "Abagail",
        "Abbey",
        "Abbie",
        "Abbigail",
        "Abby",
        "Abdiel",
        "Abdul",
        "Abdullah",
        "Abe",
        "Abel",
        "Abelardo",
        "Abigail",
        "Abigale",
        "Abigayle",
        "Abner",
        "Abraham",
        "Ada",
        "Adah",
    ];

    return names[Math.floor(Math.random()*names.length)]
}

const getRandomLastName = () => {
    const names = [
        "Abbott",
        "Abernathy",
        "Abshire",
        "Adams",
        "Altenwerth",
        "Anderson",
        "Ankunding",
        "Armstrong",
        "Auer",
        "Aufderhar",
        "Bahringer",
        "Bailey",
        "Balistreri",
        "Barrows",
        "Bartell",
        "Bartoletti",
        "Barton",
        "Bashirian",
        "Batz",
        "Bauch",
        "Baumbach",
        "Bayer",
        "Beahan",
        "Beatty",
        "Bechtelar",
        "Becker",
        "Bednar",
    ];

    return names[Math.floor(Math.random()*names.length)]
}

const getFullName = () => `${getRandomFirstName()} ${getRandomLastName()}`

const getGender = () => Math.random()> 0.5?'male':'famale'

function User(name=getFullName(),password,gender=getGender(),age=Math.ceil(Math.random()*100),salary=Math.ceil(Math.random()*2000)){
    this.name = name;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.salary = salary;
}

const users = Array.from(new Array(10)).map(el => new User())

const sayHello = Oleh.sayHello;
// const sayHello = function(userName){
//     console.log(`Hello ${userName}, my name ${this.name}`)
// }


// const name = Oleh.name;
// const gender = Oleh.gender;
// const age = Oleh.age;
// const salary = Oleh.salary;
// const street = Oleh.address.street

// const {password,...user} = Oleh;

// const f = (str) => {
//     console.log(str);
// }

// (({sum,count}) => {
//     console.log(sum/count);
// })(
//     (()=>({sum:1200, count: 6}))()
// )


// // const user = {
// //     name: 'Oleh',
// //     gender: 'male',
// //     age: 37,

// //     work(){
// //         console.log('coding')
// //     }
// // }

// // for(key in user){
// //     console.log(key)
// // }

// // Object.keys(user).map(el => console.log(user[el]))

// const users = [
//     {
//         name: 'Oleh',
//         gender: 'male',
//         age: 37,
//         salary: 2500,
//         address:{
//             street: 'Lenina 55'
//         }
//     },
//     {
//         name: 'Anna',
//         gender: 'female',
//         age: 30,
//         salary: 500,
//         address:{
//             street: 'Lenina 55'
//         }
//     },
//     {
//         name: 'Ivan',
//         gender: 'male',
//         age: 25,
//         salary: 1500,
//         address:{
//             street: 'Lenina 55'
//         }
//     },
//     {
//         name: 'John',
//         gender: 'male',
//         age: 40,
//         salary: 3500,
//         address:{
//             street: 'Lenina 55'
//         }
//     },
// ];

// const new_user = users.map(el => Object.assign({},el));

// // const res = {};
// // for(key in obj){
// //     res[key] = obj[key]
// // }

// new_user[1].address.street = "Pobedy";


// const foo = (obj) => {
//     obj[0].salary = 3500;
// }

// let a = 100

// const bar = (b) => b = 500

// // const sum = (collection, gender) => collection.reduce((acc,el) => gender?el.gender === gender?acc + el.salary:acc:acc + el.salary, 0);

// // function sum(collection, gender){
// //     if(gender){
// //         return collection.filter(el => el.gender === gender).reduce((acc,el) => {
// //             return acc + el.salary;
// //         },0);
// //     }
// //     return collection.reduce((acc,el) => {
// //         return acc + el.salary;
// //     },0);
// // }

// // const avg = (collection, gender) => 
//     // collection.reduce((acc,el) => 
//     //     gender?(el.gender === gender?{res:acc.res + el.salary, count:++acc.count}:{res:acc.res,count:acc.count}):{res:acc.res + el.salary, count:++acc.count},{count:0,res:0}
//     // )
// // ;

// // var cb = (collection, gender) => 
// // collection.reduce((acc,el) => 
// //     gender?(el.gender === gender?{res:acc.res + el.salary, count:++acc.count}:{res:acc.res,count:acc.count}):{res:acc.res + el.salary, count:++acc.count},{count:0,res:0}
// // )

// // function avg(collection, gender){
// //     return function (){
// //         return cb.res/cb.count
// //     }(cb)
// // }

// // function avg(collection, gender){
// //     if(gender){
// //         let count = 0;
// //         return collection.filter(el => el.gender === gender).reduce((acc,el) => {
// //             count++;
// //             return acc + el.salary;
// //         },0)/count;
// //     }
// //     return collection.reduce((acc,el) => {
// //         return acc + el.salary;
// //     },0)/collection.length;
// // }

// // function min(collection, gender){

// //     function foo(data){
// //         return data.reduce((acc,el) => {
// //             return acc.salary > el.salary?el:acc;
// //         }).salary;
// //     }

// //     return (gender)?foo(collection.filter(el => el.gender === gender)):foo(collection);
// // }

// // function max(collection, gender){

// //     function foo(data){
// //         return data.reduce((acc,el) => {
// //             return acc.salary < el.salary?el:acc;
// //         }).salary;
// //     }

// //     return (gender)?foo(collection.filter(el => el.gender === gender)):foo(collection);
// // }

// const polindrom = (str) => str.toLocaleLowerCase() === str.toLocaleLowerCase().split('').reverse().join('')