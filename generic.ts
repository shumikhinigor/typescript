const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const arrayOfStrings: Array<string> = ['Hello', 'Typescript']

// dynamic content
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}