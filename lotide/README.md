# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ivette_suarez/lotide`

**Require it:**

`const _ = require('@ivette_suarez/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Compare two arrays and return according message "Assertion passed" if they are equal or "Assertion failed" if they are not.
* `assertEqual(actual, expected)`: Compare two primitive values and return according message "Assertion passed" if they are equal or "Assertion failed" if they are not.
* `assertObjectsEqual(actual, expected)`: Compare two objects and return according message "Assertion passed" if they are equal or "Assertion failed" if they are not.
* `countLetters(sentence)`: Take in a sentence (as a string) and then return an object with the count of each of the letters in that sentence where the key is the letter and the value is the count.
* `countOnly(sentence)`: Given an array and an object function will return an object containing counts of all the strings found in the input array(keys), and their respective counts(values)
* `eqArrays(array1, array2)`: Take in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: Take in two objects and returns true or false, based on a perfect match.
* `findKey(obj, callback)`: Takes in an object and a callback, scan the object and return the first key for which the callback returns a truthy value, if no key is found, then return undefined.
* `findKeyByValue(obj, value)`: Take in an object and a value, scan the object and return the first key which contains the given value and if no key with that given value is found, then it should return undefined.
* `flatten(nestedArray)`: Take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
* `head(array)`: Returns the first item of the array.
* `letterPositions(sentence)`: Take in a sentence (as a string) and then return an object, where each position of the letters in that sentence is an array of positions as the value and the key is the letter.
* `map(array, callback)`: Take in two arguments, an array to map and a callback function, return a new array based on the results of the callback function.
* `middle(array)`: Take an array and return an array with only the middle element(s) of the provided array.
* `tail(array)`: Returns the "tail" of an array: everything except for the first item.
* `takeUntil(array, callback)`: Take in two arguments an array to map and a callback function and return an array of items by collecting them until the callback provided returns a truthy value.
* `without(sourceArray, itemsToRemoveArray)`: Take in a source array and a itemsToRemove array and return a new array with only those elements from source that are not present in the itemsToRemove array.
