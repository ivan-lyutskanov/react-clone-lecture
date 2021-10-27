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

  function someFunc (y) {
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
