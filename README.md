# Euler-Method
> ***Web version live [here](https://euler-method.zohan.tech)!***

This is a package for approximating (numerically) the solution to differential equations of the form $y'=f(x,y)$ where $y$ is an implicit function of $x$ and $f(x,y)$ is a function of both $y$ and $x$. [Learn more](https://en.wikipedia.org/wiki/Euler_method).

```js
const eulerMethod = require('euler-method')
console.log(eulerMethod('y', 100, { x: 0, y: 1 }, 0.3))
```

### **```eulerMethod(func, iterations, initial, final)```**

#### func - ```Required``` - The mathematical function to evaluate - Ommit the $y'$ part (Input `'y'` for the differential equation $y'=y$, for example) - Uses ```mathjs``` formatting - See [here](https://mathjs.org/docs/expressions/syntax.html) for more information

#### iterations - ```Default: 100``` - Number of times to iterate Euler's Method - More times yields more accurate results (but takes more time)

#### initial - ```Default: { x: 0, y: 1 }``` - A value that is guarenteed to be on the function - Due to the Fundamental Theorem of Calculus, differential equations have an infinite amount of solutions (determined up to a constant), so an "initial" value needs to be provided to calculate a unique value for the function

#### final - ```Default: 0.3``` - This is the value for which the function will be approximated to - The $y$ value will be outputed for this particular $x$ value - Using $y'=y$, for example, a `final` value of $10$ will give the value for $y$ when $x=10$

## Result
```js
{ x: 0.3000000000000002, y: 1.3492527193665074 }
```