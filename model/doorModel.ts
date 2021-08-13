export default class DoorModel {
    #number: number
    #hasGift: boolean
    #selected: boolean
    #open: boolean

    constructor(number: number, hasGift = false, selected = false, open = false) {
        this.#number = number
        this.#hasGift = hasGift
        this.#selected = selected
        this.#open = open
    }

    get number(): number {
        return this.#number
    }

    get hasGift(): boolean {
        return this.#hasGift
    }

    get selected(): boolean {
        return this.#selected
    }

    get opened(): boolean {
        return this.#open
    }

    get closed(): boolean {
        return !this.#open
    }

    unSelect(): DoorModel {
        const selected = false

        return new DoorModel(this.number, this.hasGift, selected, this.opened)
    }

    selectionAlterante(): DoorModel {
        const selected = !this.selected

        return new DoorModel(this.number, this.hasGift, selected, this.opened)
    }

    open(): DoorModel {
        const open = true

        return new DoorModel(this.number, this.hasGift, this.selected, open)
    }

}