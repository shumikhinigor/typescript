const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const arrayOfStrings: Array<string> = ['Hello', 'Typescript']

// dynamic content
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

// Example 1
const cars: string[] = ['Ford', 'Audi']
const carsTwo: Array<string> = ['Ford', 'Audi']

// Example 2
const promise = new Promise<number>(resolve => {
    setTimeout(() => {
        resolve(42)
    }, 3000)
})
promise.then(res => {
    console.log('res: ', res.toFixed())
})

// Example 3
function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b)
}
const merge = mergeObjects({ name: 'Igor' }, { age: 24 })
console.log(merge)

// Example 4
interface ILength {
    length: number
}
function withCount<T extends ILength>(value: T): { value: T, count: string} {
    return {
        value,
        count: `${value.length} symbols`
    }
}
const hello = withCount('Hello')
console.log(hello)

// Example 5
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
const person = {
    name: 'Igor',
    age: 24
}
const getPersonName = getObjectValue(person, 'name')
console.log(getPersonName)

// Example 6
class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {}
    add(item: T) {
        this._items.push(item)
    }
    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }
    get items(): T[] {
        return this._items
    }
}
const strings = new Collection<string>(['I', 'Am', 'Strings'])
strings.add('!')
strings.remove('Am')
console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(4)
numbers.remove(2)
console.log(numbers.items)

// Example 7
interface CarInfo {
    brand: string
    year: number
}
function createAndValidateCar(model: string, year: number): CarInfo {
    const car: Partial<CarInfo> = {}

    if (model.length > 3) {
        car.brand = model
    }
    if (year > 2000) {
        car.year = year
    }
    return car as CarInfo
}

// Example 8
const carBrands: Readonly<Array<string>> = ['Ford', 'Audi']
// carBrands.shift()
console.log(carBrands[0])
const ford: Readonly<CarInfo> = {
    brand: 'Ford',
    year: 2021
}
// ford.brand = 'Audi'
console.log(ford.brand)