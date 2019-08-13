var nameVar = 'Manish';
var nameVar = 'Raj';

console.log('nameVar:',nameVar);

let nameLet = 'Sunita';
// let nameLet = 'Aradhya';
console.log('nameLet',nameLet);

const nameConst = 'Frank' ;
// const nameConst = 'Gunther';
// nameConst = 'Gunther';

console.log('nameConst',nameConst);

// Block Scoping

const fullName = 'Manish Juriani';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
