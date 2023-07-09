/*
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.

const person = {
  name: "SAHIL HOODA",
  age: 22,
  address: {
    street: "DS STREET",
    city: "NANGLOI",
    state: "DELHI",
  },
};

*/

const person = {
  name: "SAHIL",
  age: 22,
  address: {
    street: "DS STREET",
    city: "NANGLOI",
    state: "DELHI",
  },
};

// Code For destructuring

function destruct({ name, address: { street } }) {
  return { name, street };
}

let { name, street } = destruct(person);

console.log(name);
console.log(street);
