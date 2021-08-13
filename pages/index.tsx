import styles from '../styles/Form.module.css'
import Card from "../components/Card";
import Link from 'next/link';
import NumberInput from '../components/NumberInput';
import { useState } from 'react';

export default function Form() {
  const [amountDoors, setAmountDoors] = useState(3)
  const [hasGift, setHasGift] = useState(3)

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Number of Doors"
            value={amountDoors}
            onChange={setAmountDoors}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Door has gift?"
            value={hasGift}
            onChange={setHasGift}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${amountDoors}/${hasGift}`} passHref>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
