/**
 * In JavaScript, a computed property allows you to define an object property name dynamically using an expression. This is done using square brackets ([]) within an object literal. Computed properties are useful when you want the property name to be determined at runtime.


const obj = {
  [expression]: value
};

Example:

const keyName = "dynamicKey";

const myObject = {
  [keyName]: "This is a dynamic property",
  ["key_" + 1]: "This is another computed property"
};

console.log(myObject.dynamicKey); // Output: This is a dynamic property
console.log(myObject.key_1);      // Output: This is another computed property

Use Cases:

Dynamic property names: When property names depend on variables or runtime values.
Iterating over arrays: Creating properties for each item in an array.
Programmatically building objects: Reducing boilerplate code by computing keys and values dynamically.

Advanced Example:

const prefix = "user_";
const users = ["Alice", "Bob", "Charlie"];

const userObject = {
  [prefix + 1]: users[0],
  [prefix + 2]: users[1],
  [prefix + 3]: users[2]
};

console.log(userObject);
// Output:
// {
//   user_1: "Alice",
//   user_2: "Bob",
//   user_3: "Charlie"
// }

Computed properties are especially useful when combined with modern JavaScript features like Map or dynamic 
object creation in frameworks and libraries.








 */