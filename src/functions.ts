// functions
function sum(a, b: number): number {
    return a + b
}
console.log(sum(10, 20))

// let c = sum(10, 20, 30) // compile-time error

let afSum = (a, b: number): number => {
    return a + b
}
console.log(afSum(20, 20))

// optional params
function hellof(name: string, nickname?: string): void {
    let sentence = `My name is ${name}`
    if (nickname) {
        sentence += `, but you can call me ${nickname}`
    }
    
    console.log(sentence)
}
hellof('Vincenzo')
hellof('Vincenzo', 'Wilk')

// default params
function introduce(name: string, skill: string = 'Typescript'): void {
    console.log(`${name} knows ${skill}`)
}

introduce('Wilk')
introduce('Wilk', undefined)
introduce('Wilk', 'Javascript')

// rest params
function printSkills(name: string, ...skills: string[]): void {
    console.log(`${name} knows: ${skills.join(', ')}`)
}

printSkills('Wilk', 'JS', 'TS', 'GoLang', 'C')

// functions overload
function star(x: number): void
function star(x: string): void
function star(x): void {
    if (typeof x === 'number') {
        console.log(`*** ${x} ***`)
    } else {
        console.log(`___${x}___`)
    }
}

star(10)
star('Wilk')