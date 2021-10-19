// boolean
const isFetching: boolean = true
const isLoading: boolean = false

// number
const int: number = 42
const float: number = 4.2
const num: number = 3e10

// string
const message: string = 'Hello Typescript'

// array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const stringArray: string[] = ['Hello', 'Typescript']
const stringArray2: Array<string> = ['Hello', 'Typescript']

// tuple
const contact: [string, number] = ['Igor', 79000000000]

// any
let variable: any = 42
variable = '42'

// function
function sayMyName(name: string): void {
    console.log(name)
}

// never
function throwError(message: string): never {
    throw new Error(message)
}
function infinite(): never {
    while (true) {}
}

// type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id: ID = 1234
const id2: ID = '1234'

// null and undefined
type SomeType = string | null | undefined
const some: SomeType = '123'
const some2: SomeType = null
const some3: SomeType = undefined