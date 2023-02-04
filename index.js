function eulerMethod(func, iterations = 100, initial = {
    x: 0,
    y: 1
}, final = 0.3) {
    if (!func) {
        throw new Error('Parameter `function` is required!')
    }

    if (typeof initial !== 'object' || typeof initial.x !== 'number' || typeof initial.y !== 'number') {
        throw new Error('Parameter `initial` needs to be type Object with attributes `x` and `y` of type Number!')
    }

    const math = require('mathjs')
    const funcCompiled = math.compile(func)
    const increment = (final - initial.x) / iterations

    let r = initial
    for (i = 0; i < iterations; i++) {
        const dy = funcCompiled.evaluate({ x: r.x, y: r.y })
        r.x = r.x + increment
        r.y = r.y + dy * increment
    }
    return r
}

module.exports = eulerMethod
