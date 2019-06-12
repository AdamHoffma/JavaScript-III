/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. I believe that in the global scope is "this" is the program running your browser
* 2. Implicit binding when you call a function with a dot "this" becomes the obj before the dot
* 3. New binding Allows you to create a malable object you can then replace "this" with any data in that object by using keyword New
* 4. Explicit binding using .call and .apply to bind new data to "this"
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding 
// console.log(this)

// Principle 2
const obj = {
name: 'Adam', 
lastname: 'Hoffman',
speak: function(greeting) {
    console.log(`${this.name} ${this.lastname}`);
    console.log(this)
}
}
obj.speak('hello')
// code example for Implicit Binding

// Principle 3
function Constructor(emotion) {
    this.declarative = 'I am';
    this.emotion = emotion;
    this.declare = function() {
        console.log(this.declarative + this.emotion);
        console.log(this)
    }
}
const happy = new Constructor('happy')
const sad = new Constructor('sad')

happy.declare()
sad.declare()

const angry = new Constructor('angry')
angry.declare()
// code example for New Binding

// Principle 4
angry.declare.call(sad)
happy.declare.call(angry)
// code example for Explicit Binding