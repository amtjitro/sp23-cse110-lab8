// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
test('888-888-8888 is valid', () => {
    expect(functions.isPhoneNumber('888-888-8888')).toBe(true);
});

test('(619)000-9999 is valid', () => {
    expect(functions.isPhoneNumber('(619)000-9999')).toBe(true);
});

test('(619) is invalid', () => {
    expect(functions.isPhoneNumber('(619)')).toBe(false);
});

test('123-123-123 is invalid', () => {
    expect(functions.isPhoneNumber('123-123-123')).toBe(false);
});

//isEmail
test('john@gmail.com is valid', () => {
    expect(functions.isEmail('john@gmail.com')).toBe(true);
});

test('john@edu.com is valid', () => {
    expect(functions.isEmail('john@edu.com')).toBe(true);
});

test('ucsd.edu is invalid', () => {
    expect(functions.isEmail('ucsd.edu')).toBe(false);
});

test('john@edu is invalid', () => {
    expect(functions.isEmail('john@edu')).toBe(false);
});

// isStrongPassword
test('hello is valid', () => {
    expect(functions.isStrongPassword('hello')).toBe(true);
});

test('HELLO is valid', () => {
    expect(functions.isStrongPassword('HELLO')).toBe(true);
});

test('bye is invalid', () => {
    expect(functions.isStrongPassword('bye')).toBe(false);
});

test('ucsdcomputerscience is invalid', () => {
    expect(functions.isStrongPassword('ucsdcomputerscience')).toBe(false);
});

//isDate
test('5/27/2023 is valid', () => {
    expect(functions.isDate('5/27/2023')).toBe(true);
});

test('5/7/2023 is valid', () => {
    expect(functions.isDate('5/7/2023')).toBe(true);
});

test('5/27/23 is invalid', () => {
    expect(functions.isDate('5/27/23')).toBe(false);
});

test('5/7 is invalid', () => {
    expect(functions.isDate('5/7')).toBe(false);
});

//isHexColor
test('000 is valid', () => {
    expect(functions.isHexColor('000')).toBe(true);
});

test('888888 is valid', () => {
    expect(functions.isHexColor('888888')).toBe(true);
});

test('000 000 is valid', () => {
    expect(functions.isHexColor('000 000')).toBe(false);
});

test('#xyz is valid', () => {
    expect(functions.isHexColor('#xyz')).toBe(false);
});