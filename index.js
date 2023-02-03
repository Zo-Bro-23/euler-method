function eulerMethod(func, iterations = 100, initial = {
    x: 0,
    y: 0
}) {
    if (!func) {
        throw new Error('Parameter `function` is required!')
    }
    
    if(typeof initial !== 'object' || typeof initial.x !== 'number' || typeof initial.y !== 'number'){
        throw new Error('Parameter `initial` needs to be type Object with attributes `x` and `y` of type Number!')
    }
    
    const math = require('mathjs')
    const funcCompiled = math.compile(func)
    const dydx = math.derivative(func, 'x')

    let r = initial
    for (i = 0; i < iterations; i++) {
        const dy = funcCompiled.evaluate({ x: r.x, y: r.y })
        console.log(dy)
        r = r - funcCompiled.evaluate({ x: r }) / dydx.evaluate({ x: r })
    }
    return r
}

eulerMethod('x+y', 1)

module.exports = newtonMethod
