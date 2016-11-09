// interfaces
interface IPlant {
    name: string,
    readonly type: string,
    color?: string
    // excess property check
    [propName: string]: any
}

function growPlant(plant: IPlant): void {
    plant.name = 'green algae'
    // plant.type = 'algae' // compile-time error
    console.log(`growing plant ${plant.name} that is a ${plant.type}`)
}

growPlant({name: 'pine', type: 'tree', color: 'green'})

// function types
interface IGrowPlant {
    (plant: IPlant): void
}

let growTree: IGrowPlant = (tree: IPlant): void => {
    console.log(`growing a tree named ${tree.name}`)
}

growTree({name: 'pine', type: 'tree'})

// Indexable Types
interface IStringArray {
    [index: number]: string
}

let strArr: IStringArray = ['foo', 'bar']
console.log(strArr)

// class types
interface IClock {
    currentTime: Date
    tick(): void
}

class Clock implements IClock {
    public currentTime: Date

    constructor() {
        this.currentTime = new Date()
        setTimeout(() => this.tick(), 1000)
    }

    public tick(): void {
        console.log(this.currentTime)
        this.currentTime = new Date()
    }
}

let rolex = new Clock()
console.log(rolex.currentTime)

// extending interface
interface ILabel {
    text: string
}

interface IColoredLabel extends ILabel {
    color: string
}

interface IBoldedLabel extends ILabel {
    bold: boolean
}

interface IAdvancedLabel extends IColoredLabel, IBoldedLabel {
    type: string
}

let label = <IAdvancedLabel> {}
label.text = 'a label'
label.color = 'red'
label.bold = true
label.type = 'advanced label'
console.log(label)