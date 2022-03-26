const num = 266219;
let stringNum = String(num);
let multiply = 1;

for (let i = 0; i < stringNum.length; i++) {
    multiply *= Number(stringNum[i])
}

console.log(multiply);

let exponent = multiply**3

console.log(String(exponent).substring(0,2))

