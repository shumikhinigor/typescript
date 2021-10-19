class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name}: Typescript version is ${this.version}`
    }
}
const typescript = new Typescript('1.0.0')

class Car {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {
        this.model = model
    }
}
const car = new Car('BMW')

class Animal {
    // available inside the class and classes that inherit it
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    // available only inside the class
    private go() {
        console.log('Go!')
    }
}
class Cat extends Animal {
    public setVoice(voice: string) {
        this.voice = voice
    }
}
const cat = new Cat()
cat.setVoice('Meow')

abstract class Component {
    abstract render(): void
    abstract info(): string
}
class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info';
    }
}
