export function solve(input) {
    let secondCriteria = input.sort((a, b) => a.localeCompare(b));
    let result = secondCriteria.sort((a, b) => a.length - b.length);

    return result.join(' ');
}

console.log(solve(['1', '2', '3', '4']));
