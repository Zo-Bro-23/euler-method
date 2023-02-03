function newtonMethod(func, inputIterations, inputInitial) {
    if (!func) {
        throw new Error('Parameter `function` is required!')
    }
    const iterations = inputIterations || 100
    const initial = inputInitial || 0
    const math = require('mathjs')
    const funcCompiled = math.compile(func)
    const dydx = math.derivative(func, 'x')

    let r = initial
    for (i = 0; i < iterations; i++) {
        r = r - funcCompiled.evaluate({ x: r }) / dydx.evaluate({ x: r })
    }
    return r
}

module.exports = newtonMethod
