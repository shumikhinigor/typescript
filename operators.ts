interface Person {
    name: string
    age: number
}
// 'name' | 'age'
type PersonKeys = keyof Person
let key: PersonKeys = 'name'
key = 'age'

type User = {
    id: number
    name: string
    email: string
    createdAt: Date
}
// 'name' | 'email'
type UserKeysNoMeta = Exclude<keyof User, 'id' | 'createdAt'>
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>
let user1: UserKeysNoMeta = 'name'