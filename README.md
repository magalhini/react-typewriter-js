Typewriter JS
=============

![dfg](https://raw.githubusercontent.com/magalhini/typewriter-js/master/example.gif)

## What is is
A very simple script that simulates typewriting text on a webpage.

## Dependencies
None, plain vanilla JS.

## Options
- Custom speed
- Custom random speed

## Sample Usage
```
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
