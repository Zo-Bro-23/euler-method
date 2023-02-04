const eulerMethod = require('euler-method')

document.getElementById('button').onclick = () => {
    let result

    try {
        // let iterations
        // let initialX
        // let initialY
        // let final
        if (!Number.isInteger(parseFloat(document.getElementById('iterations').value)) && document.getElementById('iterations').value) {
            throw new Error('Parameter `iterations` needs to be of type Integer!')
        }
        if (isNaN(document.getElementById('initial-x').value) && document.getElementById('initial-x').value) {
            throw new Error('Parameter `iterations-x` needs to be of type Number!')
        }
        if (isNaN(document.getElementById('initial-y').value) && document.getElementById('initial-y').value) {
            throw new Error('Parameter `iterations-y` needs to be of type Number!')
        }
        if (isNaN(document.getElementById('final').value) && document.getElementById('final').value) {
            throw new Error('Parameter `final` needs to be of type Number!')
        }

        const iterations = parseInt(document.getElementById('iterations').value || 100)
        const initialX = parseFloat(document.getElementById('initial-x').value || 0)
        const initialY = parseFloat(document.getElementById('initial-y').value || 1)
        const final = parseFloat(document.getElementById('final').value || 0.3)
        const text = document.getElementById('text').value || 'y'

        result = eulerMethod(text, iterations, { x: initialX, y: initialY }, final).y
    } catch (error) {
        result = error
    } finally {
        document.getElementById('result').innerHTML = `Result: ${result}`
    }
}

document.getElementById('cleartext').onclick = () => {
    document.getElementById('result').innerHTML = ''
    document.getElementById('text').value = ''
    document.getElementById('initial-x').value = ''
    document.getElementById('initial-y').value = ''
    document.getElementById('iterations').value = ''
    document.getElementById('final').value = ''
}

document.getElementById('text').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("button").click()
    }
})

document.getElementById('initial-x').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("button").click()
    }
})

document.getElementById('initial-y').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("button").click()
    }
})

document.getElementById('final').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("button").click()
    }
})

document.getElementById('iterations').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("button").click()
    }
})