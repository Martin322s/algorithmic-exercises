function solve(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop())
    }

    console.log(array.join(' '));
}