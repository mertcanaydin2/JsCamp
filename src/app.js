import { users } from "./data/data.js"
import Customer from "./models/customer.js"
import Employee from "./models/employee.js"
import User from "./models/user.js"
import UserService from "./services/userService.js"

console.log("Hello world")

let name = "Mertcan"
const name2 = "Aydın"

let dollarYesterday = 14.85
let dollarToday = 14.55

if(dollarToday>dollarYesterday){
    console.log("Arttı")
}
else if(dollarToday<dollarYesterday){
    console.log("Azaldı")
}
else{
    console.log("Eşit")
}

let credits = ["Kredi 1","Kredi 2","Kredi 3"]

credits.forEach(credit => {
    console.log(credit)
});

for(let i = 0; i<credits.length; i++){
    console.log(credits[i])
}

// let user1 = new User(1,"Mertcan","Aydın","İstanbul",24)
// let customer1 = new Customer(2,"Engin","Demiroğ","İstanbul",37,"12345")
// let employee1 = new Employee(3,"Ali","Yolalan","İstanbul",26,10000)
 let userService = new UserService
// userService.add(user1)
// userService.add(customer1)
// userService.add(employee1)

userService.onInit()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)


console.log("----Task 2----")
//Asal

function findPrime(...primeNumbers){
    for(let i = 2; i<primeNumbers.length;i++){
        let prime = 0
        for(let j = 2; j<primeNumbers[i];j++){
            if(primeNumbers[i] %j == 0){
                prime++
            }
        }
        if(prime ==0){
            console.log(primeNumbers[i], " Asaldır.")
        }
        else{
            console.log(primeNumbers[i], " Asal değildir.")
        }
    }
}

findPrime(1,2,3,4,5,6,7,8,9,10,11,25,57,71,101)


console.log("----Arkadaş Sayılar----")

function friendNumbers(number1, number2){
    let sum1 = 0
    let sum2 = 0

    for(let i = 0;i<number1;i++){
        if(number1%i ==0){
            sum1 = sum1+i
        }
    }

    for(let i = 0; i<number2;i++){
        if(number2%i == 0){
            sum2 = sum2+i
        }
    }

    if(sum2 == number1 && sum1 == number2){
        console.log(" Sayılar, arkadaş sayılardır.")
    }

    else{
        console.log(" Sayılar, arkadaş sayı değildir.")
    }

}    friendNumbers(220,284)

console.log("----Mükemmel Sayılar----")

for (let i =1; i<1000;i++){
    let sum1 = 0
    for(let j= 0; j< i; j++){

        if(i%j == 0){
            sum1 = sum1+j

        }

    }
    if (sum1 == i){
        console.log(i)
    }
}


console.log("----Asal Sayı Listeleme----")

for(let a =2; a<1000;a++){
    let sum2 = 0

    for(let b = 2; b<a; b++){

        if(a%b == 0){
            sum2++
        }
    }
    if(sum2 == 0){
        console.log(a)
    }
}


