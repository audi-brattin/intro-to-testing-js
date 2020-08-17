// Unit tests for the helloWorld function
describe('helloWorld', function() {
  it('should be a defined function', function() {
    expect(typeof helloWorld).toBe('function');
  });
  it('should return a string when called', function() {
    expect(typeof helloWorld()).toBe("string");
  });
  it('should return the string "Hello, World!" when executed', function() {
    expect(helloWorld()).toBe("Hello, World!");
  });
  it("should never return 'undefined' when called", function() {
    expect(helloWorld()).not.toBe(undefined);
  });
});

describe('sayHello', function() {
  it('should be a defined function', function () {
    expect(typeof sayHello).toBe('function');
  });
  it('should return a string when called', function () {
    expect(typeof sayHello()).toBe("string");
  });
  it('should return the string "Hello, Jane!" when input is Jane', function () {
    expect(sayHello("Jane")).toBe("Hello, Jane!");
  });
  it("should  return 'Hello,Alex' when called", function () {
    expect(sayHello("Alex")).toBe('Hello, Alex!');
  });
  it("should  return 'Hello,Pat' when called", function () {
    expect(sayHello("Pat")).toBe('Hello, Pat!');
  });
  it('should return "Hello, World!"  when input is invalid', function () {
    expect(sayHello(null)).toBe("Hello, World!");
    expect(sayHello("")).toBe("Hello, World!");
    expect(sayHello(2.3)).toBe("Hello, World!");
    expect(sayHello("5")).toBe("Hello, World!");
    expect(sayHello([])).toBe("Hello, World!");
  });
})

describe('isFive', function() {
  it('should be a defined function', function () {
    expect(typeof isFive).toBe('function');
  });
  it('should return a boolean', function () {
    expect(typeof isFive()).toBe('boolean');
  });
  it('should return a true if x is 5 or "5"', function () {
    expect(isFive(5)).toBe(true);
    expect(isFive("5")).toBe( true);
  });
})
describe('isEven', function() {
  it('should be a defined function', function () {
    expect(typeof isEven).toBe('function');
  });
  it('should return a boolean', function () {
    expect(typeof isEven()).toBe('boolean');
  });
  it('should return a true if x is NOT even', function () {
    expect(isEven(2)).toBe(true);
    expect(isEven(-4)).toBe( true);
  });
  it('should return a false if x is even', function () {
    expect(isEven(3)).toBe(false);
    expect(isEven("banana")).toBe( false);
    expect(isEven(Infinity)).toBe(false);
    expect(isEven(true)).toBe( false);
    expect(isEven(false)).toBe( false);
  })
})
describe('isVowel', function() {
  it('should be a defined function', function () {
    expect(typeof isVowel).toBe('function');
  });
  it('should return a boolean', function () {
    expect(typeof isVowel()).toBe('boolean');
  });
  it('should return true if x is  a vowel', function () {
    expect(isVowel("a")).toBe(true);
    expect(isVowel("A")).toBe(true);
  });
  it('should return a false if x is NOT a vowel', function () {
    expect(isVowel("y")).toBe(false);
    expect(isVowel(true)).toBe( false);
    expect(isVowel(false)).toBe( false);
    expect(isVowel('banana')).toBe( false);
    expect(isVowel("")).toBe( true);
  });
});
describe('add', function() {
  it('should be a defined function', function () {
    expect(add(2, 3)).toBe(5);
    expect(add(-3, -9)).toBe(-12);
    expect(add("5", 6)).toBe(11);
    expect(add(-4, "10")).toBe(6);
  });
  it('should return NaN if input is NOT valid', function () {
    expect(add("banana", "split")).toBeNaN();
    expect(add(2, "apples")).toBeNaN();
    expect(add()).toBeNaN();
  });
});
