'use client'

import styles from './card.module.css'

export default function Card({ children, className, style }) {
    const classes = [styles.card, className].join(' ')

    return (
        <div className={classes} style={style}>
            { children }
        </div>
    )
}