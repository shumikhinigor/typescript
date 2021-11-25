function add(a: number, b: number): number {
    return a + b
}
function toUppercase(str: string): string {
    return str.toUpperCase()
}
interface Position {
    x: number | undefined
    y: number | undefined
}
interface PositionDefault extends Position{
    default: string
}
function position(): Position
// @ts-ignore
function position(a: number): PositionDefault
function position(a: number, b: number): Position
function position(a?: number, b?: number) {
    if (!a && !b) return { x: undefined, y: undefined }
    if (a && !b) return { x: a, y: undefined, default: a.toString() }

    return { x: a, y: b }
}
console.log('empty: ', position())
console.log('one param: ', position(42))
console.log('two params: ', position(42, 42))