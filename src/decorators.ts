import 'reflect-metadata'

// decorator factory
function color(value: string) {
    console.log('@color evaluated')
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor): void => {
        console.log(target, propertyKey, descriptor, value)
        console.log('@color called')
    }
}

function Armor(cfg: any) {
    return (constructor: Function) => {
        constructor.prototype._armor = cfg.type;
    }
}

function Screaming(sentence: string): Function {
    return (target: any, property: string, descriptor: PropertyDescriptor): void => {
        let fn = descriptor.value
        descriptor.value = (t: string) => {
            console.log(`******** ${sentence.toUpperCase()} ********`)
            fn(t)
        }
    }
}

function minLen(target: any, property: string, index: number) {
    console.log(target, property, index)
    console.log(Reflect.getOwnMetadata('minLen', target, property))
}

@Armor({type: 'chainmail'})
class Knight {
    private _armor: string

    @Reflect.metadata('format', 'Sir, %s')
    private _name: string

    constructor(name: string) {
        this._name = name
    }

    get armor(): string {
        return this._armor
    }

    @Screaming('for the king')
    attack(target: string): void {
        console.log(`attacking ${target}`)
    }

    introduce(): void {
        const fmt = Reflect.getMetadata('format', this, '_name')
        console.log(fmt.replace('%s', this._name))
    }

    ride(@minLen horse: string) {
        console.log(`riding ${horse}`)
    }
}

let lancillotto = new Knight("Lancillotto")
lancillotto.attack('dragon')
console.log(lancillotto.armor)
lancillotto.introduce()