const names = ["Daniel", "James", "irina", "Mozafar"]

function isNameInArray(name, names) {
    if (names.includes(name)) {
        return 'Found Me!'
    } else {
        'Have not Found me:('
    }
}
console.log(isNameInArray("James", names))