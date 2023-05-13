import React, { useState } from 'react'
import ChevronDown from "../../assets/Vector.png"
import ChevronUp from "../../assets/vector-haut.png"
import './Dropdown.css'

export default function Dropdown({ content, title }) {

    const isArray = Array.isArray(content)

    const [toggle, setToggle] = useState(false)
    const [stateImage, setStateImage] = useState(false)

    const toggleState = () => {
        setToggle(!toggle)
        setStateImage(!stateImage)
    }

    return (
        <div className="dropdown">
            <div onClick={toggleState} className='dropdown-visible'>
                <h2>{ title }</h2>
                <img src={stateImage ? ChevronUp : ChevronDown } alt={stateImage ? "Chevron Up" : "Chevron Down"} />
            </div>
            {
                isArray ? (
                    <ul className={toggle ? 'dropdown-toggle open' : 'dropdown-toggle'}>
                        {content.map((equipement) => (
                            <li aria-hidden={toggle ? "true" : "false"} key={equipement}>{equipement}</li>
                        ))}
                    </ul>
                ) : (
                    <div className="container-text">
                        <p aria-hidden={toggle ? "true" : "false"} className={toggle ? 'dropdown-toggle open' : 'dropdown-toggle'}>{content}</p>
                    </div>
                )
            }
        </div>
    )
}
