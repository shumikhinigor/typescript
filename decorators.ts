// Example 1
interface ComponentDecorator {
    selector: string
    template: string
}
function ComponentDecorator(config: ComponentDecorator) {
    return function<T extends { new(...args: any[]): object }>(Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);
                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template
            }
        }
    }
}
function Bind(_1: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
    const original = descriptor.value
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this)
        }
    }
}
@ComponentDecorator({
    selector: '#app',
    template: `
        <div class="card">
            <div class="card-content">
                <div class="card-title">Card</div>
            </div>
        </div>
    `
})
class CardComponent {
    constructor(public name: string) {}
    @Bind
    logName(): void {
        console.log(`Component Name: ${this.name}`)
    }
}
const card = new CardComponent('card')
const btn = document.querySelector('#btn')!
btn.addEventListener('click', card.logName)

// Example 2
type ValidatorType = 'required' | 'email'
interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}
const validators: ValidatorConfig = {}
function Required(target: any, prop: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [prop]: 'required'
    }
}
function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) return true
    let isValid = true
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}
class Form {
    @Required
    public email: string | void
    constructor(email?: string) {
        this.email = email
    }
}
const form = new Form('test@test.ru')
console.log(form)

if (validate(form)) console.log('Valid: ', form)
else console.log('Validation Error')