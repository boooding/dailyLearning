let intersection1 = (num1, num2) => {
    return [...new Set(num1)].filter(n => new Set(num2).has(n))
}