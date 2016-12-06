/*function echo(el: number): number {
    return el
}*/

function echo(el: any): any {
    return el
}

let ret = echo(10)
console.log(ret, typeof ret)

ret = echo('hello world')
console.log(ret, typeof ret)

function genericEcho<T>(el: T): T {
    return el
}

ret = genericEcho<number>(10)
console.log(ret, typeof ret)

ret = genericEcho<string>('hello world')
console.log(ret, typeof ret)

class Config {
    private config: any
    
    constructor(cfg: any) {
        this.config = cfg
    }
    
    get<T>(prop: string): T {
        return this.config[prop]
    }
}

let config = new Config({version: '1.0', revision: 22, name: 'a Project'})
console.log(config.get<number>('revision'), config.get<string>('name'))

function genericEcho2<T, U>(el: T, prop: U): T {
    console.log(prop)
    return el
}

let genericFn: <T, U>(el: T, prop: U) => T = genericEcho2
genericFn('hello', 10)

interface GenericFn<T, U> {
    (el: T, prop: U): T
}

function callGenericFn<T, U>(fn: GenericFn, el: T, prop: U): void {
    console.log(fn(el, prop))
}

callGenericFn(genericEcho2, "hello world", 10)

class GenericNumber<T> {
    private num: T
    
    constructor(num: T) {
        this.num = num
    }
    
    get value(): T {
        return this.num
    }
}

let gn = new GenericNumber<number>(10)
console.log(gn.value, typeof gn.value)
let gns = new GenericNumber<string>('10')
console.log(gns.value, typeof gns.value)

interface ElementLength {
    length: number
}

function genericElement<T extends ElementLength>(el: T): void {
    console.log(el.length)
}

genericElement<string>('hello dude!')
genericElement<number[]>([10, 20, 30])
genericElement<number>(10) // error