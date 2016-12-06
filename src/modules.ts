// exporting declarations
export const CPU_MAX_PROCESSES = 8
export class Person {}
export interface IPerson {name: string}

// export statements
const MEMORY_LIMIT = 256
export {MEMORY_LIMIT}
export {Person as BaseHuman}

/*// re-exporting
export * from './human'
export {Person as BaseHuman} from './human'

// default export
export default class Human {}*/