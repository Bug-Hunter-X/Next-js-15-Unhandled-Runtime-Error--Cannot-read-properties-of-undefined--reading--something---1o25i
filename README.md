# Next.js 15 Unhandled Runtime Error

This repository demonstrates a common runtime error in Next.js 15 applications and how to handle it gracefully.  The error occurs when trying to access a property of an undefined variable.  This example showcases the problem and its solution. 

## The Problem

The `pages/about.js` file attempts to access the `something` property of the `myVar` variable, which is undefined, leading to a runtime error.  This can manifest differently depending on your environment and error handling configuration.

## The Solution

The `pages/aboutSolution.js` demonstrates how to prevent this error using optional chaining (?.) and nullish coalescing (??). This allows you to safely access properties even if the variable is undefined or null.