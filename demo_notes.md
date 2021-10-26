# Deep dive into React (Hooks)

Create React clone in under 30 lines of code

## Goals

Inspire you to be curious about React and JS, deep dive and dare to question any other technology.

## The Plan ( TODO )

1. create simple react app ( codesandbox ) that has one component with state for counter and text ( controlled input )
   the app comp. has to be able to unmount the component on button click

2. Explain breifly how hooks works based on the example app ( above )

3. Refresher/Demo on JS Closures ( use later in the demo below )

4. Recreate react with the functionality that covers the same example ( above )

## Demo Notes

### Why React Hooks ?

React Hooks enable functionalities previously available only for the class components.

Functional components are easy to write and test. ( less boilerplate and less verbose compared to class components )

Thanks to the custom hooks we can abstract away most of the component logic, easily share and reuse it.

### What this lecture is NOT about ?

Functional vs Class Components ( and even less about Functional vs OOP programming although we touch the subject )

### Its important some key misconceptions about JS to be cleared before we start

When people talk about OOP they likely think of Class oriented programing.

The key in OOP is how you are able to create objects. In Class oriented ( most ) languages you create object as instance of a Class where produced object is a copy (of behavior) of the parent/blueprint.

In JS is not like that! JS doen't have real Classes, they are syntactic sugar over functions ( and functions are first-class objects ) and the whole mechanism of OOP in JS ( prototype chain !== inheritance ) is way diffrent compared to Class oriented programing languages. ( Great topic for another lecture )

Class design pattern is **not** the **only** way to properly design software! It's an option.

_Bonus resource:_ <https://github.com/getify/You-Dont-Know-JS>

The main thing is to open your mind and remember when you see a function oriented pattern in JS this **does not** mean functional programming. You should not be tempted to force your Class oriented programing understaning to fit directly into your JS code design and architecure ( although you can ). There are other techniques that might be better suited (OLOO, Behavior Delegation, Mixins). You can also use other languages/superset that compile down to JS and extend it's features ( such as TypeScript )

The correct way of thinking in JS ( and in general ) is just about patterns. A lot of great technologies utilize both OO and functional patterns (Angular framework is one example [RxJs, NgRx - Redux])

In result we have diffrent tools, technologies and design patterns (language or framework specific) that can be utilized.

### Few definitions and examples

**Closure** is when a function 'remembers' its lexical scope even when the function is executed outside that lexical scope.

Practical example of a closure with asynchronous callbacks.

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.

```js
function counter() {
  let index = 0;

  setTimeout(function () {
    console.log(++index);
  }, 1000);
  setTimeout(function () {
    console.log(++index);
  }, 2000);
}

counter(); // 1 2
```

Other definitions related to the common usage of closures are:

- **High Order Functions** - A higher order function is a function that takes a function as an argument, or returns a function.

- **First-class functions** - functions are treated like any other variable.

```js
function HOF() {
  const someData = "Some value"; // private data.

  return function {
     console.log(someData);
  }
}

const returnedFunc = HOF();

returnedFunc(); // Output: "Some value"
```

In JavaScript, closures are the primary mechanism used to enable data privacy.

## Further resources

<https://www.slideshare.net/AnkitMuchhala/react-internals-how-understanding-react-implementation-can-help-us-write-better-code>

<https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS>
