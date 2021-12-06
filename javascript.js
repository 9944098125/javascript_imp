const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


const javascript_qa = [
    {
        id:1,
        question:"What is javascript ?",
        answer:"Javascript often abbreviated as JS is a programming language that follows the convention of ECMAScript specifications. It is a high-level, often just in time  compiled, and a multi-paradizm language. It has curly bracket syntax, dynamic typing, proto-type based object orientation and first class functions."
    },
    {
        id:2,
        question:"What is REST ?",
        answer:"Representational State Transfer"
    },
    {
        id:3,
        question:"What is HTML ?",
        answer:"HTML is a standard markup language that is designed to display the documents in the web browser. It can be assisted by the softwares like CSS or scripting languages like javascript."
    },
    {
        id:4,
        question:"What are overloading and overriding ?",
        answer:"Javascript does not support overloading, but overloading means defining two functions with same name and same parameters. Javascript supports overriding, so overriding means defining two functions with same name nad when we do that, only the function defined last gets executed and first defined function gets ignored. It means we are overriding that function."
    },
    {
        id:5,
        question:"What are primitive and non-primitive data types ?",
        answer:"Primitive data types are the data types that are pre-defined. For eg - Boolean, char, byte, bigint, int, float, etc... Non-primitive data types are the data types that are created by the programmer. FOr eg - String, array, enum, etc..."
    },
    {
        id:6,
        question:"What is hoisting ?",
        answer:"Hoisting means declaration of variables moves to top."
    },
    {
        id:7,
        question:"Difference between == and === ?",
        answer:"== is used to compare the values but === is used to compare the values and types."
    },
    {
        id:8,
        question:"What is Implicit type coercion or string type coercion ?",
        answer:"When we use + synbol to add a string with a number, then this implicit type coercion happens."
    },
    {
        id:9,
        question:"What is equality coercion ?",
        answer:"When we use == to compare two values, equality coercion happens."
    },
    {
        id:10,
        question:"What is NaN property ?",
        answer:"Nan property refers to 'not a number', it represents a number which is not a legal number."
    },
    {
        id:11,
        question:"How are data types passed ?",
        answer:"Primitive data types are passed by values and non primitive data types are passed by reference."
    },
    {
        id:12,
        question:"What is IIFY ?",
        answer:"IIFY called as Immediately Invoked Function is a function that is executed immediately after defining it."
    },
    {
        id:13,
        question:"What are Higher order functions ?",
        answer:"They are the functions that operate on other functions either by taking them as an argument or by returning them."
    },
    {
        id:14,
        question:"What is this keyword ?",
        answer:"The this keyword refers to the object that the function is a property of. It's value always depends on the object that is invoking the function."
    },
    {
        id:15,
        question:"Call() and Apply() ?",
        answer:"call() method takes arguments separately and apply() method takes takes arguments in an array."
    },
    {
        id:16,
        question:"What is blind method ?",
        answer:"Blind() method returns a new function, where 'this' keyword bounds to the owner object, which is provided as the parameter."
    },
    {
        id:17,
        question:"What is currying ?",
        answer:"Currying ia an advanced technique to transform a function with n arguments to n functions with one or less arguments."
    },
    {
        id:18,
        question:"What do you mean by scope ?",
        answer:"Scope determines the accessibility of a variable or a function at various parts of one's code. There are three types of scopes - 1. Global scope => It is the entire javascript runtime environment. 2. Local scope => The variables defined in the global scope have access only in a function they are defined in. 3. Block scope => The variables defined in this scope are defined in the loops or in the if statements. simply they are defined inside the curly braces."
    },
    {
        id:19,
        question:"What is callback ?",
        answer:"A callback is a function that is executed after another function."
    },
    {
        id:20,
        question:"What is recursion ?",
        answer:"Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives a result."
    },
    {
        id:21,
        question:"What are constructor functions ?",
        answer:"Constructor functions are used to create objects. If we want multiple objects having similar methods and funtions, we can use constructor functions."
    }
]





app.get('/javascript', (request, response) => {
    response.send(javascript_qa);
});


const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`App is listening to ${port}`));