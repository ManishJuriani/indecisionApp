// argument object - no longer bound with arrow functions

// const add = (a,b)=>{
//     // console.log(arguments);
//     return a+b;
// }

// console.log(add(2,3,25000))

// this keyword - no longer bound with arrow functions
// ifthis is an arrow function, it refers to its parent's this value 

// const user ={
//     name: 'Manish',
//     cities: ['Jabalpur','Nagpur','Pune'],
//     // printPlacesLived: function(){        
//     //     this.cities.forEach((city)=>{
//     //         console.log(this.name+" has lived in "+city);
//     //     })
//     // }
//     printPlacesLived(){        
//         return this.cities.map(city =>
//             this.name + " has lived in " + city + "!"
//         );
        

//         // this.cities.forEach((city)=>{
//         //     console.log(this.name+" has lived in "+city);
//         // });
//     }
// }

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5,6],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map(number => number * this.multiplyBy );
    }
}

console.log(multiplier.multiply());