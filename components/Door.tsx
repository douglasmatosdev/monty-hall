import DoorModel from '../model/doorModel'
import styles from '../styles/Door.module.css'
import Gift from './Gift'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.opened ? styles.selected : ''

    const selectionAlternation = e => props.onChange(door.selectionAlterante())
    const open = e => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.doorknob} onClick={open}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={selectionAlternation}>
            <div className={`${styles.structure} ${selected}`}>
                {door.closed ? 
                    renderDoor() : door.hasGift ? <Gift /> : false}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}