namespace TS {
    export class Person {
        constructor(private _name: string) {}
        get name(): string {
            return this._name
        }
    }
    const g = 8.9
    export function introduce(): void {console.log('hello')}
}

let foos = new TS.Person('foo')
console.log(foos.name)