import DoorModel from "../model/doorModel";

export function createDoors(amount: number, doorHasGift: number): DoorModel[] {
    return Array.from({ length: amount }, (_, i) => {
        const doorNumber = i + 1
        const hasGift = doorNumber === doorHasGift

        return new DoorModel(doorNumber, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], doorModified: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const equalModified = currentDoor.number === doorModified.number

        if (equalModified) {
            return doorModified
        } else {
            return doorModified.opened ? currentDoor : currentDoor.unSelect()
        }
    })
}