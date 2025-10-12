//in the package.json file we say type: "module" so we can us the import statement below, otherwise it would use the CommonJS i.e. require
import generateName from "sillyname"
//start by writing import xxx from "package", so when you remove xxx, you can write the method, which in this case is "generateName", and it will autosuggst it
import {randomSuperhero} from "superheroes"

//var generateName = require('sillyname');
var sillyName = generateName();

console.log(`My name is ${sillyName}`);

const name = randomSuperhero();

console.log(`I am ${name}`);