/* Promise
Create a function fetchData that simulates fetching data from an API. The function should
return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
should represent a user with properties id, name, and age. */

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous fetching after 2 seconds
      setTimeout(() => {
        //Array of objects
        const users = [
          { id: 1, name: "Reena", age: 20 },
          { id: 2, name: "Chetana", age: 21 },
          { id: 3, name: "Seemon", age: 20 }
        ];
        // Resolve the promise with the array of users
        resolve(users);
      }, 2000); // 2 seconds delay
    });
  }
  
fetchData()
.then(users => {
    console.log(users);
})
.catch(error => {
    console.error("Error fetching data:", error);
});
  

/* Closure
Create a function createCounter that returns an object with two methods: increment and
getCount. The increment method should increase the internal count by 1, and the getCount
method should return the current count. Use a closure to maintain the internal count variable. */

function createCounter() {
    let count = 0; // Internal count variable
  
    return {
      increment: function() {
        count++; // Increment the count
      },
      getCount: function() {
        return count; // Return the current count
      }
    };
}
const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); 


/* CallBack
Create a function processData that accepts an array of numbers and a callback function. The
function should process each number in the array using the callback function and return a
new array of processed numbers. */

function processData(numbers, callback){
    return numbers.map(number => callback(number));
}

function cube(number) {
    return Math.pow(number, 3);
  }

const myArray = [1, 2, 3, 4, 5];
const processedNumbers = processData(myArray, cube);
console.log("The cube numbers: " + processedNumbers.join(', '));


/* Array manipulation: Map
Given an array of numbers, create a function that doubles each number using map.*/

let numbers = [2, 3, 6, 7, 9];

function doubleNumber(arr) {
    return arr.map((num) => num * 2);
    
}
const doubleNumbers = doubleNumber(numbers);
console.log(`The array of numbers after being doubled: ${doubleNumbers.join(', ')}`);



/* Array Manipulation: filter
Given an array of numbers, create a function that filters out numbers less than 10 using filter.*/

let array = [4, 7, 9, 10, 12, 21];

function filterNumber(arr){
    return arr.filter((num) => num > 10);
}
const filterNumbers = filterNumber(array);
console.log(`Filtered array of numbers that is less than 10: ${filterNumbers.join(', ')}`);



/* Array manipulation: Find
Given an array of numbers, create a function that finds the first number greater than 15 using
find.*/

const elements = [1, 9, 11, 13, 17, 19];

function findNumber(arr) {
    return arr.find((num => num > 15));
}
const findResult = findNumber(elements);
console.log(`The first number greater than 15 is ${findResult}`);



/* Array manipulation: Reduce
Given an array of numbers, create a function that sums all numbers using reduce.*/

const element = [11, 22, 33, 44, 55];
let sum = 0;
function sumElement(arr) {
    const sum_result = arr.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0);
    return sum_result;
}
const addElement = sumElement(element);
console.log("The sum of an array is "+ addElement);



/* Object Manipulation
Given an array of user objects, write a function to transform this array into an object where the
keys are user IDs and the values are the corresponding user objects.*/

function arrayToObject(arrayUsers) {
    return arrayUsers.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  }
  
  const arrayUsers = [
    { id: 1, name: "Ashish", age: 25 },
    { id: 2, name: "Sameer", age: 30 },
    { id: 3, name: "Manoj", age: 35 }
  ];
  
  const usersObject = arrayToObject(arrayUsers);
  console.log(usersObject);

/* Classes and objects
Create a Person class with a constructor that accepts name and age parameters. Add a
method describe that returns a string describing the person. */

function person(fname, age){
    this.name = fname;
    this.age = age;
    this.describe = function() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

const personDetail = new person("Reena Gurung", 20);
console.log(personDetail.describe());


/* Inheritance
Create a Student class that extends Person and adds a grade property. Add a method study
that returns a string indicating the student is studying. */

class Person {
    constructor(fname, age) {
      this.name = fname;
      this.age = age;
    }
    studentDetails() {
        return `${this.name} is ${this.age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(fname, age, grade) {
      super(fname, age);
      this.grade = grade;
    }
    study() {
        return `${this.name} is studying.`;
    }
  }
  
let studentDetail = new Student("Reena", 20, "A");
console.log(studentDetail.studentDetails());
console.log(studentDetail.study());


/* Error Handling with Promises
Modify the fetchData function to randomly reject the promise with an error message "Failed to
fetch data" Handle this error using .catch when calling the function. */

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous fetching after 2 seconds
      setTimeout(() => {
        const users = []; // Empty array to trigger the error
        
        // Simulate a condition to trigger an error (if users array is empty)
        if (users.length === 0) {
          reject("Failed to fetch data"); 
        } else {
          // Resolve the promise with the array of users
          resolve(users);
        }
      }, 2000); // 2 seconds delay
    });
  }
  
fetchData()
.then(users => {
console.log(users);
})
.catch(error => {
console.error("Error fetching data:", error);
});


/*Error Handling with Async/Await
Modify the fetchData function with async/await to handle errors using try/catch blocks. */

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous fetching after 2 seconds
      setTimeout(() => {
        const users = []; // Empty array to trigger the error
        
        // Simulate a condition to trigger an error (if users array is empty)
        if (users.length === 0) {
          reject("Failed to fetch data"); 
        } else {
          // Resolve the promise with the array of users
          resolve(users);
        }
      }, 2000); // 2 seconds delay
    });
  }
  
async function fetchDataAsync() {
try {
    const users = await fetchData();
    console.log(users);
} catch (error) {
    console.error("Error:", error);
    }
}
fetchDataAsync();
  

/* Complex Array Manipulation
Given an array of users, where each user has a name and an array of hobbies, create a
function that returns an array of all unique hobbies using reduce. */

function getAllUniqueHobbies(users) {
    // Use reduce to accumulate all hobbies into a single array
    const allHobbies = users.reduce((accumulator, currentUser) => {
      // Concatenate the hobbies of the current user with the accumulator
      return accumulator.concat(currentUser.hobbies);
    }, []);
  
    // Use Set to remove duplicate hobbies, then convert it back to an array
    const uniqueHobbies = [...new Set(allHobbies)];
    
    return uniqueHobbies;
  }
  const users = [
    { name: "Prerana", hobbies: ["reading", "painting", "gardening"] },
    { name: "Khusbu", hobbies: ["gardening", "cooking", "photography"] },
    { name: "Ruchi", hobbies: ["painting", "travelling", "photography"] }
  ];
  
  const uniqueHobbies = getAllUniqueHobbies(users);
  console.log(uniqueHobbies); 

