
// not pure
let mini = 18
function checkAge(age) {
    return age >= mini;
}

// pure
function checkAge(age) {
    let mini = 18;
    return age >= 18;
}