// function exampleFunction (firstName, lastName ) {
//     return firstName +" " +lastName;

// }
// const getFullName = (firstName, lastName) => firstName +" " +lastName;
//      // arrow synatax function 


// console.log(exampleFunction("suzain" , "shilakar"));
// console.log(getFullName("sujan " ,"shilakar "));

// let person = {
//     firstName: "sujan",
//     lastName: "shilakar",
//     age: 24,
//     address: "kathmandu",
//     getFullName : function (){
//         return this.firstName + " " + this.lastName;
//     },
//     getAge: function(){
//         return this.age;
//     },
// };
// console.log ("this persons full name is ",  person.getFullName());
// console.log("the age of this person is", person.getAge());

function printOut(content ) {
    console.log (content);
}
printOut("helo world ");

const arrowPrintOut = (content) => console.log (content);
arrowPrintOut ("arrow Hello world ");

let car = {
    name: "Suzuki",
    model: "maruti",
    price: 1500000,
    getNameInUpperCase: function (){
        return this.name.toUpperCase;
    },
   getTotalPriceWithVat: function() {
     return ( 13/100 * this.price) + this.price ;
   }
}
console.log (car);
console.log ("the name is uppercase ", car.getNameInUpperCase());
console.log("the price after cat is ", car.getTotalPriceWithVat());
