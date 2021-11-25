// import
/// <reference path="types.ts" />
namespace FormNamespace {
    export type FormType = 'inline' | 'block'
    export type FormState = 'active' | 'disabled'

    export interface FormInfo {
        type: FormType
        state: FormState
    }
}
namespace FormNamespace {
    class Form {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {}

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
    const myForm = new Form('test@test.ru')
    console.log(myForm)
}