import styles from '../../../styles/Game.module.css'
import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/doors"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Game() {
    const router = useRouter()

    const [isValid, setIsValid] = useState(false)
    const [doors, setDoors] = useState([])

    useEffect(() => {
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift

        const amountValidDoors = doors >= 3 && doors <= 100
        const hasValidGift = hasGift >= 1 && hasGift <= doors

        setIsValid(amountValidDoors && hasValidGift)
    }, [doors, router.query.doors, router.query.hasGift])

    useEffect(() => {
        const doors = +router.query.doors
        const hasGift = +router.query.hasGift

        setDoors(createDoors(doors, hasGift))
    }, [router?.query])

    function renderDoors() {
        return isValid && doors.map(door => {
            return <Door
                key={door.number}
                value={door}
                onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }

    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {isValid ? renderDoors() : <h1>Invalid values</h1>}
            </div>
            <div className={styles.buttons}>
                <Link href="/" passHref>
                    <button>RESTART</button>
                </Link>
            </div>
        </div>
    )
}