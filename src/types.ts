// basic syntax -> let/var var_name: type = initValue
// boolean
let isBool: boolean = true

console.log(isBool)

// number
let decimal: number = 10
let hex: number = 0xf
let binary: number = 0b0110
let octal: number = 0o744

console.log(decimal, hex, binary, octal)

// string
let name: string = 'foo'
let surname: string = "bar"
let hello: string = `hello I'm ${name} ${surname}`

console.log(name, surname, hello)

// array
let fruits: string[] = ['banana', 'apple', 'pineapple']

console.log(fruits)

let vegetables: Array<string> = ['carrot', 'salad']

console.log(vegetables)

// tuple
let props: [string, number] = ['foo', 25]

console.log(props, props[0].length, props[1])

// props.push(true) // compile-time error

// enum
enum Colors {Red, Black, Yellow}
let colorIndex: number = Colors.Red
console.log(colorIndex)
let colorName: string = Colors[0]
console.log(colorName)

// any
let unknown: any
unknown = 10
console.log(unknown)
unknown = 'a string'
console.log(unknown)

// void
let nullReturn: void = null
let undefinedReturn: void = undefined

console.log(nullReturn, undefinedReturn)

// nullReturn = 10 // compile-time error

// never
function fail(): never {
    throw new Error('never')
}

try {
    fail()
} catch (err) {
    console.log(err)
}

// type assertion
let someValue: any = 'hello world'
let numberLenAs: number = (someValue as string).length
let numberLen: number = (<string> someValue).length
console.log(numberLen, numberLenAs)