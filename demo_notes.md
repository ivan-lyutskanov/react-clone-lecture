# Deep dive into React (Hooks)

Create React clone in under 30 lines of code

## Goals

Inspire you to be curious about React and JS, deep dive and dare to question any other technology.

## The Plan

1. Simple React app [demo](https://codesandbox.io/s/react-clone-demo-example-qm8im?file=/src/App.js)

2. Breif explanation of how React hooks works based on the example app

3. Refresher/Demo on JS Closures

4. Recreate react with the functionality that covers the same example ( above )

## Notes

### Why React Hooks ?

React Hooks enable functionalities previously available only for the class components.

Functional components are easy to write and test. ( less boilerplate and less verbose compared to class components )

Thanks to the custom hooks we can abstract away most of the component logic, easily share and reuse it.

### What is a Closure ?

**Closure** is when a function 'remembers' its lexical scope even when the function is executed outside that lexical scope.

Example of a closure with asynchronous callbacks.

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

More practicle example

```js
function HOF() {
  // Encapsulates some logic
  const x = 3;

  function someFunc(y) {
    return x + y;
  }

  //expose an interface
  return someFunc;
}

const returnedFunc = HOF();

returnedFunc(5); // returns 8
```

## Resources

<https://www.slideshare.net/AnkitMuchhala/react-internals-how-understanding-react-implementation-can-help-us-write-better-code>

<https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS>
