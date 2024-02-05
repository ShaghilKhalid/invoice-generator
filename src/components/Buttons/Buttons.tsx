import React from 'react'
type buttonProps = {
    title: String
    Class: String
    click: () => void
}
const Buttons: React.FC<buttonProps> = ({ title, Class, click }) => {
    return <button onClick={click} className={`${Class}`}>{title}</button>
}

export default Buttons