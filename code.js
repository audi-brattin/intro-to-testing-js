// helloWorld function

function helloWorld() {
  return 'Hello, World!';
}

function sayHello(name) {
  if (typeof name === 'string'
    && name.length > 0
    && isNaN(Number(name))
  ) {
    return "Hello, " + name + "!";
  } else {
    return "Hello, World!";
  }
}

function isFive(x) {
  return x == 5;
}

function isEven(x) {
  if (
    typeof x === 'number'
    || typeof x === 'string'
  ) {
    return Number(x) % 2 === 0;
  } else {
    return false;
  }
}

function isVowel(x) {
  let vowels = "aeiouAEIOU";
  return vowels.indexOf(x) !== -1;
}

function add(x, y) {
  let num1 = Number(x);
  let num2 = Number(y);

  if (
    num1 !== undefined
    && num2 !== undefined
    && !isNaN(num1)
    && !isNaN(num2)
  ) {

    return num1 + num2;
  } else {
  }
  return NaN;
}
