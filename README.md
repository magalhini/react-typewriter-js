React Typewriter
=============

![ex](https://raw.githubusercontent.com/magalhini/typewriter-js/master/example.gif)

A small helper script that simulates a typewriting text effect on a webpage.

## Dependencies
There are two versions of this project:

- A plain vanilla JS (no jQuery, no libraries)
- An ES6 / React Component version

## Options
- Custom speed
- Custom random speed
- Different messages (React only)
- Custom tag to display the element (React only)

## Sample Usage (vanilla version)

```js
var el = document.querySelectorAll('h1')[0];
var el2 = document.querySelectorAll('h2')[0];

Typewriter.start(el, 50, {
  random: true,
  callback: function () {
    console.log('i am a callback');
  }
});

Typewriter.start(el2, 75);
```

## Sample Usage (React version)

```js
import Typewriter from './Typewriter';

<Typewriter
    speed={88}
    tag="pre"
    text={["Hello world.", "What do I do now?"]}
    randomSpeed={true} />
```
