// classes
class Person {
    public name: string
    public age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public introduce(): void {
        console.log(`${this.name} ${this.age}`)
    }
}

let foo: Person = new Person('foo', 25)
console.log(foo.name, foo.age)
foo.introduce()

// inheritance
class Developer extends Person {
    public skill: string

    constructor(name: string, age: number, skill: string) {
        super(name, age)
        this.skill = skill
    }

    public develop(): void {
        this.introduce()
        console.log(`I know ${this.skill}`)
    }
}

let bar: Developer = new Developer('bar', 33, 'Typescript')
console.log(bar.name, bar.age, bar.skill)
bar.develop()

// public, private, protected
class Backpack {
    private item: string
    constructor(theItem: string) {
        this.item = theItem
    }
    public getItem(): string {
        return this.item
    }
}

class Baggage extends Backpack {
    public getItem(): string {
        // return this.item // compile-time error
        return 'an item'
    }
}

let bp: Backpack = new Backpack('bottle')
console.log(bp.getItem())
// console.log(bp.item) // run-time error
let bg: Baggage = new Baggage('bottle')
console.log(bg.getItem())

class ProtectedBackpack {
    protected item: string
    protected constructor(theItem: string) {
        this.item = theItem
    }
}

class AdvancedBaggage extends ProtectedBackpack {
    private color: string
    constructor(theItem: string, theColor: string) {
        super(theItem)
        this.color = theColor
    }
}

let ab: AdvancedBaggage = new AdvancedBaggage('bottle', 'red')
console.log(ab)
/*let pb: ProtectedBackpack = new ProtectedBackpack('bottle') // compile-time error
console.log(pb)*/

// read-only properties
class Account {
    public readonly balance: number
    constructor(private code: string) {
        this.balance = 1000
    }
    public getCode(): string {
        return this.code
    }
}

let acc = new Account('private code')
console.log(acc.balance)
// acc.balance -= 500 // compile-time error
console.log(acc.getCode())

// getters/setters
class Hulk {
    private _focus: boolean = false

    get focus(): boolean {
        console.log('HULK SMASH!')
        return this._focus
    }

    set focus(focus: boolean) {
        console.log('HULK SMASH AGAIN!')
        this._focus = focus
    }
}

let hulk = new Hulk()
console.log(hulk.focus)
hulk.focus = true
console.log(hulk.focus)

// static
class Factory {
    public static produce(): void {
        console.log('producing something')
    }
}

Factory.produce()

// abstract
abstract class Animal {
    public name: string
    public abstract sleep(): void
    public move(): void {
        console.log(`${this.name} is moving away`)
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }

    public sleep(): void {
        console.log(`${this.name} is sleeping`)
    }
}

let doggy = new Dog('doggy')
doggy.move()
doggy.sleep()