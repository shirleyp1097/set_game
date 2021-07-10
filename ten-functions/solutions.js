"use strict";

/**
 * Write your solutions here.

 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input) {
    if (input === true) {
        return true;
    } else {
        return false;
    }
}

function isFalse(input) {
    if (input === false) {
        return true;
    } else {
        return false;
    }
}

function not(input) {
    return !(input);
}

function addOne(input) {
    var num = Number(input);
    return num + 1;
}

function isEven(input) {
    var num = Number(input);
    return num % 2 == 0;
}

function isIdentical(input_1, input_2) {
    return input_1 === input_2;
}

function isEqual(input_1, input_2) {
    return input_1 == input_2;
}

function or(input_1, input_2) {
    return input_1 || input_2;
}

function and(input_1, input_2) {
    return input_1 && input_2;
}

function concat(input_1, input_2) {
    return String(input_1) + String(input_2);
}