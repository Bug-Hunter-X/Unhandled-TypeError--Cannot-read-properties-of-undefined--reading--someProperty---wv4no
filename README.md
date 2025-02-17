# React Native: Accessing State Before Initialization

This repository demonstrates a common error in React Native where a state variable is accessed before it has been properly initialized. This typically occurs in functional components using `useState` when asynchronous operations (e.g., data fetching) are involved.

## Problem

The `bug.js` file contains a functional component that attempts to access a state variable (`data`) before it has received a value from an API call. This leads to a runtime error: `TypeError: Cannot read properties of undefined (reading 'someProperty')`.

## Solution

The `bugSolution.js` file demonstrates a corrected version that addresses this issue by using an optional chaining operator (`?.`) or nullish coalescing (`??`) to handle the possibility of `data` being `null` or `undefined` before the API call completes.  It also shows how to conditionally render content based on whether the data has been loaded.

## How to reproduce

1. Clone this repository.
2. Run `npx react-native run-android` or `npx react-native run-ios`.
3. Observe the error in the console and the corrected behavior in the solution file.